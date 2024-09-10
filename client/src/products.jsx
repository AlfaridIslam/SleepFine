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
  //-------------------Mattres-------------
  {
    id: 1,
    name: "Mattress",
    image: Sofa,
    //----------Mattress-SUB-----------------
    subcategories: [
      //----------Orthopedic Bonded Collection--------
      {
        id: 101,
        name: "Orthopedic Bonded Collection",
        image: LeatherSofa,

        subitems: [
          //----------Orthopedic Bonded Collection-SUB--------

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
            name: "Aloe-Vera with Latex",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1015,
            name: "Aloe-Vera with Memory",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1016,
            name: "Memofy",
            image: LeatherSofa, // Using existing image as dummy
          },
        ],
      },

      // ------------------------Ortho Bonnell Spring Collection----------------------------
      {
        id: 102,
        name: "Ortho Bonnell Spring Collection",
        image: FabricSofa,

        subitems: [
          // Adding subitems under Orthopedic Bonded Collection
          {
            id: 1041,
            name: "6inch-silver-crown",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1042,
            name: "6inch-oxford",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1043,
            name: "8inch-love-land",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1044,
            name: "8inch-love-land-pillow-top",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1045,
            name: "8inch-romantic-euroton",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1046,
            name: "ortho-bonnell-aloe-vera-with-latex",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1047,
            name: "ortho-bonnell-aloe-vera-with-memory",
            image: LeatherSofa, // Using existing image as dummy
          },
        ],

        // ------------------------Ortho Bonnell Spring Collection-SUB----------------------------
        subitems: [
          // Adding subitems under Orthopedic Bonded Collection
          {
            id: 1021,
            name: "6inch Silver Corown",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1022,
            name: "6inch Oxford",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1023,
            name: "8inch Love Land",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1024,
            name: "8inch Love Land Pillow Top",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1025,
            name: "8inch Romantic Euroton",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1026,
            name: "Aloe-Vera With Latex",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1027,
            name: "Aloe-Vera With Memory",
            image: LeatherSofa, // Using existing image as dummy
          },
        ],
      },

      //--------------Pocketed Spring Collection----------------------------------

      {
        id: 103,
        name: "Pocketed Spring Collection",
        image: FabricSofa,

        //--------------Pocketed Spring Collection---SUB----------------------------------

        subitems: [
          // Adding subitems under Pocketed Spring Collection
          {
            id: 1031,
            name: "Inspiration",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1032,
            name: "6inch Eternity-Euroton",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1033,
            name: "pocketed-spring-aloe-vera-with-latex",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1034,
            name: "pocketed-spring-aloe-vera-with-memory",
            image: LeatherSofa, // Using existing image as dummy
          },
        ], // Ensure the closing bracket and comma are placed correctly
      },
    ],
  },
  //-----------------HR PU Foam Collection-----------------------
  {
    id: 104,
    name: "HR PU Foam Collection",
    image: FabricSofa,
    //-----------------HR PU Foam Collection--SUB-----------------------
    subitems: [
      // Adding subitems under HR PU Foam Collection
      {
        id: 1041,
        name: "hr-pu-gravity",
        image: LeatherSofa, // Using existing image as dummy
      },
      {
        id: 1042,
        name: "hr-pu-space",
        image: LeatherSofa, // Using existing image as dummy
      },
      {
        id: 1043,
        name: "hr-pu-plush",
        image: LeatherSofa, // Using existing image as dummy
      },
      {
        id: 1044,
        name: "hr-pu-techniko",
        image: LeatherSofa, // Using existing image as dummy
      },
      {
        id: 1045,
        name: "Techniko",
        image: LeatherSofa, // Using existing image as dummy
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
        subitems: [
          // Adding subitems under King Size Bed
          {
            id: 2011,
            name: "Platform Bed",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 2012,
            name: "Panel Bed",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 2013,
            name: "Canopy Bed",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 2014,
            name: "Sleigh Bed",
            image: LeatherSofa, // Using existing image as dummy
          },
        ],
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
        subitems: [
          // Adding subitems under Orthopedic Bonded Collection
          {
            id: 2011,
            name: "Platform Bed",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 2012,
            name: "Panel Bed",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 2013,
            name: "Canopy Bed",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 2014,
            name: "Sleigh Bed",
            image: LeatherSofa, // Using existing image as dummy
          },
        ],
      },
      {
        id: 202,
        name: "Queen Size Bed",
        image: QueenSizeBed,
        subitems: [
          // Adding subitems under Orthopedic Bonded Collection
          {
            id: 2021,
            name: "Murphy Bed",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 2022,
            name: "Loft Bed",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 2023,
            name: "Bunk Bed",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 2024,
            name: "Trundle bed",
            image: LeatherSofa, // Using existing image as dummy
          },
        ],
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
        name: "Standard Sofa",
        image: KingSizeBed,
        subitems: [
          // Adding subitems under Orthopedic Bonded Collection
          {
            id: 3011,
            name: "Chesterfield",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 3012,
            name: "Lawson",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 3013,
            name: "Tuxedo",
            image: LeatherSofa, // Using existing image as dummy
          },
        ],
      },
      {
        id: 302,
        name: "Sectional Sofa",
        image: QueenSizeBed,
        subitems: [
          // Adding subitems under Orthopedic Bonded Collection
          {
            id: 3021,
            name: "L-Shaped",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 3022,
            name: "U-Shaped",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 3023,
            name: "Modular",
            image: LeatherSofa, // Using existing image as dummy
          },
        ],
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
        name: "Comforters",
        image: KingSizeBed,
        subitems: [
          // Adding subitems under Orthopedic Bonded Collection
          {
            id: 4011,
            name: "Baffle Box",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 4012,
            name: "Sewn Through",
            image: LeatherSofa, // Using existing image as dummy
          },
        ],
      },
      {
        id: 402,
        name: "Pillows",
        image: QueenSizeBed,
        subitems: [
          // Adding subitems under Orthopedic Bonded Collection
          {
            id: 1011,
            name: "Standard",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1012,
            name: "Body",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1013,
            name: "Contour",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1014,
            name: "Travel",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1015,
            name: "Wedge",
            image: LeatherSofa, // Using existing image as dummy
          },
        ],
      },
    ],
  },
];

export default products;
