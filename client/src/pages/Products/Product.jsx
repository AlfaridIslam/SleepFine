// components/Product.jsx
import React, { useState } from "react";
import products from "../../products"; // Adjust the path according to your folder structure
import ProductTypes from "../ProductTypes/ProductTypes"; // Import the ProductTypes component

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-96 h-96 object-cover"
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
