import React, { useState } from "react";
import "./Product.css";
import {
  Image8,
  Image9,
  Image10,
  Image11,
  HoveredImage4,
  HoveredImage5,
  HoveredImage6,
  HoveredImage7,
  HoveredImage8,
  HoveredImage9,
  HoveredImage10,
  HoveredImage11,
  // Add subcategory images here
  SubImage1,
  SubImage2,
  SubImage3,
  SubImage4,
  SubImage5,
  SubImage6,
} from "../../assets/index.jsx";
import ProductList from "../../components/ProductList/ProductList.jsx"; // Import the ProductList component

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      frontImage: Image8,
      backImage: Image9,
      description: "Bonnell Spring Mattresses",
      subcategories: [
        { image: SubImage1, name: "Bonnell Spring Sub 1" },
        { image: SubImage2, name: "Bonnell Spring Sub 2" },
      ],
    },
    {
      id: 2,
      frontImage: Image10,
      backImage: Image11,
      description: "Pocketed Spring Mattresses",
      subcategories: [
        { image: SubImage3, name: "Pocketed Spring Sub 1" },
        { image: SubImage4, name: "Pocketed Spring Sub 2" },
      ],
    },
    {
      id: 3,
      frontImage: HoveredImage4,
      backImage: HoveredImage5,
      description: "Medical Rebonded Mattresses",
      subcategories: [
        { image: SubImage5, name: "Medical Rebonded Sub 1" },
        { image: SubImage6, name: "Medical Rebonded Sub 2" },
      ],
    },
    // Add more products and subcategories as needed
  ];

  const handleProductClick = (product) => {
    // Toggle the display of subcategories
    setSelectedProduct(product.id === selectedProduct?.id ? null : product);
  };

  return (
    <div className="flex-col justify-center items-center p-5">
      <div className="font-mono font-light text-3xl text-center">
        OUR PRODUCTS, YOUR COMFORT
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card w-[400px] h-[250px] p-6"
            onClick={() => handleProductClick(product)} // Handle product click
          >
            <div className="product-card-inner">
              <div className="product-card-front">
                <img
                  src={product.frontImage}
                  alt={`Front of ${product.description}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="product-card-back">
                <img
                  src={product.backImage}
                  alt={`Back of ${product.description}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <p className="text-center mt-2">{product.description}</p>
            {/* Render subcategories if this product is selected */}
            {selectedProduct?.id === product.id && (
              <ProductList subcategories={product.subcategories} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
