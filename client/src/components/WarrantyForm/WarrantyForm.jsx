import React, { useState } from "react";
import jsPDF from "jspdf";

const WarrantyForm = () => {
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedVariety, setSelectedVariety] = useState("");
  const [purchaseFrom, setPurchaseFrom] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [warranty, setWarranty] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [dealerName, setDealerName] = useState("");
  const [varieties, setVarieties] = useState([]);
  const [selectedStore, setSelectedStore] = useState("");
  const [storeNames, setStoreNames] = useState([]);

  //   Product Details
  const productOptions = {
    "Orthopedic Bonded Collection": [
      "Orthomed",
      "Milange",
      "Preference",
      "Buckingham",
      "Buckingham Lexus",
      "Aloe-Vera with Latex 6 inches",
      "Aloe-vera with Memory 6 inches",
      "Aloe-Vera with Latex 8 & 10 inches",
      "Aloe-vera with Memory 8 & 10 inches",
      "Memofy",
    ],
    "Ortho Bonnell Spring Collection": [
      "Oxford",
      "LoveLand",
      "Romantic Euroton",
      "Ambitious",
      "Aloe-Vera with Latex 6 inches",
      "Aloe-vera with Memory 6 inches",
      "Aloe-Vera with Latex 8 & 10 inches",
      "Aloe-vera with Memory 8 & 10 inches",
    ],
    "Pocketed Spring Collection": [
      "Inspiration",
      "Eternity Euroton",
      "Aloe-Vera with Latex 6 inches",
      "Aloe-vera with Memory 6 inches",
      "Aloe-Vera with Latex 8 & 10 inches",
      "Aloe-vera with Memory 8 & 10 inches",
    ],
    "HR-PU Foam Collection": [
      "Gravity",
      "Space",
      "Memory Active",
      "Rose by Rose",
    ],
  };

  //   store details
  const storeOptions = [
    "Alwal",
    "Ameerpet Store",
    "Hafiz Baba Nagar",
    "Kompally",
    "Shahpur/Gajularamaram",
  ];

  //   warranty details
  const warrantyOptions = {
    "10 years": [
      "Aloe-Vera with Latex 8 & 10 inches",
      "Aloe-Vera with Memory 8 & 10 inches",
      "Buckingham",
      "Buckingham Lexus",
      "LoveLand",
      "Romantic Euroton",
      "Ambitious",
      "Memory Active",
      "Rose by Rose",
    ],
    "5 years": [
      "Aloe-Vera with Latex 6 inches",
      "Aloe-Vera with Memory 6 inches",
      "Orthomed",
      "Preference",
      "Memofy",
      "Oxford",
      "Gravity",
      "Inspiration",
      "Eternity Euroton",
    ],
    "7 years": ["Milange", "Space"],
  };

  //   handling product
  const handleProductChange = (e) => {
    const product = e.target.value;
    setSelectedProduct(product);
    setVarieties(productOptions[product] || []);
    setSelectedVariety("");
    setWarranty("");
  };

  //   handling product variety
  const handleVarietyChange = (e) => {
    const variety = e.target.value;
    setSelectedVariety(variety);
    const warrantyPeriod = Object.keys(warrantyOptions).find((period) =>
      warrantyOptions[period].includes(variety)
    );
    setWarranty(warrantyPeriod || "");
  };

  //   handling Purchase from
  const handlePurchaseFromChange = (e) => {
    const purchase = e.target.value;
    setPurchaseFrom(purchase);
    setStoreNames(purchase === "Store" ? storeOptions : []);
  };

  // Function to generate the PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Set the background color for the title
    const titleX = doc.internal.pageSize.width / 2; // Center horizontally
    const titleY = 20; // Position at the top
    const titleHeight = 10; // Adjust the height as needed

    // Draw a rectangle for the background
    doc.setFillColor(0, 123, 255); // Bootstrap blue color (RGB)
    doc.rect(0, titleY - 5, doc.internal.pageSize.width, titleHeight, "F"); // Draw rectangle, 'F' for fill

    // Add title
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255); // Set text color to white for contrast
    doc.text("Sleep Fine", titleX, titleY, { align: "center" });

    // Add subtitle
    doc.setFontSize(16);
    doc.text("Warranty Card", 20, 35);

    // Add customer details
    doc.setFontSize(16);
    doc.text("Warranty Card", 20, 20);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Reset text color to black
    doc.text(`Customer Name: ${customerName}`, 20, 40);
    doc.text(`Address: ${address}`, 20, 50);
    doc.text(`Mobile Number: ${mobileNumber}`, 20, 60);
    doc.text(`Email: ${email}`, 20, 70);
    doc.text(`Product: ${selectedProduct}`, 20, 80);
    doc.text(`Variety: ${selectedVariety}`, 20, 90);
    doc.text(`Purchase From: ${purchaseFrom}`, 20, 100);

    if (purchaseFrom === "Store") {
      doc.text(`Store Name: ${selectedStore}`, 20, 110);
    } else if (purchaseFrom === "Dealer" && dealerName) {
      doc.text(`Dealer Name: ${dealerName}`, 20, 110);
    }
    doc.text(`Order Number: ${orderNumber}`, 20, 120);
    doc.text(`Invoice Date: ${invoiceDate}`, 20, 130);
    doc.text(`Warranty Period: ${warranty}`, 20, 140);

    return doc;
  };


  // Function to send the PDF via WhatsApp
  const sendViaWhatsApp = (pdfUrl, phoneNumber) => {
    const formattedNumber = phoneNumber.replace(/\D/g, ""); // Format phone number to remove non-numeric characters
    const message = encodeURIComponent(`Here is your warranty card: ${pdfUrl}`); // WhatsApp message

    // WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${message}`;

    // Open the WhatsApp URL in a new tab
    window.open(whatsappUrl, "_blank");
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset messages
    setFormError("");
    setSuccessMessage("");

    // Validate required fields
    if (
      !customerName ||
      !address ||
      !mobileNumber ||
      !email ||
      !selectedProduct ||
      !selectedVariety ||
      !orderNumber ||
      !invoiceDate
    ) {
      setFormError("Please fill out all mandatory fields.");
      return;
    }

    // Generate the PDF
    try {
      // Generate PDF
      const pdfDoc = generatePDF();

      // Create PDF URL for WhatsApp
      const pdfBlob = pdfDoc.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Trigger PDF download
      pdfDoc.save(`Warranty_Card_${customerName.replace(/\s+/g, "_")}.pdf`);

      // Send to customer's number
      if (mobileNumber) {
        sendViaWhatsApp(pdfUrl, mobileNumber);
      }

      // Send to fixed number
      sendViaWhatsApp(pdfUrl, "08062181296");

      setSuccessMessage(
        "Your warranty form has been generated and downloaded! Please check the WhatsApp links that have opened."
      );
    } catch (error) {
      setFormError("An error occurred while generating the warranty card.");
      console.error("PDF generation error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 shadow-lg border rounded-lg mt-3 xl:mx-auto sm:ml-[33%] sm:w-[100%]">
      <h2 className="text-2xl font-bold mb-4">Generate your warranty card</h2>
      {formError && <p className="text-red-500 mb-4">{formError}</p>}
      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Customer Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mobile Number</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Product Details section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Product Details</h3>
          <label className="block text-gray-700">Product</label>
          <select
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={selectedProduct}
            onChange={handleProductChange}
          >
            <option value="">Select a product</option>
            {Object.keys(productOptions).map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>

          {selectedProduct && (
            <>
              <label className="block text-gray-700 mt-2">Variety</label>
              <select
                className="w-full px-3 py-2 border rounded shadow-sm"
                value={selectedVariety}
                onChange={handleVarietyChange}
              >
                <option value="">Select a variety</option>
                {varieties.map((variety) => (
                  <option key={variety} value={variety}>
                    {variety}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>

        {/* Purchase Details section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Product Purchase Details</h3>
          <label className="block text-gray-700">Purchase From</label>
          <select
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={purchaseFrom}
            onChange={handlePurchaseFromChange}
          >
            <option value="">Select</option>
            <option value="Store">Store</option>
            <option value="Dealer">Dealer</option>
          </select>

          {purchaseFrom === "Store" && (
            <>
              <label className="block text-gray-700 mt-2">Store Name</label>
              <select
                className="w-full px-3 py-2 border rounded shadow-sm"
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
              >
                <option value="">Select a store</option>
                {storeOptions.map((store) => (
                  <option key={store} value={store}>
                    {store}
                  </option>
                ))}
              </select>
            </>
          )}

          {purchaseFrom === "Dealer" && (
            <>
              <label className="block text-gray-700 mt-2">Dealer Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded shadow-sm"
                value={dealerName}
                onChange={(e) => setDealerName(e.target.value)}
              />
            </>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">
            Order Form/Invoice Number
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date of Invoice</label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Warranty</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={warranty}
            disabled
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded shadow-lg hover:bg-blue-600"
        >
          Generate and Download Warranty Card
        </button>

        <p className="mt-4 text-gray-600">
          For customer support call 08062181296
        </p>
      </form>
    </div>
  );
};

export default WarrantyForm;
