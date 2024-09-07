// ProductDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
} from "../../assets/index.jsx"; // Adjust the import paths as needed

// Define the image mapping for each product type with multiple images and descriptions
const productData = {
  "leather-sofa": {
    images: [Image4, Image5, Image6, Image7], // Replace these with actual Leather Sofa images
    description:
      "Our leather sofas offer a touch of luxury and timeless elegance. Made from premium materials, these sofas provide both comfort and durability, perfect for any living space.",
  },
  "fabric-sofa": {
    images: [Image8, Image9, Image10, Image11], // Replace these with actual Fabric Sofa images
    description:
      "Explore our collection of fabric sofas that blend style with comfort. Choose from a variety of colors and textures to suit your home decor, offering both aesthetic appeal and cozy relaxation.",
  },
  "king-size-bed": {
    images: [Image4, Image5, Image6, Image7], // Replace these with actual King Size Bed images
    description:
      "Experience luxury with our king-size beds that promise superior comfort and spaciousness. Crafted with quality materials, these beds are designed to provide a restful night's sleep.",
  },
  "queen-size-bed": {
    images: [Image8, Image9, Image10, Image11], // Replace these with actual Queen Size Bed images
    description:
      "Our queen-size beds combine elegance and comfort, making them an ideal choice for any bedroom. They offer the perfect balance of space and style for a restful retreat.",
  },
};

const ProductDetails = () => {
  const { productType } = useParams(); // Get the productType from URL
  const formattedProductType = productType.toLowerCase(); // Ensure the keys in productData are lower case and hyphenated
  const productInfo = productData[formattedProductType]; // Fetch the product info based on the URL param

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

  // Handle navigation for the carousel
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productInfo.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productInfo.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle main image change when a thumbnail is clicked or hovered
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-details-container p-6 flex gap-8">
      {/* Main image and carousel controls */}
      <div className="flex-1">
        <div className="main-image relative mb-4">
          <img
            src={productInfo.images[currentImageIndex]}
            alt="Main product"
            className="w-[800px] h-[450px] rounded-xl"
          />
          {/* Carousel navigation buttons */}
          <button
            onClick={handlePrevClick}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-7xl p-2 rounded-full hover:bg-gray-700"
          >
            &#8249;
          </button>
          <button
            onClick={handleNextClick}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-7xl p-2 rounded-full hover:bg-gray-700"
          >
            &#8250;
          </button>
        </div>
        <div className="thumbnail flex justify-start gap-2">
          {productInfo.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`cursor-pointer w-[100px] h-[50px] rounded-xl ${
                index === currentImageIndex ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleThumbnailClick(index)} // Change main image on click
              onMouseEnter={() => handleThumbnailClick(index)} // Change main image on hover
            />
          ))}
        </div>
      </div>

      {/* Product description */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Product Description</h2>
        <p className="text-gray-700">{productInfo.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
