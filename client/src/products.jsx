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
        name: "Orthopedic Bonded Collection",
        image: LeatherSofa,
        subitems: [
          // Adding subitems under Orthopedic Bonded Collection
          {
            id: 1011,
            name: "Orthomed",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1012,
            name: "Preference",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1013,
            name: "Buckingham",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1014,
            name: "Aloe-Vera with Latex/Memory",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1015,
            name: "Memofy",
            image: LeatherSofa, // Using existing image as dummy
          },
        ],
      },
      {
        id: 102,
        name: "Ortho Bonnell Spring Collection",
        image: FabricSofa,
      },
      {
        id: 103,
        name: "Pocketed Spring Collection",
        image: FabricSofa,
      },
      {
        id: 104,
        name: "HR PU Foam Collection",
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
