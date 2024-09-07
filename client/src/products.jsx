// assets/products.js
import {
  Sofa,
  LeatherSofa,
  FabricSofa,
  Bed,
  KingSizeBed,
  QueenSizeBed,
} from "./assets/index"; // Adjust the path according to your folder structure

const products = [
  {
    id: 1,
    name: "Mattress",
    image: Sofa,
    subcategories: [
      {
        id: 101,
        name: "Leather Sofa",
        image: LeatherSofa,
      },
      {
        id: 102,
        name: "Fabric Sofa",
        image: FabricSofa,
      },
    ],
  },
  {
    id: 2,
    name: "Bed",
    image: Bed,
    subcategories: [
      {
        id: 201,
        name: "King Size Bed",
        image: KingSizeBed,
      },
      {
        id: 202,
        name: "Queen Size Bed",
        image: QueenSizeBed,
      },
    ],
  },
  {
    id: 3,
    name: "Sofa",
    image: Bed,
    subcategories: [
      {
        id: 301,
        name: "King Size Bed",
        image: KingSizeBed,
      },
      {
        id: 302,
        name: "Queen Size Bed",
        image: QueenSizeBed,
      },
    ],
  },
  {
    id: 4,
    name: "Accessories",
    image: Bed,
    subcategories: [
      {
        id: 401,
        name: "King Size Bed",
        image: KingSizeBed,
      },
      {
        id: 402,
        name: "Queen Size Bed",
        image: QueenSizeBed,
      },
    ],
  },
];

export default products;
