import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../../products.jsx"; // Adjust the path according to your folder structure
import ProductTypes from "../ProductTypes/ProductTypes.jsx"; // Import the ProductTypes component

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productTypesRef = useRef(null); // Create a ref to the ProductTypes section

  // Handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Scroll to ProductTypes section when product is selected
  useEffect(() => {
    if (selectedProduct && productTypesRef.current) {
      productTypesRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start",
      });
    }
  }, [selectedProduct]);

  return (
    <div className="xl:grid xl:justify-center xl:items-center xl:mt-4 sm:justify-center xl:w-full sm:grid sm:w-[158%] ">
      <h1 className="text-2xl font-sans xl:flex xl:justify-center sm:flex sm:justify-center sm:mt-5 ">
        PRODUCTS
      </h1>
      <Link to='/' >
      <button className="flex justify-start bg-red-200 w-16 px-[10px]  xl:ml-10 rounded-lg sm:-ml-12">BACK</button>
      </Link >
      <div className="xl:flex xl:gap-4 sm:grid sm:justify-center xl:px-2 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer xl:p-0 xl:h-[425px]  lg:h-[440px]"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-[400px] sm:rounded-xl w-80 mt-5 sm:w-96"
            />
            <h2 className="mt-2 text-center">{product.name}</h2>
          </div>
        ))}
      </div>

      {/* Show subcategories if a product is selected */}
      {selectedProduct && (
        <div
          ref={productTypesRef} // Attach the ref to the ProductTypes container
          className="transition-opacity duration-300 ease-in-out opacity-100" // Fade-in effect
        >
          <ProductTypes subcategories={selectedProduct.subcategories} />
        </div>
      )}
    </div>
  );
};

export default Product;
