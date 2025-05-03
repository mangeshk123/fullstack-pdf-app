const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PDF_DIR = path.join(__dirname, 'pdfs');
const ANGULAR_DIST_PATH = path.join(__dirname, '../pdflist/dist/pdflist');
const INDEX_HTML_PATH = path.join(ANGULAR_DIST_PATH, 'index.html');
const cors = require('cors');
app.use(cors());


// Serve Angular static files
app.use(express.static(ANGULAR_DIST_PATH));

// API endpoint to get list of PDFs
app.get('/api/pdfs', (req, res) => {
  fs.readdir(PDF_DIR, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to scan PDF folder' });
    }
    const pdfFiles = files.filter(file => file.endsWith('.pdf'));
    res.json(pdfFiles);
  });
});

// Serve PDF files
app.get('/pdfs/:filename', (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(PDF_DIR, filename);

  if (fs.existsSync(filepath)) {
    res.sendFile(filepath);
  } else {
    res.status(404).send('PDF not found');
  }
});

// Catch-all route to serve Angular index.html
app.get('/{*any}', (req, res) => {
  if (fs.existsSync(INDEX_HTML_PATH)) {
    res.sendFile(INDEX_HTML_PATH);
  } else {
    res.status(500).send('Angular build not found. Please build the Angular app.');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
