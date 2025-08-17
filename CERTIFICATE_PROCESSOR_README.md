# Certificate Processing Script

This script processes SVG certificate files by replacing placeholder text with actual data from CSV or JSON files, and exports them as PNG and PDF files.

## Features

- ✅ Processes all SVG files in subfolders of the `images` directory
- ✅ Replaces placeholder text with actual data from CSV/JSON files
- ✅ Maintains original SVG design, style, and layout
- ✅ Exports processed SVGs as high-resolution PNG and PDF files
- ✅ Preserves folder structure in output
- ✅ Supports both CSV and JSON input formats
- ✅ Customizable placeholder mapping

## Prerequisites

### Required Software
- **Node.js** (v14 or higher)
- **Inkscape** (for PNG/PDF conversion)

### Installing Inkscape
- **Windows**: Download from [Inkscape.org](https://inkscape.org/release/)
- **macOS**: `brew install inkscape`
- **Linux**: `sudo apt-get install inkscape` (Ubuntu/Debian)

## Installation

1. Ensure you have Node.js installed
2. The script is ready to use - no additional npm packages required

## Usage

### Basic Usage

```bash
# Process with CSV file (generates both PNG and PDF)
node certificate-processor.js sample-certificates.csv

# Process with JSON file (generates both PNG and PDF)
node certificate-processor.js sample-certificates.json

# Process with specific output formats
node certificate-processor.js sample-certificates.csv png
node certificate-processor.js sample-certificates.csv pdf
node certificate-processor.js sample-certificates.csv png,pdf
```

### Command Line Arguments

1. **Data file path** (required): Path to your CSV or JSON file
2. **Output formats** (optional): Comma-separated list of formats (`png`, `pdf`)

## Input Data Format

### CSV Format
```csv
Name,Course,Date,Instructor
John Doe,Web Development,2024-01-15,Dr. Sarah Johnson
Jane Smith,Data Science,2024-01-20,Prof. Michael Chen
```

### JSON Format
```json
[
  {
    "Name": "John Doe",
    "Course": "Web Development",
    "Date": "2024-01-15",
    "Instructor": "Dr. Sarah Johnson"
  }
]
```

## Placeholder Mapping

The script automatically maps these placeholder texts to your data:

| SVG Placeholder | Data Field |
|----------------|------------|
| Legal Name | Name |
| Trade Name, if any | Course |
| Date of Liability | Date |
| Date of issue of Certificate | Date |
| DATE OF UDYAM REGISTRATION | Date |
| NAME OF ENTERPRISE | Name |
| NAME OF UNIT(S) | Course |
| Firm Name | Name |
| Date of | Date |
| Name of the | Instructor |
| Name Of Premises/Building: | Course |

## Output Structure

```
output/
├── Trade Certificate/
│   ├── cert1_JohnDoe.svg
│   ├── cert1_JohnDoe.png
│   ├── cert1_JohnDoe.pdf
│   ├── cert1_JaneSmith.svg
│   ├── cert1_JaneSmith.png
│   └── cert1_JaneSmith.pdf
├── certificate of IEC/
│   └── ... (processed files)
├── Udaym certificate/
│   └── ... (processed files)
└── gst resgistration certificate/
    └── ... (processed files)
```

## Customization

### Adding New Placeholder Mappings

Edit the `PLACEHOLDER_MAPPING` object in the script:

```javascript
const PLACEHOLDER_MAPPING = {
  'Legal Name': 'Name',
  'Trade Name, if any': 'Course',
  'Date of Liability': 'Date',
  'Date of issue of Certificate': 'Date',
  // Add your custom mappings here
  'Your Placeholder Text': 'YourDataField'
};
```

### Modifying Output Directory

Change the `OUTPUT_DIR` constant in the script:

```javascript
const OUTPUT_DIR = path.join(__dirname, 'your-custom-output-folder');
```

## Troubleshooting

### Common Issues

1. **"Inkscape not available" warning**
   - Install Inkscape and ensure it's in your system PATH
   - The script will still process SVGs but won't convert to PNG/PDF

2. **"No SVG files found" message**
   - Check that your `images` folder contains SVG files
   - Ensure SVG files have `.svg` extension

3. **Placeholder text not replaced**
   - Verify the placeholder text exists exactly as written in the SVG
   - Check that your data file contains the expected column names
   - Review the placeholder mapping in the script

### Debug Mode

To see more detailed processing information, you can modify the script to add console.log statements in the `processSVGContent` method.

## Example Workflow

1. **Prepare your data**:
   ```bash
   # Create a CSV file with certificate information
   echo "Name,Course,Date,Instructor" > certificates.csv
   echo "John Doe,Web Development,2024-01-15,Dr. Sarah Johnson" >> certificates.csv
   ```

2. **Run the script**:
   ```bash
   node certificate-processor.js certificates.csv
   ```

3. **Check results**:
   ```bash
   # View the output folder
   ls -la output/
   ```

## Performance Notes

- Processing time depends on the number of SVG files and data entries
- PNG/PDF conversion is the most time-consuming part
- Large SVG files may take longer to process
- Consider processing in batches for very large datasets

## Support

If you encounter issues:

1. Check that all prerequisites are installed
2. Verify your data file format matches the examples
3. Ensure SVG files contain the expected placeholder text
4. Check console output for specific error messages

## License

This script is provided as-is for educational and practical use. 