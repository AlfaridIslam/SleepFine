import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  orthomed: {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our orthopedic beds provide optimal support for those needing extra care. Designed for comfort and health, these beds ensure a restful sleep experience.",
  },
  preference: {
    images: [], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  buckinghum: {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "orthopedic-aloe-vera-latex": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "orthopedic-aloe-vera-memory": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  " ": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "6inch-oxford": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "6inch-silver-crown": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "8inch-love-land": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "8inch-love-land-pillow-top": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "8inch-romantic-euroton": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "ortho-bonnell-aloe-vera-with-latex": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "ortho-bonnell-aloe-vera-with-memory": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "pocketed-spring-inspiration": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "pocketed-spring-6inch-eternity-euroton": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "pocketed-spring-aloe-vera-with-latex": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "pocketed-spring-aloe-vera-with-memory": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "hr-pu-gravity": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "hr-pu-space": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "hr-pu-plush": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "hr-pu-techniko": {
    images: [Image8, Image9, Image10, Image11], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
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
    <>
      <Link
        to="/products"
        className="back cursor-pointer absolute rounded-md
         bg-red-300 text-black xl:text-[13px] xl:top-[160px] xl:left-[30px] xl:py-[5px] xl:pr-[22px] xl:pl-[25px]
         lg:text-[12px] lg:top-[106px] lg:left-[20px] lg:py-[5px] lg:pr-[22px] lg:pl-[25px]
         md:text-[12px] md:top-[106px] md:left-[20px] md:py-[5px] md:pr-[22px] md:pl-[25px]
         sm:text-[12px] sm:top-[106px] sm:left-[20px] sm:py-[5px] sm:pr-[22px] sm:pl-[25px]"
      >
        BACK
      </Link>
      <div className="product-details-container p-6 flex gap-8 relative mt-6 flex-col sm:flex-col xl:flex-row">
        {/* Main image and carousel controls */}
        <div className="flex-1">
          {productInfo.images.length > 0 ? (
            <>
              <div className="main-image relative mb-4">
                <img
                  src={productInfo.images[currentImageIndex]}
                  alt="Main product"
                  className="xl:w-[800px] xl:h-[450px] rounded-xl sm:h-[350px] sm:w-[700px]"
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
                  className="absolute top-1/2 xl:right-[28px] md:right-[18px] lg:right-[52px] sm:right-0 transform -translate-y-1/2 text-white text-7xl p-2 rounded-full hover:bg-gray-700"
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
                      index === currentImageIndex
                        ? "border-2 border-blue-500"
                        : ""
                    }`}
                    onClick={() => handleThumbnailClick(index)} // Change main image on click
                    onMouseEnter={() => handleThumbnailClick(index)} // Change main image on hover
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-xl text-gray-500">Coming Soon</p>
            </div>
          )}
        </div>

        {/* Product description */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>
          <p className="text-gray-700">{productInfo.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
