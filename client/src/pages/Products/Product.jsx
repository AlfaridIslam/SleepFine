// components/Product.jsx
import React, { useState } from "react";
import products from "../../products.jsx"; // Adjust the path according to your folder structure
import ProductTypes from "../ProductTypes/ProductTypes.jsx"; // Import the ProductTypes component

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="xl:grid xl:justify-center xl:items-center xl:mt-4 sm:justify-center xl:w-full
     sm:grid sm:w-[140%] sm:mt-10">
      <h1 className="text-2xl font-bold xl:flex xl:justify-center sm:flex sm:justify-center sm:mt-5 ">
        PRODUCTS
      </h1>
      <div
        className="bg-slate-100 xl:flex xl:gap-4 xl:mt-4 xl:justify-between xl:mr-3 xl:ml-3 xl:py-[8px] xl:px-[63px]

       sm:mt-8 lg:flex"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer xl:p-0 xl:h-[425px] lg:h-[440px] "
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="transform scale-90 h-[400px] sm:rounded-xl"
            />
            <h2 className="mt-2 text-center">{product.name}</h2>
          </div>
        ))}
      </div>

      {/* Show subcategories if a product is selected */}
      {selectedProduct && (
        <ProductTypes subcategories={selectedProduct.subcategories} />
      )}
    </div>
  );
};

export default Product;
