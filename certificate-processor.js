#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const IMAGES_DIR = path.join(__dirname, 'images');
const OUTPUT_DIR = path.join(__dirname, 'output');
const SUPPORTED_FORMATS = ['png', 'pdf'];

// Placeholder mapping - customize these based on your SVG content
const PLACEHOLDER_MAPPING = {
  'Legal Name': 'Name',
  'Trade Name, if any': 'Course',
  'Date of Liability': 'Date',
  'Date of issue of Certificate': 'Date',
  'DATE OF UDYAM REGISTRATION': 'Date',
  'NAME OF ENTERPRISE': 'Name',
  'NAME OF UNIT(S)': 'Course',
  'Name of Unit(s)': 'Course',
  'Firm Name': 'Name',
  'Date of': 'Date',
  'Name of the': 'Instructor',
  'Name Of Premises/Building:': 'Course',
  'Additional trade names, if': 'Course'
};

class CertificateProcessor {
  constructor() {
    this.ensureOutputDirectory();
  }

  ensureOutputDirectory() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
  }

  // Parse CSV file
  parseCSV(csvPath) {
    try {
      const csvContent = fs.readFileSync(csvPath, 'utf-8');
      const lines = csvContent.trim().split('\n');
      const headers = lines[0].split(',').map(h => h.trim());
      
      return lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim());
        const row = {};
        headers.forEach((header, index) => {
          row[header] = values[index] || '';
        });
        return row;
      });
    } catch (error) {
      console.error(`Error parsing CSV file: ${error.message}`);
      return [];
    }
  }

  // Parse JSON file
  parseJSON(jsonPath) {
    try {
      const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
      return JSON.parse(jsonContent);
    } catch (error) {
      console.error(`Error parsing JSON file: ${error.message}`);
      return [];
    }
    }

  // Process SVG content by replacing placeholder text
  processSVGContent(svgContent, data) {
    let processedContent = svgContent;
    
    // Replace placeholders with actual data
    Object.entries(PLACEHOLDER_MAPPING).forEach(([placeholder, dataKey]) => {
      if (data[dataKey]) {
        // Create regex pattern to match the placeholder text in SVG
        const pattern = new RegExp(`>${placeholder}<`, 'g');
        processedContent = processedContent.replace(pattern, `>${data[dataKey]}<`);
        
        // Also try to match text content in tspan elements
        const tspanPattern = new RegExp(`<tspan[^>]*>([^<]*${placeholder}[^<]*)</tspan>`, 'g');
        processedContent = processedContent.replace(tspanPattern, (match, text) => {
          return match.replace(text, text.replace(placeholder, data[dataKey]));
        });
      }
    });

    return processedContent;
  }

  // Save processed SVG
  saveProcessedSVG(originalPath, processedContent, data, subfolder) {
    const filename = path.basename(originalPath, '.svg');
    const newFilename = `${filename}_${data.Name || 'processed'}.svg`;
    const outputPath = path.join(OUTPUT_DIR, subfolder, newFilename);
    
    // Ensure subfolder exists in output
    const subfolderPath = path.dirname(outputPath);
    if (!fs.existsSync(subfolderPath)) {
      fs.mkdirSync(subfolderPath, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, processedContent);
    console.log(`✓ Saved processed SVG: ${newFilename}`);
    return outputPath;
  }

  // Convert SVG to PNG using Inkscape (if available)
  async convertToPNG(svgPath, outputPath) {
    try {
      // Try using Inkscape first (most reliable for SVG to PNG)
      const inkscapeCmd = `inkscape --export-type=png --export-filename="${outputPath}" "${svgPath}"`;
      execSync(inkscapeCmd, { stdio: 'pipe' });
      console.log(`✓ Converted to PNG: ${path.basename(outputPath)}`);
      return true;
    } catch (error) {
      console.warn(`⚠ Inkscape not available, skipping PNG conversion for: ${path.basename(svgPath)}`);
      return false;
    }
  }

  // Convert SVG to PDF using Inkscape (if available)
  async convertToPDF(svgPath, outputPath) {
    try {
      // Try using Inkscape for SVG to PDF
      const inkscapeCmd = `inkscape --export-type=pdf --export-filename="${outputPath}" "${svgPath}"`;
      execSync(inkscapeCmd, { stdio: 'pipe' });
      console.log(`✓ Converted to PDF: ${path.basename(outputPath)}`);
      return true;
    } catch (error) {
      console.warn(`⚠ Inkscape not available, skipping PDF conversion for: ${path.basename(svgPath)}`);
      return false;
    }
  }

  // Process a single SVG file
  async processSVGFile(svgPath, data, subfolder) {
    try {
      console.log(`\nProcessing: ${path.basename(svgPath)}`);
      
      // Read SVG content
      const svgContent = fs.readFileSync(svgPath, 'utf-8');
      
      // Process SVG content
      const processedContent = this.processSVGContent(svgContent, data);
      
      // Save processed SVG
      const processedSVGPath = this.saveProcessedSVG(svgPath, processedContent, data, subfolder);
      
      // Convert to PNG
      const pngPath = processedSVGPath.replace('.svg', '.png');
      await this.convertToPNG(processedSVGPath, pngPath);
      
      // Convert to PDF
      const pdfPath = processedSVGPath.replace('.svg', '.pdf');
      await this.convertToPDF(processedSVGPath, pdfPath);
      
      return true;
    } catch (error) {
      console.error(`✗ Error processing ${path.basename(svgPath)}: ${error.message}`);
      return false;
    }
  }

  // Process all SVG files in a subfolder
  async processSubfolder(subfolderPath, dataArray) {
    const subfolderName = path.basename(subfolderPath);
    console.log(`\n📁 Processing subfolder: ${subfolderName}`);
    
    // Get all SVG files in the subfolder
    const svgFiles = fs.readdirSync(subfolderPath)
      .filter(file => file.toLowerCase().endsWith('.svg'))
      .map(file => path.join(subfolderPath, file));
    
    if (svgFiles.length === 0) {
      console.log(`No SVG files found in ${subfolderName}`);
      return;
    }
    
    console.log(`Found ${svgFiles.length} SVG file(s)`);
    
    // Process each SVG file with each data entry
    for (const svgFile of svgFiles) {
      for (const data of dataArray) {
        await this.processSVGFile(svgFile, data, subfolderName);
      }
    }
  }

  // Main processing function
  async processCertificates(dataPath, outputFormats = ['png', 'pdf']) {
    console.log('🎓 Certificate Processing Script');
    console.log('================================');
    
    // Parse data file
    let dataArray = [];
    const fileExt = path.extname(dataPath).toLowerCase();
    
    if (fileExt === '.csv') {
      dataArray = this.parseCSV(dataPath);
    } else if (fileExt === '.json') {
      dataArray = this.parseJSON(dataPath);
    } else {
      throw new Error('Unsupported file format. Please use CSV or JSON.');
    }
    
    if (dataArray.length === 0) {
      throw new Error('No data found in the input file.');
    }
    
    console.log(`📊 Loaded ${dataArray.length} certificate data entries`);
    console.log(`📁 Input directory: ${IMAGES_DIR}`);
    console.log(`📁 Output directory: ${OUTPUT_DIR}`);
    console.log(`🔄 Output formats: ${outputFormats.join(', ')}`);
    
    // Get all subfolders in the images directory
    const subfolders = fs.readdirSync(IMAGES_DIR)
      .filter(item => {
        const itemPath = path.join(IMAGES_DIR, item);
        return fs.statSync(itemPath).isDirectory();
      })
      .map(item => path.join(IMAGES_DIR, item));
    
    console.log(`\n📂 Found ${subfolders.length} subfolder(s):`);
    subfolders.forEach(folder => console.log(`  - ${path.basename(folder)}`));
    
    // Process each subfolder
    for (const subfolder of subfolders) {
      await this.processSubfolder(subfolder, dataArray);
    }
    
    console.log('\n🎉 Certificate processing completed!');
    console.log(`📁 Check the '${OUTPUT_DIR}' folder for results.`);
  }
}

// CLI usage
async function main() {
  try {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
      console.log('Usage: node certificate-processor.js <data-file> [output-formats]');
      console.log('Example: node certificate-processor.js certificates.csv png,pdf');
      console.log('Example: node certificate-processor.js certificates.json png');
      console.log('\nSupported output formats: png, pdf');
      console.log('\nData file should contain columns: Name, Course, Date, Instructor');
      process.exit(1);
    }
    
    const dataPath = args[0];
    const outputFormats = args[1] ? args[1].split(',') : ['png', 'pdf'];
    
    // Validate data file exists
    if (!fs.existsSync(dataPath)) {
      throw new Error(`Data file not found: ${dataPath}`);
    }
    
    // Validate output formats
    const invalidFormats = outputFormats.filter(f => !SUPPORTED_FORMATS.includes(f));
    if (invalidFormats.length > 0) {
      throw new Error(`Unsupported output formats: ${invalidFormats.join(', ')}`);
    }
    
    const processor = new CertificateProcessor();
    await processor.processCertificates(dataPath, outputFormats);
    
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default CertificateProcessor; 