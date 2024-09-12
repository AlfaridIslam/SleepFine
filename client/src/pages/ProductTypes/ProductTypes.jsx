// components/ProductTypes.jsx
import React, { useState } from "react";
import ProductSubitems from "../ProductSubItems/ProductSubitems.jsx"; // Import ProductSubitems component

const ProductTypes = ({ subcategories }) => {
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);

  // Handle subcategory click
  const handleSubcategoryClick = (subcategoryId) => {
    setSelectedSubcategoryId((prevId) =>
      prevId === subcategoryId ? null : subcategoryId
    ); // Toggle selection
  };

  return (
    <div className="xl:mt-8 sm:mt-8 lg:mt-10">
      <h1 className="text-2xl font-bold mb-4 xl:text-center sm:text-center">
        Product Types
      </h1>
      <div className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-2 sm:gap-4">
        {subcategories.map((subcategory) => (
          <React.Fragment key={subcategory.id}>
            <div
              className="cursor-pointer hover:shadow-lg transition-shadow duration-300 
              lg:flex lg:flex-col lg:justify-center lg:items-center"
              onClick={() => handleSubcategoryClick(subcategory.id)}
            >
              <img
                src={subcategory.image}
                alt={subcategory.name}
                className="sm:w-full sm:h-40 xl:w-full xl:h-[400px] xl:object-fill
                lg:w-[70%] lg:h-[40rem]"
              />
              <h2 className="xl:mt-2 sm:mt-2 sm:text-center">
                {subcategory.name}
              </h2>
            </div>

            {/* Show subitems if this subcategory is selected */}
            {selectedSubcategoryId === subcategory.id && (
              <div className="xl:col-span-2 sm:col-span-2 mt-4">
                <ProductSubitems subitems={subcategory.subitems} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductTypes;
