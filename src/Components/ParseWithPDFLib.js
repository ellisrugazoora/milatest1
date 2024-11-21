import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const ParseWithPDFLib = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfTitle, setPdfTitle] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPdfFile(file);
      setErrorMessage('');
      setPdfTitle(null);
    }
  };

  // Parse the selected PDF file
  const parsePdf = async () => {
    if (!pdfFile) {
      setErrorMessage('Please select a PDF file first.');
      return;
    }

    try {
      // Read the file as an ArrayBuffer
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      
      // Extract PDF metadata (e.g., title)
      const metadata = await pdfDoc.getMetadata();
      setPdfTitle(metadata.title || 'No title found');
    } catch (error) {
      setErrorMessage('Failed to parse the PDF. It might be corrupt or unsupported.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Parse PDF with pdf-lib</h2>

      {/* File Input */}
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
      />

      {/* Button to trigger parsing */}
      <button onClick={parsePdf}>Parse PDF</button>

      {/* Display PDF Title */}
      {pdfTitle && <p><strong>PDF Title:</strong> {pdfTitle}</p>}

      {/* Error message */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default ParseWithPDFLib;
