import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import WarrantyCardTemplate from "./WarrantyCard";

const WarrantyCardPreview = () => {
  const [testData] = useState({
    customerName: "John Doe",
    address: "123 Main Street, Downtown",
    mobileNumber: "9876543210",
    email: "john.doe@example.com",
    state: "Telangana",
    city: "Hyderabad",
    selectedProduct: "Orthopedic Bonded Collection",
    selectedVariety: "Buckingham",
    sizeType: "standard",
    length: "72 inches",
    breadth: "48 inches",
    height: "8 inches",
    totalQuantity: "1",
    purchaseFrom: "Store",
    selectedStore: "Ameerpet Store",
    orderNumber: "SF2024001",
    invoiceDate: "2024-01-15",
    warranty: "10 years"
  });

  const generatePreviewPDF = async () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    document.body.classList.add('export-mode');

    // Create container with fixed size for consistent PDF rendering
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = "-9999px";
    div.style.top = "-9999px";
    div.style.width = isMobile ? "375px" : "800px";
    div.style.visibility = "hidden";
    document.body.appendChild(div);

    try {
      const root = ReactDOM.createRoot(div);
      root.render(<WarrantyCardTemplate data={testData} />);

      // Wait for render and layout stabilization
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Ensure all images are loaded before capturing
      const images = div.querySelectorAll('img');
      await Promise.all(
        Array.from(images).map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      // Device-specific canvas configuration
      const canvas = await html2canvas(div, {
        scale: isMobile ? 2 : 1.5,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
        imageTimeout: 15000,
        removeContainer: false,
        foreignObjectRendering: false,
        width: parseInt(div.style.width),
        height: div.scrollHeight
      });

      const imgData = canvas.toDataURL("image/png", 0.95);
      
      // Create PDF with proper sizing
      const pdf = new jsPDF({ 
        orientation: 'portrait', 
        unit: 'pt', 
        format: 'a4' 
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgAspectRatio = canvas.height / canvas.width;
      
      // Calculate dimensions maintaining aspect ratio
      let renderWidth = pdfWidth - 40;
      let renderHeight = renderWidth * imgAspectRatio;
      
      // If height exceeds page, scale down
      if (renderHeight > pdfHeight - 40) {
        renderHeight = pdfHeight - 40;
        renderWidth = renderHeight / imgAspectRatio;
      }
      
      const marginX = (pdfWidth - renderWidth) / 2;
      const marginY = (pdfHeight - renderHeight) / 2;
      
      pdf.addImage(imgData, 'PNG', marginX, marginY, renderWidth, renderHeight);
      
      // Save the PDF
      pdf.save(`Warranty_Card_Preview_${testData.customerName.replace(/\s+/g, "_")}.pdf`);
      
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      document.body.classList.remove('export-mode');
      if (document.body.contains(div)) {
        document.body.removeChild(div);
      }
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">Warranty Card Live Preview</h1>
        <p className="text-gray-600">Resize browser window to test responsiveness</p>
        <p className="text-sm text-blue-600">
          Mobile: &lt;768px | Tablet: 768px-1279px | Desktop: ≥1280px
        </p>
        <button
          onClick={generatePreviewPDF}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition-colors"
        >
          Generate Test PDF
        </button>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <WarrantyCardTemplate data={testData} />
      </div>
    </div>
  );
};

export default WarrantyCardPreview;
