// components/ProductTypes.jsx
import React, { useState } from "react";
import ProductSubitems from "../ProductSubItems/ProductSubitems"; // Import the ProductSubitems component

const ProductTypes = ({ subcategories }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Handle subcategory click
  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory((prevSelected) =>
      prevSelected === subcategory ? null : subcategory
    ); // Toggle the selected subcategory
  };

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Product Types</h1>
      <div className="grid grid-cols-2 gap-4">
        {subcategories.map((subcategory) => (
          <div
            key={subcategory.id}
            onClick={() => handleSubcategoryClick(subcategory)}
            className={`cursor-pointer p-2 rounded-lg transition-all duration-300 hover:shadow-lg ${
              selectedSubcategory === subcategory ? "bg-gray-100" : ""
            }`} // Add background color change on selection
          >
            <img
              src={subcategory.image}
              alt={subcategory.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="mt-2 text-center">{subcategory.name}</h2>

            {/* Show subitems with a smooth transition */}
            {selectedSubcategory === subcategory && (
              <div
                className="mt-4 overflow-hidden transition-max-height duration-500 ease-in-out"
                style={{ maxHeight: selectedSubcategory ? "500px" : "0" }}
              >
                <ProductSubitems subitems={subcategory.subitems} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTypes;
