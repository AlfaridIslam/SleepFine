import React, { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

const ProductDetails = () => {
  // Get product context
  const products = useContext(ProductContext);
  const { productType } = useParams();

  // Find product in context
  const findProduct = () => {
    for (const category in products) {
      if (products[category][productType]) {
        return products[category][productType];
      }
    }
    return null;
  };

  const productInfo = findProduct();

  if (!productInfo) {
    return <Navigate to="*" />;
  }

  // Existing state management
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [magnifyStyle, setMagnifyStyle] = useState({ display: "none" });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Existing screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1080);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Existing handlers
  const handleMouseEnter = () => {
    setMagnifyStyle({ display: "block" });
  };

  const handleMouseLeave = () => {
    setMagnifyStyle({ display: "none" });
  };

  const handleToggleZoom = () => {
    setZoom((prevZoom) => !prevZoom);
  };

  const handleMouseMove = (e) => {
    if (!isLargeScreen) return;

    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;
    const xPercent = (offsetX / offsetWidth) * 100;
    const yPercent = (offsetY / offsetHeight) * 100;

    setMagnifyStyle({
      display: "block",
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      top: `${e.clientY - 300}px`,
      left: `${e.clientX - 100}px`,
    });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const target = e.target;
    const { offsetWidth, offsetHeight } = target;
    const touchX = touch.clientX - target.getBoundingClientRect().left;
    const touchY = touch.clientY - target.getBoundingClientRect().top;

    const xPercent = (touchX / offsetWidth) * 100;
    const yPercent = (touchY / offsetHeight) * 100;

    setMagnifyStyle({
      display: "block",
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      top: `${touch.clientY - 200}px`,
      left: `${touch.clientX - 100}px`,
    });
  };

  const hideMagnifyGlass = () => {
    setMagnifyStyle({ display: "none" });
  };

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

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleEnquiryClick = () => {
    const whatsappNumber = "+918062181296";
    const currentUrl = window.location.href;
    const productImage = `${productInfo.images[currentImageIndex]}`;
    const message = `Check out this product:\n${currentUrl}\n\nImage:\n${productImage}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Link
        to="/"
        className="back cursor-pointer absolute rounded-md
         bg-red-300 text-black xl:text-[13px] xl:top-[160px] xl:left-[30px] xl:py-[2px] xl:pr-[22px] xl:pl-[25px] xl:px-0 xl:ml-0 xl:mt-0
          sm:text-lg sm:px-4 sm:ml-8 sm:mt-4 sm:p-[12px]"
      >
        BACK
      </Link>
      <div className="product-details-container sm:mt-[72px] sm:w-[100%] p-6 flex gap-8 relative xl:mt-10 flex-col sm:flex-col xl:flex-row">
        <div className="flex-1">
          {productInfo.images.length > 0 ? (
            <>
              <div className="main-image relative mb-4 xl:w-[100%] xl:h-[380px] sm:ml-[12px] sm:w-[250%] sm:max-w-[616px]">
                <img
                  src={productInfo.images[currentImageIndex]}
                  alt="Main product"
                  className={`sm:w-[540px] sm:h-[350px] xl:w-[645px] xl:h-[378px] rounded-xl border-2 border-slate-300 bg-slate-400 transition-transform duration-300 ease-in-out ${
                    zoom ? "scale-150" : "scale-100"
                  }`}
                  onClick={handleToggleZoom}
                  {...(isLargeScreen && {
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                    onMouseMove: handleMouseMove,
                    onTouchMove: handleTouchMove,
                    onTouchStart: handleTouchMove,
                    onTouchEnd: hideMagnifyGlass,
                  })}
                />

                <div
                  className="magnify-glass absolute w-[200px] h-[200px] rounded-full bg-no-repeat pointer-events-none border border-blue-500"
                  style={{
                    backgroundImage: `url(${productInfo.images[currentImageIndex]})`,
                    backgroundSize: "400%",
                    ...magnifyStyle,
                  }}
                />

                <button
                  onClick={handlePrevClick}
                  className="left xl:absolute xl:text-[80px] xl:top-[122px] xl:left-[1rem] xl:translate-x-[1.375rem] sm:hidden"
                >
                  &#8249;
                </button>
                <button
                  onClick={handleNextClick}
                  className="right xl:absolute xl:text-[80px] xl:top-[122px] xl:right-[8rem] xl:translate-x-[1.375rem] sm:hidden"
                >
                  &#8250;
                </button>
              </div>
              <div className="thumbnail flex justify-start">
                {productInfo.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className={`cursor-pointer sm:w-[70px] sm:h-[70px] sm:ml-[13px] xl:w-[65px] xl:h-[65px] xl:ml-[15px] rounded-xl ${
                      index === currentImageIndex
                        ? "border-2 border-blue-500"
                        : ""
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                    onMouseEnter={() => handleThumbnailClick(index)}
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

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Product Description</h2>

          {/* Title and Content Sections */}
          <div className="text-gray-600">
            {/* Title 1 and Content 1 */}
            <div className="text-xl font-semibold my-[6px]">
              {productInfo.title1}
            </div>
            <p className="mb-4">{productInfo.content1}</p>

            {/* Title 2 and Content 2 */}
            <h2 className="font-bold">{productInfo.title2}</h2>
            <p className="mb-4">{productInfo.content2}</p>

            {/* Title 3 and Content 3 */}
            <h2 className="font-bold">{productInfo.title3}</h2>
            <p className="mb-4">{productInfo.content3}</p>

            {/* Title 4 and Content 4 */}
            <h2 className="font-bold">{productInfo.title4}</h2>
            <p className="mb-4">{productInfo.content4}</p>

            {/* Product Details Section */}
            <div className="flex justify-start mt-2 items-center gap-10">
              <div className="flex-col">
                <h2 className="font-bold">Height</h2>
                <p>{productInfo.details.height}</p>
              </div>
              <div>
                <h2 className="font-bold">Variant</h2>
                <p>{productInfo.details.variant}</p>
              </div>
              <div>
                <h2 className="font-bold">Warranty</h2>
                <p>{productInfo.details.warranty}</p>
              </div>
              <div>
                <h2 className="font-bold">Ratings</h2>
                <p>{productInfo.details.ratings}</p>
              </div>
            </div>

            {/* Measurement Guide Link */}
            <h1 className="font-mono text-sky-700 sm:w-[120%] xl:w-full text-center mt-4">
              Guide to Measuring Mattress Sizes:
              <a
                href="https://youtu.be/MMjGTx1RgNQ?si=zADBJ7YT1g4TC5YY"
                target="_blank" rel="noopener noreferrer"
                className="animate-pulse text-blue-600 hover:underline
                cursor-pointer ml-1">
                   click here
              </a>
            </h1>
          </div>

          {/* Enquiry Button */}
          <div className="mt-6 xl:ml-[-37rem] flex justify-center sm:ml-0">
            <button
              onClick={handleEnquiryClick}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
              aria-label="Submit an enquiry for more information"
            >
              Enquiry Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
