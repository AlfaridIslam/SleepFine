import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const WarrantyForm2 = () => {
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

  const cardRef = useRef();

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

  const storeOptions = [
    "Alwal",
    "Ameerpet Store",
    "Hafiz Baba Nagar",
    "Kompally",
    "Shahpur/Gajularamaram",
  ];

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

  const handleProductChange = (e) => {
    const product = e.target.value;
    setSelectedProduct(product);
    setVarieties(productOptions[product] || []);
    setSelectedVariety("");
    setWarranty("");
  };

  const handleVarietyChange = (e) => {
    const variety = e.target.value;
    setSelectedVariety(variety);
    const warrantyPeriod = Object.keys(warrantyOptions).find((period) =>
      warrantyOptions[period].includes(variety)
    );
    setWarranty(warrantyPeriod || "");
  };

  const handlePurchaseFromChange = (e) => {
    const purchase = e.target.value;
    setPurchaseFrom(purchase);
    setSelectedStore("");
  };

  const generatePDF = async () => {
    const doc = new jsPDF();
    const cardElement = cardRef.current;

    const canvas = await html2canvas(cardElement);
    const imgData = canvas.toDataURL("image/png");
    doc.addImage(imgData, "PNG", 10, 10, 190, 0);
    return doc;
  };

  const sendViaWhatsApp = (pdfUrl, phoneNumber) => {
    const formattedNumber = phoneNumber.replace(/\D/g, "");
    const message = encodeURIComponent(`Here is your warranty card: ${pdfUrl}`);
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setSuccessMessage("");

    const requiredFields = [
      customerName,
      address,
      mobileNumber,
      email,
      selectedProduct,
      selectedVariety,
      orderNumber,
      invoiceDate,
    ];

    if (requiredFields.some((field) => !field)) {
      setFormError("Please fill out all mandatory fields.");
      return;
    }

    try {
      const pdfDoc = await generatePDF();
      const pdfBlob = pdfDoc.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);
      pdfDoc.save(`Warranty_Card_${customerName.replace(/\s+/g, "_")}.pdf`);

      if (mobileNumber) {
        sendViaWhatsApp(pdfUrl, mobileNumber);
      }

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
    <div
      className="max-w-lg mx-auto p-6 shadow-lg border rounded-lg mt-3 xl:mx-auto sm:ml-[33%] sm:w-[100%]"
      ref={cardRef}
    >
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

        <div className="mb-4">
          <label className="block text-gray-700">Purchase From</label>
          <select
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={purchaseFrom}
            onChange={handlePurchaseFromChange}
          >
            <option value="">Select a store</option>
            {storeOptions.map((store) => (
              <option key={store} value={store}>
                {store}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Order Number</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Invoice Date</label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Generate Warranty Card
        </button>
      </form>
    </div>
  );
};

export default WarrantyForm2;
