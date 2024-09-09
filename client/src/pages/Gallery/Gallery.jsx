import React, { useState } from "react";
import "./Gallery.css";
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
} from "../../assets/index.jsx";
import { Link } from "react-router-dom";

const Gallery = () => {
  const products = [
    {
      id: 1,
      frontImage: Image8,
      backImage: Image9,
      description: "Orthopedic Bonded Collection",
    },
    {
      id: 2,
      frontImage: Image10,
      backImage: Image11,
      description: "Pocketed Spring Mattresses",
    },
    {
      id: 3,
      frontImage: HoveredImage4,
      backImage: HoveredImage5,
      description: "Medical Rebonded Mattresses",
    },
    {
      id: 4,
      frontImage: HoveredImage6,
      backImage: HoveredImage7,
      description: "Head Board and Bases",
    },
    {
      id: 5,
      frontImage: HoveredImage8,
      backImage: HoveredImage9,
      description: "Pillows",
    },
    {
      id: 6,
      frontImage: HoveredImage10,
      backImage: HoveredImage11,
      description: "Comforters",
    },
  ];

  return (
    <div className="xl:grid xl:justify-center xl:items-center  xl:w-full xl:mt-2   sm:grid sm:items-center  sm:justify-center  sm:w-[140%] sm:mt-10">
      <div className="font-mono font-light text-3xl text-center">
        OUR PRODUCTS,YOUR COMFORT
      </div>
      <div className="xl:grid xl:grid-cols-3 gap-4 p-4 sm:grid sm:grid-cols-1">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card w-[400px] h-[250px] p-6"
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
            <Link
              to={`/product-details/${product.link}`}
              className="text-center mt-2"
            >
              {product.description}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
