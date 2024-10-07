// components/ProductSubitems.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const ProductSubitems = ({ subitems }) => {
  return (
    <div className="xl:w-full mt-8 bg-slate-200 flex flex-col justify-center items-center my-4 sm:w-[113%]">
      <h1 className="text-2xl text-center font-bold mb-4">Subitems</h1>
      <div className="grid grid-cols-2 gap-[8rem] px-[24px]">
        {subitems.map((subitem) => (
          <Link
            key={subitem.id}
            to={`/product-details/${subitem.name
              .replace(/\s+/g, "-")
              .toLowerCase()}`} // Create a URL-friendly link
          >
            <div className="hover:shadow-lg transition-shadow duration-300">
              <img
                src={subitem.image}
                alt={subitem.name}
                className="w-[360px] h-[200px] object-cover"
              />
              <h2 className="mt-2 text-center">{subitem.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductSubitems;
