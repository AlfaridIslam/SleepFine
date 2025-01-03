import React, { useState, useEffect } from "react";
import axios from "axios";

const WarrantyForm = () => {
  // Initial form state
  const initialFormState = {
    name: "",
    address: "",
    number: "",
    email: "",
    state: "",
    city: "",
    product: "",
    variety: "",
    sizeType: "standard",
    customLength: "",
    customBreadth: "",
    customHeight: "",
    length: "",
    breadth: "",
    height: "",
    totalQuantity: "",
    purchaseFrom: "",
    store: "",
    dealer: "",
    orderNumber: "",
    invoiceDate: "",
    warrantyPeriod: "",
  };

  // Form states
  const [formData, setFormData] = useState(initialFormState);
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [varieties, setVarieties] = useState([]);
  const [stateCityData, setStateCityData] = useState({});
  const [cities, setCities] = useState([]);

  // Product options
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

  // Store options
  const storeOptions = [
    "Alwal",
    "Ameerpet Store",
    "Hafiz Baba Nagar",
    "Kompally",
    "Shapur/Gajularamaram",
  ];

  // Warranty period mapping
  const warrantyPeriodOptions = {
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

  // Fetch state-city data on component mount
  useEffect(() => {
    const fetchStateCityData = async () => {
      try {
        const response = await fetch("/stateCityData.json");
        const data = await response.json();
        setStateCityData(data);
      } catch (error) {
        console.error("Error fetching state-city data:", error);
      }
    };

    fetchStateCityData();
  }, []);

  // Update cities when state changes
  useEffect(() => {
    if (formData.state) {
      const selectedCities = stateCityData[formData.state] || [];
      setCities(selectedCities);
      setFormData((prev) => ({
        ...prev,
        city: "",
      }));
    }
  }, [formData.state, stateCityData]);

  // Handle purchase source change
  const handlePurchaseFromChange = (e) => {
    setFormData({
      ...formData,
      purchaseFrom: e.target.value,
      store: "",
      dealer: "",
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "product") {
      handleProductChange(value);
    }

    if (name === "variety") {
      handleVarietyChange(value);
    }
  };

  // Handle product selection
  const handleProductChange = (product) => {
    setVarieties(productOptions[product] || []);
    setFormData((prev) => ({
      ...prev,
      variety: "",
      warrantyPeriod: "",
    }));
  };

  // Handle variety selection and set warranty period
  const handleVarietyChange = (variety) => {
    const periodString = Object.keys(warrantyPeriodOptions).find((period) =>
      warrantyPeriodOptions[period].includes(variety)
    );
    const warrantyYears = periodString || "";
    setFormData((prev) => ({
      ...prev,
      warrantyPeriod: warrantyYears,
    }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isLoading) {
      console.log("Submission already in progress");
      return;
    }

    setIsLoading(true);
    setFormError("");
    setSuccessMessage("");

    try {
      const transformedData = {
        invoiceDate: formData.invoiceDate,
        name: formData.name.trim(),
        number: formData.number.trim(),
        email: formData.email.trim().toLowerCase(), // Normalize email
        address: formData.address.trim(),
        state: formData.state,
        city: formData.city,
        product: formData.product,
        variety: formData.variety,
        length: parseInt(
          formData.sizeType === "standard"
            ? formData.length
            : formData.customLength
        ),
        breadth: parseInt(
          formData.sizeType === "standard"
            ? formData.breadth
            : formData.customBreadth
        ),
        height: parseInt(
          formData.sizeType === "standard"
            ? formData.height
            : formData.customHeight
        ),
        purchaseFrom: formData.purchaseFrom || '',
        store: formData.purchaseFrom === "Store" ? formData.store : "N/A",
        dealer: formData.purchaseFrom === "Others" ? formData.dealer : "N/A",
        orderNumber: formData.orderNumber.trim().toUpperCase(), // Normalize order number
        totalQuantity: parseInt(formData.totalQuantity),
        warrantyPeriod: formData.warrantyPeriod,
        purchaseDate: formData.invoiceDate,
      };

      // Debug log
      console.log(
        "Sending request with data:",
        JSON.stringify(transformedData, null, 2)
      );

      // Make the request
      const response = await axios.post(
        "https://api.silentsleep.in/api/v1/warranty/generate-pdf",
        transformedData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/pdf, application/json", // Accept both PDF and JSON
          },
          responseType: "arraybuffer",
          validateStatus: function (status) {
            return status === 200; // Only treat 200 as success
          },
        }
      );

      // Check content type
      const contentType = response.headers["content-type"];
      console.log("Response content type:", contentType);

      if (contentType && contentType.includes("application/pdf")) {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const downloadUrl = window.URL.createObjectURL(blob);
        const fileName = `Warranty_Card_${formData.name.replace(
          /\s+/g,
          "_"
        )}.pdf`;

        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);

        setSuccessMessage("Warranty card has been generated successfully!");
        setFormData(initialFormState);
        setVarieties([]);
      } else {
        throw new Error("Received non-PDF response");
      }
    } catch (error) {
      console.error("Error details:", error);

      if (error.response) {
        let errorMessage = "";

        // Try to parse the error response
        if (error.response.data instanceof ArrayBuffer) {
          try {
            const decoder = new TextDecoder("utf-8");
            const text = decoder.decode(error.response.data);
            console.log("Raw error response:", text);

            try {
              const errorObj = JSON.parse(text);
              console.log("Parsed error object:", errorObj);

              if (error.response.status === 409) {
                // Handle specific conflict types
                if (errorObj.details?.field) {
                  errorMessage = `A warranty with this ${errorObj.details.field} (${errorObj.details.value}) already exists`;
                } else {
                  errorMessage =
                    errorObj.message ||
                    "A warranty with these details already exists";
                }
              } else {
                errorMessage =
                  errorObj.message ||
                  errorObj.error ||
                  "Failed to process warranty request";
              }
            } catch (jsonError) {
              console.error("Error parsing JSON:", jsonError);
              errorMessage = text;
            }
          } catch (decodeError) {
            console.error("Error decoding response:", decodeError);
            errorMessage = "Failed to process warranty request";
          }
        } else {
          errorMessage = "An unexpected error occurred";
        }

        setFormError(errorMessage);
        console.log("Final error message:", errorMessage);
      } else if (error.request) {
        setFormError(
          "Network error. Please check your connection and try again."
        );
      } else {
        setFormError("An unexpected error occurred. Please try again.");
      }
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
            name="name"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.name}
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
            name="number"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.number}
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
            name="product"
            className="w-full px-3 py-2 border rounded shadow-sm"
            value={formData.product}
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
              name="variety"
              className="w-full px-3 py-2 border rounded shadow-sm"
              value={formData.variety}
              onChange={handleInputChange}
            >
              <option value="">Select a variety</option>
              {varieties.map((varietydata) => (
                <option key={varietydata} value={varietydata}>
                  {varietydata}
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
            name="purchaseFrom"
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
              value={formData.store}
              onChange={(e) =>
                setFormData({ ...formData, store: e.target.value })
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
              htmlFor="dealer"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Dealer Name
            </label>
            <input
              type="text"
              id="dealer"
              name="dealer"
              value={formData.dealer}
              onChange={(e) =>
                setFormData({ ...formData, dealer: e.target.value })
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
        {formData.warrantyPeriod && (
          <div className="mb-4">
            <label className="block text-gray-700">Warranty</label>
            <input
              type="text"
              name="warrantyPeriod"
              className="w-full px-3 py-2 border rounded shadow-sm"
              value={formData.warrantyPeriod}
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
