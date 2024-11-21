import React, { useState } from "react";
import * as pdfjs from "pdfjs-dist/webpack";
import OpenaiIntegration from "./OpenaiIntegration";

const PrintContentsOfPDF = () => {
  const [pdfContent, setPdfContent] = useState("");
  var count = 0;
  const handleFileChange = (event) => {
    const files = event.target.files;
    let fileArray = Object.entries(files);
    fileArray.forEach((filePair)=>{
      let file = filePair[1];
      // console.log(file.name)
      if (file && file.type === "application/pdf") {
        const reader = new FileReader();

        reader.onload = async (e) => {
          const typedArray = new Uint8Array(e.target.result);
          try {
            const pdf = await pdfjs.getDocument(typedArray).promise;
            let text = "";
            for (let i = 1; i <= pdf.numPages; i++) {
              const page = await pdf.getPage(i);
              const textContent = await page.getTextContent();
              text += textContent.items.map((item) => item.str).join(" ") + "\n";
            }
            console.log(`${file.name}: \n \n \n ${text}`);
            setPdfContent(current => current + `\n ${file.name} \n ` + text.slice(0, 100));
            document.getElementById("countDisplay").textContent = ++count;
          } catch (error) {
            console.error("Error reading PDF:", error);
            setPdfContent("Error reading PDF.");
            document.getElementById("countDisplay").textContent = ++count;
          }
        };

        reader.readAsArrayBuffer(file);
      } else {
        setPdfContent(current => current + "\n Please upload a valid PDF file. \n");
        document.getElementById("countDisplay").textContent = ++count;
      }
    
    })

    
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Print PDF Contents</h2>
      <input type="file" /* accept="application/pdf"*/ onChange={handleFileChange} multiple />
      <div style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        <h3>PDF Contents:</h3>
        <h1>Count: <span id="countDisplay">0</span></h1>
        <p>{pdfContent}</p>
      </div>
      <OpenaiIntegration />
    </div>
  );
};

export default PrintContentsOfPDF;
