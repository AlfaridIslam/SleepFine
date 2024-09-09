import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ProductTypes = ({ subcategories }) => {
  return (
    <div className="xl:mt-8 sm:mt-8">
      <h1 className="text-2xl font-bold mb-4 xl:text-center sm:text-center" >Product Types</h1>
      <div className=" xl:grid xl:grid-col-2 sm:grid sm:grid-cols-2 sm:gap-4 ">
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
                className="sm:w-full sm:h-40 xl:w-full xl:h-[400px]  object-fill"
              />
              <h2 className="xl:mt-2 sm:mt-2 sm:text-center">{subcategory.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductTypes;