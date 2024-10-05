import ReactDOM from "react-dom";
import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import WarrantyCardTemplate from "./WarrantyCard";

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

  // Product Details
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
      "orthopedic Aloe-Vera with Latex 6 inches",
      "orthopedic Aloe-vera with Memory 6 inches",
      "orthopedic Aloe-Vera with Latex 8 & 10 inches",
      "orthopedic Aloe-vera with Memory 8 & 10 inches",
    ],
    "Pocketed Spring Collection": [
      "Inspiration",
      "Eternity Euroton",
      "pocketed Aloe-Vera with Latex 6 inches",
      "pocketed Aloe-vera with Memory 6 inches",
      "pocketed Aloe-Vera with Latex 8 & 10 inches",
      "pocketed Aloe-vera with Memory 8 & 10 inches",
    ],
    "HR-PU Foam Collection": [
      "Gravity",
      "Space",
      "Memory Active",
      "Rose by Rose",
    ],
  };

  // Store details
  const storeOptions = [
    "Alwal",
    "Ameerpet Store",
    "Hafiz Baba Nagar",
    "Kompally",
    "Shahpur/Gajularamaram",
  ];

  // Warranty details
  const warrantyOptions = {
    "10 years": [
      "orthopedic Aloe-Vera with Latex 8 & 10 inches",
      "orthopedic Aloe-vera with Memory 8 & 10 inches",
      "pocketed Aloe-Vera with Latex 8 & 10 inches",
      "pocketed Aloe-vera with Memory 8 & 10 inches",
      "Buckingham",
      "Buckingham Lexus",
      "LoveLand",
      "Romantic Euroton",
      "Ambitious",
      "Memory Active",
      "Rose by Rose",
    ],
    "5 years": [
      "orthopedic Aloe-Vera with Latex 6 inches",
      "orthopedic Aloe-vera with Memory 6 inches",
      "pocketed Aloe-Vera with Latex 6 inches",
      "pocketed Aloe-vera with Memory 6 inches",
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

  // Handling product selection
  const handleProductChange = (e) => {
    const product = e.target.value;
    setSelectedProduct(product);
    setVarieties(productOptions[product] || []);
    setSelectedVariety("");
    setWarranty("");
  };

  // Handling variety selection
  const handleVarietyChange = (e) => {
    const variety = e.target.value;
    setSelectedVariety(variety);
    const warrantyPeriod = Object.keys(warrantyOptions).find((period) =>
      warrantyOptions[period].includes(variety)
    );
    setWarranty(warrantyPeriod || "");
  };

  // Handling purchase source selection
  const handlePurchaseFromChange = (e) => {
    const purchase = e.target.value;
    setPurchaseFrom(purchase);
    setStoreNames(purchase === "Store" ? storeOptions : []);
  };

  // Function to generate the PDF
  const generatePDF = async () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    const root = ReactDOM.createRoot(div);
    root.render(
      <WarrantyCardTemplate
        data={{
          customerName,
          address,
          mobileNumber,
          email,
          selectedProduct,
          selectedVariety,
          purchaseFrom,
          selectedStore,
          dealerName,
          orderNumber,
          invoiceDate,
          warranty,
        }}
      />
    );

    // Wait for render
    await new Promise((resolve) => setTimeout(resolve, 100));

    try {
      const canvas = await html2canvas(div, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [595, 842],
      });

      pdf.addImage(imgData, "PNG", 0, 0, 595, 842);

      // Cleanup
      document.body.removeChild(div);

      return pdf;
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Cleanup
      document.body.removeChild(div);
      throw error;
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
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

    try {
      // Generate PDF
      const pdfDoc = await generatePDF();

      // Trigger PDF download
      pdfDoc.save(`Warranty_Card_${customerName.replace(/\s+/g, "_")}.pdf`);

      setSuccessMessage(
        "Your warranty form has been generated and downloaded!"
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
        </div>

        {varieties.length > 0 && (
          <div className="mb-4">
            <label className="block text-gray-700">Variety</label>
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
          </div>
        )}

        {/* Purchase Details section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Purchase Details</h3>
          <label className="block text-gray-700">Purchased From</label>
          <select
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={purchaseFrom}
            onChange={handlePurchaseFromChange}
          >
            <option value="">Select purchase source</option>
            <option value="Store">Store</option>
            <option value="Online">Online</option>
          </select>
        </div>

        {purchaseFrom === "Store" && storeNames.length > 0 && (
          <div className="mb-4">
            <label className="block text-gray-700">Store</label>
            <select
              className="w-full px-3 py-2 border rounded shadow-sm"
              value={selectedStore}
              onChange={(e) => setSelectedStore(e.target.value)}
            >
              <option value="">Select store</option>
              {storeNames.map((store) => (
                <option key={store} value={store}>
                  {store}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700">Dealer Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={dealerName}
            onChange={(e) => setDealerName(e.target.value)}
          />
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

        {warranty && (
          <div className="mb-4">
            <label className="block text-gray-700">Warranty</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded shadow-sm"
              value={warranty}
              disabled
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          Generate Warranty Card
        </button>
      </form>
    </div>
  );
};

export default WarrantyForm;
