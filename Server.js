import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// Middleware for JSON
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the built frontend from "dist"
app.use(express.static(path.join(__dirname, "dist")));

// Example backend API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Catch-all route: always send index.html for frontend routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
