import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  ORTRHOMED1,
  ORTRHOMED2,
  ORTRHOMED3,
  ORTRHOMED4,
  ORTRHOMED5,
  ORTRHOMED6,
  Preference1,
  Preference2,
  Preference3,
  Preference4,
  Preference5,
  Preference6,
  Buckingham1,
  Buckingham2,
  Buckingham3,
  Buckingham4,
  Buckingham5,
  Buckingham6,
  OrthopedicAloeveraMemory1,
  OrthopedicAloeveraMemory2,
  OrthopedicAloeveraMemory3,
  OrthopedicAloeveraMemory4,
  OrthopedicAloeveraMemory5,
  OrthopedicAloeveraMemory6,
  SixinchPUFOAM1,
  SixinchPUFOAM2,
  SixinchPUFOAM3,
  SixinchPUFOAM4,
  SixinchPUFOAM5,
  oxford1,
  oxford2,
  oxford3,
  oxford4,
  oxford5,
  oxford6,
  EightinchPUFOAM1,
  EightinchPUFOAM2,
  EightinchPUFOAM3,
  EightinchPUFOAM4,
  EightinchPUFOAM5,
  AloveraBonnel1,
  AloveraBonnel2,
  AloveraBonnel3,
  AloveraBonnel4,
  Loveland1,
  Loveland2,
  Loveland3,
  Loveland4,
  Loveland5,
  Loveland6,
  Romanticfirm1,
  Romanticfirm2,
  Romanticfirm3,
  Romanticfirm4,
  Romanticfirm5,
  Romanticfirm6,
} from "../../assets/index.jsx"; // Adjust the import paths as needed

// Define the image mapping for each product type with multiple images and descriptions
const productData = {
  "leather-sofa": {
    images: [
      OrthopedicAloeveraMemory1,
      OrthopedicAloeveraMemory2,
      OrthopedicAloeveraMemory3,
      OrthopedicAloeveraMemory4,
    ], // Replace these with actual Leather Sofa images
    description:
      "Our leather sofas offer a touch of luxury and timeless elegance. Made from premium materials, these sofas provide both comfort and durability, perfect for any living space.",
  },
  "fabric-sofa": {
    images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM3, SixinchPUFOAM4], // Replace these with actual Fabric Sofa images
    description:
      "Explore our collection of fabric sofas that blend style with comfort. Choose from a variety of colors and textures to suit your home decor, offering both aesthetic appeal and cozy relaxation.",
  },
  "king-size-bed": {
    images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM3, SixinchPUFOAM4], // Replace these with actual King Size Bed images
    description:
      "Experience luxury with our king-size beds that promise superior comfort and spaciousness. Crafted with quality materials, these beds are designed to provide a restful night's sleep.",
  },
  "queen-size-bed": {
    images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM3, SixinchPUFOAM4], // Replace these with actual Queen Size Bed images
    description:
      "Our queen-size beds combine elegance and comfort, making them an ideal choice for any bedroom. They offer the perfect balance of space and style for a restful retreat.",
  },
  "orthomed": {
    images: [ORTRHOMED1, ORTRHOMED2, ORTRHOMED3, ORTRHOMED4], // Assuming images are not uploaded yet
    description:
      "Our orthopedic beds provide optimal support for those needing extra care. Designed for comfort and health, these beds ensure a restful sleep experience.",
  },
  "preference": {
    images: [Preference1, Preference2, Preference3, Preference4], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "buckingham": {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "orthopedic-aloe-vera-latex": {
    images: [
      AloveraBonnel1,
      AloveraBonnel2,
      AloveraBonnel3,
      AloveraBonnel4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "orthopedic-aloe-vera-memory": {
    images: [OrthopedicAloeveraMemory1,OrthopedicAloeveraMemory2,OrthopedicAloeveraMemory3,OrthopedicAloeveraMemory6], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "memofy": {
    images: [oxford1, oxford2, oxford3, oxford4], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "6inch-oxford": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "6inch-silver-crown": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "8inch-love-land": {
    images: [
      Loveland1,
      Loveland2,
      Loveland5,
      Loveland6,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "8inch-love-land-pillow-top": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "8inch-romantic-euroton": {
    images: [
      Romanticfirm1,
      Romanticfirm2,
      Romanticfirm4,
      Romanticfirm6,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "ortho-bonnell-aloe-vera-with-latex": {
    images: [
      AloveraBonnel1,
      AloveraBonnel2,
      AloveraBonnel3,
      AloveraBonnel4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "ortho-bonnell-aloe-vera-with-memory": {
    images: [
      OrthopedicAloeveraMemory1,
      OrthopedicAloeveraMemory2,
      OrthopedicAloeveraMemory3,
      OrthopedicAloeveraMemory4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "pocketed-spring-inspiration": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "pocketed-spring-6inch-eternity-euroton": {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "pocketed-spring-aloe-vera-with-latex": {
    images: [ AloveraBonnel1,AloveraBonnel2,AloveraBonnel3,AloveraBonnel4,], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "pocketed-spring-aloe-vera-with-memory": {
    images: [ OrthopedicAloeveraMemory1,OrthopedicAloeveraMemory2,OrthopedicAloeveraMemory3,OrthopedicAloeveraMemory4,], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "hr-pu-gravity": {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "hr-pu-space": {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "hr-pu-plush": {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "hr-pu-techniko": {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Platform-Bed": {
    images: [Buckingham3, Buckingham4, Buckingham5, Buckingham6], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Panel-Bed": {
    images: [
      OrthopedicAloeveraMemory3,
      OrthopedicAloeveraMemory4,
      OrthopedicAloeveraMemory5,
      OrthopedicAloeveraMemory6,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Canopy-Bed": {
    images: [ORTRHOMED3, ORTRHOMED4, ORTRHOMED5, ORTRHOMED6], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Sleigh-Bed": {
    images: [Preference3, Preference4, Preference5, Preference6], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Murphy-Bed": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Loft-Bed": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Bunk-Bed": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Trundle-Bed": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM1,
      EightinchPUFOAM1,
      EightinchPUFOAM1,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Standard-Sofa": {
    images: [
      EightinchPUFOAM2,
      EightinchPUFOAM2,
      EightinchPUFOAM2,
      EightinchPUFOAM2,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Chesterfield": {
    images: [
      EightinchPUFOAM3,
      EightinchPUFOAM3,
      EightinchPUFOAM3,
      EightinchPUFOAM3,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Lawson": {
    images: [
      EightinchPUFOAM4,
      EightinchPUFOAM4,
      EightinchPUFOAM4,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Tuxedo": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "L-Shaped": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "U-Shaped": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Modular": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description:
      "Our preference beds are customizable to your needs, offering flexibility and comfort for a personalized sleep experience.",
  },
  "Baffle Box": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
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
                  className="xl:w-[800px] xl:h-[450px] rounded-xl sm:h-[350px] sm:w-[700px] border-2 border-slate-300 bg-slate-400"
                />
                {/* Carousel navigation buttons */}
                <button
                  onClick={handlePrevClick}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 text-black text-7xl p-2 rounded-full hover:bg-red-200 h-20"
                >
                  &#8249;
                </button>
                <button
                  onClick={handleNextClick}
                  className="absolute top-1/2 xl:right-[28px] md:right-[18px] lg:right-[52px] sm:right-0 transform -translate-y-1/2 text-black text-7xl p-2 rounded-full hover:bg-red-200 h-20"
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
