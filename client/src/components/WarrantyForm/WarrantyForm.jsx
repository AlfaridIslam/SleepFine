import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import WarrantyCardTemplate from "./WarrantyCard";

const WarrantyForm = () => {
  const initialFormState = {
    customerName: "",
    address: "",
    mobileNumber: "",
    email: "",
    state: "",
    city: "",
    selectedProduct: "",
    selectedVariety: "",
    size: "",
    purchaseFrom: "",
    selectedStore: "",
    dealerName: "",
    orderNumber: "",
    invoiceDate: "",
    warranty: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [varieties, setVarieties] = useState([]);

  // Product Details
  const productOptions = {
    "Orthopedic Bonded Collection": [
      "Orthomed",
      "Milange",
      "Preference",
      "Buckingham",
      "Buckingham Lexus",
      "orthopedic Aloe-Vera with Latex 6 inches",
      "orthopedic Aloe-vera with Memory 6 inches",
      "orthopedic Aloe-Vera with Latex 8 & 10 inches",
      "orthopedic Aloe-vera with Memory 8 & 10 inches",
      "Memofy",
    ],
    "Ortho Bonnell Spring Collection": [
      "Oxford",
      "LoveLand",
      "Romantic Euroton",
      "Ambitious",
      "ortho bonnell Aloe-Vera with Latex 6 inches",
      "ortho bonnell Aloe-vera with Memory 6 inches",
      "ortho bonnell Aloe-Vera with Latex 8 & 10 inches",
      "ortho bonnell Aloe-vera with Memory 8 & 10 inches",
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
      "ortho bonnell Aloe-Vera with Latex 8 & 10 inches",
      "ortho bonnell Aloe-vera with Memory 8 & 10 inches",
      "Buckingham",
      "Buckingham Lexus",
      "LoveLand",
      "Romantic Euroton",
      "Ambitious",
      "Memory Active",
    ],
    "5 years": [
      "orthopedic Aloe-Vera with Latex 6 inches",
      "orthopedic Aloe-vera with Memory 6 inches",
      "pocketed Aloe-Vera with Latex 6 inches",
      "pocketed Aloe-vera with Memory 6 inches",
      "ortho bonnell Aloe-Vera with Latex 6 inches",
      "ortho bonnell Aloe-vera with Memory 6 inches",
      "Orthomed",
      "Preference",
      "Memofy",
      "Oxford",
      "Space",
      "Inspiration",
      "Eternity Euroton",
    ],
    "7 years": ["Milange", "Rose by Rose"],
    "2.5 years": ["Gravity"],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Special handling for product selection
    if (name === "selectedProduct") {
      handleProductChange(value);
    }

    // Special handling for variety selection
    if (name === "selectedVariety") {
      handleVarietyChange(value);
    }
  };

  const handleProductChange = (product) => {
    setVarieties(productOptions[product] || []);
    setFormData((prev) => ({
      ...prev,
      selectedVariety: "",
      warranty: "",
    }));
  };

  const handleVarietyChange = (variety) => {
    const warrantyPeriod = Object.keys(warrantyOptions).find((period) =>
      warrantyOptions[period].includes(variety)
    );
    setFormData((prev) => ({
      ...prev,
      warranty: warrantyPeriod || "",
    }));
  };

  const generatePDF = async () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    try {
      const root = ReactDOM.createRoot(div);
      root.render(<WarrantyCardTemplate data={formData} />);

      // Wait for render
      await new Promise((resolve) => setTimeout(resolve, 100));

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
      return pdf;
    } catch (error) {
      console.error("Error generating PDF:", error);
      throw error;
    } finally {
      document.body.removeChild(div);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError("");
    setSuccessMessage("");

    const baseRequiredFields = [
      "customerName",
      "address",
      "mobileNumber",
      "email",
      "state",
      "city",
      "selectedProduct",
      "selectedVariety",
      "size",
      "orderNumber",
      "invoiceDate",
    ];

    // Dynamically determine required fields based on purchase source
    const requiredFields =
      formData.purchaseFrom === "Store"
        ? [...baseRequiredFields, "selectedStore", "dealerName"]
        : baseRequiredFields;

    const missingFields = requiredFields.filter((field) => !formData[field]);

     if (missingFields.length > 0) {
       setFormError(
         `Please fill out all mandatory fields: ${missingFields
           .map((field) => {
             // Convert camelCase to readable format
             return field
               .replace(/([A-Z])/g, " $1")
               .replace(/^./, (str) => str.toUpperCase());
           })
           .join(", ")}`
       );
       setIsLoading(false);
       return;
     }

    try {
      // Generate PDF
      const pdfDoc = await generatePDF();

      const transformedData = {
        "Customer Name": formData.customerName,
        "Mobile Number": formData.mobileNumber,
        "Email Id": formData.email,
        Address: formData.address,
        State: formData.state,
        City: formData.city,
        Product: formData.selectedProduct,
        Variety: formData.selectedVariety,
        Size: formData.size,
        "Purchase From": formData.purchaseFrom,
        ...(formData.purchaseFrom === "Store" && {
          Store: formData.selectedStore,
          "Dealer Name": formData.dealerName,
        }),
        "Order Number": formData.orderNumber,
        "Invoice Date": formData.invoiceDate,
        Warranty: formData.warranty,
      };

      console.log("Transformed data being sent:", transformedData);

      // Submit to Google Sheets
      await axios.post(
        "https://api.sheetbest.com/sheets/f6c087ef-7190-4e8f-a6f2-0803e4fa8066",
        transformedData
      );

      // Save PDF
      pdfDoc.save(
        `Warranty_Card_${formData.customerName.replace(/\s+/g, "_")}.pdf`
      );

      setSuccessMessage(
        "Your warranty form has been generated and saved successfully!"
      );
      setFormData(initialFormState);
      setVarieties([]);
    } catch (error) {
      console.error("Error:", error);
      setFormError(
        "An error occurred while processing your request. Please try again."
      );
    } finally {
      setIsLoading(false);
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
            name="customerName"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.customerName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">State</label>
          <input
            type="text"
            name="state"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City</label>
          <input
            type="text"
            name="city"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>

        {/* Product Details section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Product Details</h3>
          <label className="block text-gray-700">Product</label>
          <select
            name="selectedProduct"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.selectedProduct}
            onChange={handleInputChange}
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
              name="selectedVariety"
              className="w-full px-3 py-2 border rounded shadow-sm"
              value={formData.selectedVariety}
              onChange={handleInputChange}
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

        <div className="mb-4">
          <label className="block text-gray-700">Size</label>
          <input
            type="text"
            name="size"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.size}
            onChange={handleInputChange}
            placeholder="Enter in L * B * H"
          />
        </div>

        {/* Purchase Details section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Purchase Details</h3>

          {/* Select Purchase Source */}
          <label className="block text-gray-700">Purchased From</label>
          <select
            name="purchaseFrom"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.purchaseFrom}
            onChange={handleInputChange}
          >
            <option value="">Select purchase source</option>
            <option value="Store">Store</option>
            <option value="Online">Online</option>
          </select>
        </div>

        {/* Conditional rendering for Store-related fields */}
        {formData.purchaseFrom === "Store" && (
          <>
            {/* Store selection dropdown */}
            {storeOptions.length > 0 && (
              <div className="mb-4">
                <label className="block text-gray-700">Select Store</label>
                <select
                  name="selectedStore"
                  className="w-full px-3 py-2 border rounded shadow-sm"
                  value={formData.selectedStore}
                  onChange={handleInputChange}
                >
                  <option value="">Select a store</option>
                  {storeOptions.map((store) => (
                    <option key={store} value={store}>
                      {store}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Dealer Name input */}
            <div className="mb-4">
              <label className="block text-gray-700">Dealer Name</label>
              <input
                type="text"
                name="dealerName"
                className="w-full px-3 py-2 border rounded shadow-sm"
                value={formData.dealerName}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}

        <div className="mb-4">
          <label className="block text-gray-700">Order Number</label>
          <input
            type="text"
            name="orderNumber"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.orderNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Invoice Date</label>
          <input
            type="date"
            name="invoiceDate"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.invoiceDate}
            onChange={handleInputChange}
          />
        </div>

        {formData.warranty && (
          <div className="mb-4">
            <label className="block text-gray-700">Warranty</label>
            <input
              type="text"
              name="warranty"
              className="w-full px-3 py-2 border rounded shadow-sm"
              value={formData.warranty}
              disabled
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded shadow"
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Warranty Card"}
        </button>
      </form>
    </div>
  );
};

export default WarrantyForm;
