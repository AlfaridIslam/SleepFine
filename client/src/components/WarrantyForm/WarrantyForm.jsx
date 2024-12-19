import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import WarrantyCardTemplate from "./WarrantyCard";
// import {} from "./stateCityData.json"

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
    sizeType: "standard",
    customLength: "",
    customBreadth: "",
    customHeight: "",
    length: "",
    breadth: "",
    height: "",
    totalQuantity: "",
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

  const [stateCityData, setStateCityData] = useState({});
  const [cities, setCities] = useState([]);

  // Fetch the stateCityData.json file from public folder
  useEffect(() => {
    const fetchStateCityData = async () => {
      try {
        const response = await fetch("/stateCityData.json");
        const data = await response.json();
        setStateCityData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching state-city data:", error);
      }
    };

    fetchStateCityData();
  }, []);

  // Update cities based on selected state
  useEffect(() => {
    if (formData.state) {
      const selectedCities = stateCityData[formData.state] || [];
      setCities(selectedCities);
      setFormData((prev) => ({
        ...prev,
        city: "", // Reset city when state changes
      }));
    }
  }, [formData.state, stateCityData]);

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
      "Silver Crown",
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
    "Shapur/Gajularamaram",
  ];

  const handlePurchaseFromChange = (e) => {
    setFormData({
      ...formData,
      purchaseFrom: e.target.value,
      selectedStore: "",
      dealerName: "",
    });
  };

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
      "Eternity Euroton",
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
      "Silver Crown",
      "Space",
      "Inspiration",
    ],
    "7 years": ["Milange", "Rose by Rose", "Oxford"],
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
      "sizeType",
      "orderNumber",
      "totalQuantity",
      "invoiceDate",
    ];

    // Dynamically determine required fields based on purchase source
    // Dynamically determine required fields based on purchase source
    const requiredFields = [...baseRequiredFields];

    if (formData.purchaseFrom === "Store") {
      requiredFields.push("selectedStore");
    } else if (formData.purchaseFrom === "Others") {
      requiredFields.push("dealerName");
    }
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (formData.sizeType === "standard") {
      requiredFields.push("length", "breadth", "height");
    } else {
      requiredFields.push("customLength", "customBreadth", "customHeight");
    }

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
        "Total Quantity": formData.totalQuantity,
        Product: formData.selectedProduct,
        Variety: formData.selectedVariety,
        "Size Type": formData.sizeType,
        Length:
          formData.sizeType === "standard"
            ? formData.length
            : formData.customLength,
        Breadth:
          formData.sizeType === "standard"
            ? formData.breadth
            : formData.customBreadth,
        Height:
          formData.sizeType === "standard"
            ? formData.height
            : formData.customHeight,
        "Purchase From": formData.purchaseFrom,
        ...(formData.purchaseFrom === "Store" && {
          Store: formData.selectedStore,
        }),
        ...(formData.purchaseFrom === "Others" && {
          "Dealer Name": formData.dealerName,
        }),
        "Order Number": formData.orderNumber,
        "Invoice Date": formData.invoiceDate,
        Warranty: formData.warranty,
      };

      console.log("Transformed data being sent:", transformedData);

      // Submit to Google Sheets
      await axios.post(
        //"https://api.sheetbest.com/sheets/f6c087ef-7190-4e8f-a6f2-0803e4fa8066",(Main-contact@sleepfineindia.com)
        // "https://api.sheetbest.com/sheets/edd942dc-9a65-4dac-a249-3338f8872e82", //(sleepfinemattresses.in@gmail.com)

        "https://api.sheetbest.com/sheets/23c1fc18-f945-4cb6-b7d4-a3594fb27956", //silentsleep011@gmail.com
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
            type="tel"
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
        <select
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          required
          className="input-field"
        >
          <option value="">Select State</option>
          {Object.keys(stateCityData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <br /> <br />
        <select
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
          className="input-field"
          disabled={!formData.state} // Disable until state is selected
        >
          <option value="">Select City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <br /> <br />
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
        {/* SIZES */}
        <div className="mb-4">
          <label className="block text-gray-700">Size</label>
          <select
            name="sizeType"
            value={formData.sizeType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded shadow-sm mb-2"
          >
            <option value="standard">Standard</option>
            <option value="customized">Customized</option>
          </select>

          {formData.sizeType === "standard" ? (
            <div className="flex space-x-4 sm:space-x-[0px]">
              <select
                name="length"
                value={formData.length}
                onChange={handleInputChange}
                required
                className="w-full sm:px-0 xl:px-2 py-2 border rounded shadow-sm"
              >
                <option value="">Select Length</option>
                <option value="72 inches">72 inches</option>
                <option value="75 inches">75 inches</option>
                <option value="78 inches">78 inches</option>
              </select>

              <select
                name="breadth"
                value={formData.breadth}
                onChange={handleInputChange}
                required
                className="w-full sm:px-0 xl:px-1 py-2 border rounded shadow-sm"
              >
                <option value="">Select Breadth</option>
                <option value="30 inches">30 inches</option>
                <option value="36 inches">36 inches</option>
                <option value="42 inches">42 inches</option>
                <option value="48 inches">48 inches</option>
                <option value="60 inches">60 inches</option>
                <option value="66 inches">66 inches</option>
                <option value="72 inches">72 inches</option>
              </select>

              <select
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                required
                className="w-full sm:px-0 xl:px-3 py-2 border rounded shadow-sm"
              >
                <option value="">Select Height</option>
                <option value="5 inches">5 inches</option>
                <option value="6 inches">6 inches</option>
                <option value="7 inches">7 inches</option>
                <option value="8 inches">8 inches</option>
                <option value="10 inches">10 inches</option>
                <option value="12 inches">12 inches</option>
                <option value="14 inches">14 inches</option>
              </select>
            </div>
          ) : (
            <div className="flex space-x-4 sm:space-x-[0px]">
              <input
                type="text"
                name="customLength"
                value={formData.customLength}
                onChange={handleInputChange}
                placeholder="L (inches)"
                className="w-full sm:px-0 xl:px-2 py-2 border rounded shadow-sm"
              />
              <input
                type="text"
                name="customBreadth"
                value={formData.customBreadth}
                onChange={handleInputChange}
                placeholder="B (inches)"
                className="w-full sm:px-0 xl:px-1 py-2 border rounded shadow-sm"
              />
              <input
                type="text"
                name="customHeight"
                value={formData.customHeight}
                onChange={handleInputChange}
                placeholder="H (inches)"
                className="w-full sm:px-0 xl:px-3 py-2 border rounded shadow-sm"
              />
            </div>
          )}
        </div>
        {/* Purchase Details section */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Purchase Details</h3>

          {/* Select Purchase Source */}
          <label
            htmlFor="purchaseFrom"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Purchase From
          </label>
          <select
            id="purchaseFrom"
            value={formData.purchaseFrom}
            onChange={handlePurchaseFromChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
          >
            <option value="">Select purchase type</option>
            <option value="Store">Store</option>
            <option value="Online">Online</option>
            <option value="Others">Others</option>
          </select>
        </div>
        {/* Conditional rendering for Store selection */}
        {formData.purchaseFrom === "Store" && (
          <div className="mb-4">
            <label
              htmlFor="store"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Store
            </label>
            <select
              id="store"
              value={formData.selectedStore}
              onChange={(e) =>
                setFormData({ ...formData, selectedStore: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
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
        {/* Conditional rendering for Others - Dealer Name input */}
        {formData.purchaseFrom === "Others" && (
          <div className="mb-4">
            <label
              htmlFor="dealerName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Dealer Name
            </label>
            <input
              type="text"
              id="dealerName"
              name="dealerName"
              value={formData.dealerName}
              onChange={(e) =>
                setFormData({ ...formData, dealerName: e.target.value })
              }
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              placeholder="Enter dealer name"
            />
          </div>
        )}
        {/* ORDER NUMBER */}
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
        {/* TOTAL QUANTITY */}
        <div className="mb-4">
          <label className="block text-gray-700">Total Quantity</label>
          <input
            type="text"
            name="totalQuantity"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.totalQuantity}
            onChange={handleInputChange}
          />
        </div>
        {/* INVOICE */}
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
