// assets/products.js
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
  SixinchPUFOAM1,
  SixinchPUFOAM2,
  SixinchPUFOAM3,
  SixinchPUFOAM4,
  SixinchPUFOAM5,
  EightinchPUFOAM1,
  EightinchPUFOAM2,
  EightinchPUFOAM3,
  EightinchPUFOAM4,
  EightinchPUFOAM5,
  oxford1,
  oxford2,
  oxford3,
  oxford4,
  oxford5,
  oxford6,
  AloveraBonnel1,
  AloveraBonnel2,
  AloveraBonnel3,
  AloveraBonnel4,
  AloveraBonnel5,
  AloveraBonnel6,
  OrthopedicAloeveraMemory1,
  OrthopedicAloeveraMemory2,
  OrthopedicAloeveraMemory3,
  OrthopedicAloeveraMemory4,
  OrthopedicAloeveraMemory5,
  OrthopedicAloeveraMemory6,
  CanopyBed,
  LoftBed,
  LshapedSofa,
  StandardPillow,
  LatexPillow1,
  ModularSofa1,
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
  EternityEuroton1,
  EternityEuroton2,
  EternityEuroton3,
  EternityEuroton4,
  EternityEuroton5,
  EternityEuroton6,
  InsperationalPocketed1,
  InsperationalPocketed2,
  InsperationalPocketed3,
  InsperationalPocketed4,
  InsperationalPocketed5,
  InsperationalPocketed6,
} from "./assets/index"; // Adjust the path according to your folder structure

const products = [
  //-------------------Mattresses-------------
  {
    id: 1,

    name: "Mattressess",
    image: ORTRHOMED1,

    subcategories: [
      //----------Orthopedic Bonded Collection--------
      {
        id: 101,
        name: "Orthopedic Bonded Collection",
        image: ORTRHOMED2,

        subitems: [
          {
            id: 1011,
            name: "Orthomed",
            image: ORTRHOMED3, // Using existing image as dummy
          },
          {
            id: 1012,
            name: "Preference",
            image: Preference1, // Using existing image as dummy
          },
          {
            id: 1013,
            name: "Buckingham",
            image: Buckingham1, // Using existing image as dummy
          },
          {
            id: 1014,
            name: "Orthopedic-Aloe-Vera-Latex",
            image: AloveraBonnel1, // Using existing image as dummy
          },
          {
            id: 1015,
            name: "orthopedic-aloe-vera-memory",
            image: OrthopedicAloeveraMemory1, // Using existing image as dummy
          },
          {
            id: 1016,
            name: "Memofy",
            image: OrthopedicAloeveraMemory2, // Using existing image as dummy
          },
        ],
      },

      // ------------------------Ortho Bonnell Spring Collection----------------------------
      {
        id: 102,
        name: "Ortho Bonnell Spring Collection",
        image: OrthopedicAloeveraMemory3,

        subitems: [
          {
            id: 1021,
            name: "the-hotel",
            image: OrthopedicAloeveraMemory4, // Using existing image as dummy
          },
          {
            id: 1022,
            name: "Oxford",
            image: oxford1, // Using existing image as dummy
          },
          {
            id: 1023,
            name: "Love-Land-pillow-top",
            image: Loveland1, // Using existing image as dummy
          },

          {
            id: 1024,
            name: "Romantic-Euroton",
            image: Romanticfirm1, // Using existing image as dummy
          },
          {
            id: 1026,
            name: "ortho-bonnell-aloe-vera-with-latex",
            image: AloveraBonnel1, // Using existing image as dummy
          },
          {
            id: 1027,
            name: "ortho-bonnell-aloe-vera-with-memory",
            image: OrthopedicAloeveraMemory5, // Using existing image as dummy
          },
        ],
      },

      //--------------Pocketed Spring Collection----------------------------------
      {
        id: 103,
        name: "Pocketed Spring Collection",
        image: EternityEuroton1,

        subitems: [
          {
            id: 1031,
            name: "pocketed-spring-inspiration",
            image: InsperationalPocketed1, // Using existing image as dummy
          },
          {
            id: 1032,
            name: "pocketed-spring-6inch-eternity-euroton",
            image: EternityEuroton2, // Using existing image as dummy
          },
          {
            id: 1033,
            name: "pocketed-spring-aloe-vera-with-latex",
            image: AloveraBonnel2, // Using existing image as dummy
          },
          {
            id: 1034,
            name: "pocketed-spring-aloe-vera-with-memory",
            image: OrthopedicAloeveraMemory6, // Using existing image as dummy
          },
        ],
      },
      //-----------------HR PU Foam Collection-----------------------
      {
        id: 104,
        name: "HR PU Foam Collection",
        image: Buckingham3,
        subitems: [
          {
            id: 1041,
            name: "hr-pu-gravity",
            image: Buckingham4, // Using existing image as dummy
          },
          {
            id: 1042,
            name: "hr-pu-space",
            image: Buckingham5, // Using existing image as dummy
          },
          {
            id: 1043,
            name: "hr-pu-plush",
            image: Buckingham6, // Using existing image as dummy
          },
          {
            id: 1044,
            name: "hr-pu-techniko",
            image: ORTRHOMED1, // Using existing image as dummy
          },
        ],
      },
    ],
  },

  //-----------------Beds-----------------------
  {
    id: 2,
    name: "Beds",

    image: LoftBed,

    subcategories: [
      {
        id: 201,
        name: "King Size Bed",
        image: SixinchPUFOAM2,
        subitems: [
          {
            id: 2011,
            name: "platform-bed",
            image: SixinchPUFOAM3, // Using existing image as dummy
          },
          {
            id: 2012,
            name: "Panel-Bed",
            image: SixinchPUFOAM4, // Using existing image as dummy
          },
          {
            id: 2013,
            name: "Canopy-Bed",
            image: SixinchPUFOAM5, // Using existing image as dummy
          },
          {
            id: 2014,
            name: "Sleigh-Bed",
            image: SixinchPUFOAM5, // Using existing image as dummy
          },
        ],
      },
      {
        id: 202,
        name: "Queen Size Bed",
        image: EightinchPUFOAM1,
        subitems: [
          {
            id: 2021,
            name: "Murphy-Bed",
            image: EightinchPUFOAM2, // Using existing image as dummy
          },
          {
            id: 2022,
            name: "Loft-Bed",
            image: EightinchPUFOAM3, // Using existing image as dummy
          },
          {
            id: 2023,
            name: "Bunk-Bed",
            image: EightinchPUFOAM4, // Using existing image as dummy
          },
          {
            id: 2024,
            name: "Trundle-Bed",
            image: EightinchPUFOAM5, // Using existing image as dummy
          },
        ],
      },
    ],
  },

  //-----------------Sofas-----------------------
  {
    id: 3,
    name: "Sofas",
    image: ModularSofa1,
    subcategories: [
      {
        id: 301,
        name: "Standard-Sofa",
        image: oxford2,
        subitems: [
          {
            id: 3011,
            name: "Chesterfield",
            image: oxford3, // Using existing image as dummy
          },
          {
            id: 3012,
            name: "Lawson",
            image: oxford4, // Using existing image as dummy
          },
          {
            id: 3013,
            name: "Tuxedo",
            image: oxford5, // Using existing image as dummy
          },
        ],
      },
      {
        id: 302,
        name: "Sectional Sofa",
        image: oxford6,
        subitems: [
          {
            id: 3021,
            name: "L-Shaped",
            image: EightinchPUFOAM1, // Using existing image as dummy
          },
          {
            id: 3022,
            name: "U-Shaped",
            image: EightinchPUFOAM1, // Using existing image as dummy
          },
          {
            id: 3023,
            name: "Modular",
            image: EightinchPUFOAM1, // Using existing image as dummy
          },
        ],
      },
    ],
  },

  //-----------------Accessories-----------------------
  {
    id: 4,
    name: "Accessories",
    image: LatexPillow1,
    subcategories: [
      {
        id: 401,
        name: "Comforters",
        image: EightinchPUFOAM4,
        subitems: [
          {
            id: 4011,
            name: "Baffle-Box",
            image: Buckingham1, // Using existing image as dummy
          },
          {
            id: 4012,
            name: "Sewn-Through",
            image: Buckingham2, // Using existing image as dummy
          },
        ],
      },
      {
        id: 402,
        name: "Pillows",
        image: Buckingham3,
        subitems: [
          {
            id: 4011,
            name: "Standard",
            image: Buckingham1, // Using existing image as dummy
          },
          {
            id: 4012,
            name: "Body",
            image: Buckingham2, // Using existing image as dummy
          },
          {
            id: 4013,
            name: "Contour",
            image: Buckingham3, // Using existing image as dummy
          },
          {
            id: 4014,
            name: "Travel",
            image: Buckingham4, // Using existing image as dummy
          },
          {
            id: 4015,
            name: "Wedge",
            image: Buckingham5, // Using existing image as dummy
          },
        ],
      },
    ],
  },
];

export default products;
