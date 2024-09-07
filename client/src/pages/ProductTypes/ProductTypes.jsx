import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ProductTypes = ({ subcategories }) => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Product Types</h1>
      <div className="grid grid-cols-2 gap-4">
        {subcategories.map((subcategory) => (
          <Link
            key={subcategory.id}
            to={`/product-details/${subcategory.name
              .replace(/\s+/g, "-")
              .toLowerCase()}`} // Create a URL-friendly link
          >
            <div className="hover:shadow-lg transition-shadow duration-300">
              <img
                src={subcategory.image}
                alt={subcategory.name}
                className="w-full h-40 object-cover"
              />
              <h2 className="mt-2 text-center">{subcategory.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductTypes;
