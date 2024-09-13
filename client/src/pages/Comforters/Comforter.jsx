import React, { useState } from "react";
//import { Image4, Image5, Image6, Image7 } from "../../assets/index.jsx"; // Importing images from assets/index.jsx

const Comforter = () => {
  const images = [Image4, Image5, Image6, Image7];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="p-11 flex flex-col justify-center items-center gap-11">
      <div className="font-mono font-medium text-3xl">
        Our Products , Your Comfort
      </div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`zoom-${index}`}
              style={
                hoveredIndex === index
                  ? { width: "400px", height: "450px" }
                  : { width: "200px", height: "250px" }
              }
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comforter;
