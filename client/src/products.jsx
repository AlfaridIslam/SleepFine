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

      // ------------------------Ortho Bonnell Spring Collection----------------------------
      {
        id: 102,
        name: "Ortho Bonnell Spring Collection",
        image: FabricSofa,
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
          // Adding subitems under Orthopedic Bonded Collection
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
            name: "Aloe-Vera With Latex",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1034,
            name: "Aloe-Vera With Memory",
            image: LeatherSofa, // Using existing image as dummy
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
          // Adding subitems under Orthopedic Bonded Collection
          {
            id: 1041,
            name: "Gravity",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1042,
            name: "Space",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1043,
            name: "Plush",
            image: LeatherSofa, // Using existing image as dummy
          },
          {
            id: 1044,
            name: "Techniko",
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
