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
  PlatformBed,
  PanelBed,
  CanopyBed,
  SeighBed,
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
  LoftBed,
  MurphyBed,
  queensizebed1,
  queensizebed2,
  queensizebed3,
  queensizebed4,
  //Sofas
  //Standard-sofa
  chesterfield1,
  chesterfield2,
  chesterfield3,
  chesterfield4,
  ChesterfieldSofa,
  Lawson1,
  Lawson2,
  Lawson3,
  Lawson4,
  LawsonSofa,
  Tuxedo1,
  Tuxedo2,
  Tuxedo3,
  Tuxedo4,
  //Sectional sofas
  LshapedSofa,
  UshapedSofa,
  LshapedSofa1,
  LshapedSofa2,
  LshapedSofa3,
  LshapedSofa4,
  UshapedSofa1,
  UshapedSofa2,
  UshapedSofa3,
  UshapedSofa4,
  ushapedsofacumbed1,
  ushapedsofacumbed2,
  ushapedsofacumbed3,
  ushapedsofacumbed4,
  Lshapedsofacumbed1,
  Lshapedsofacumbed2,
  Lshapedsofacumbed3,
  Lshapedsofacumbed4,
  ModularSofa1,
  ModularSofa2,
  ModularSofa3,
  ModularSofa4,
  //---------ACCESSORIES------------------------
  //COMFORTERS
  BaffelBox,
  SewnThrough,
  //Pillows
  BodyPillow,
  StandardPillow,
  MemoryfoamPillow1,
  MemoryfoamPillow2,
  MemoryfoamPillow3,
  MemoryfoamPillow4,
  LatexPillow1,
  LatexPillow2,
  LatexPillow3,
  LatexPillow4,
  AloveraPolyfiberPillow1,
  AloveraPolyfiberPillow2,
  AloveraPolyfiberPillow3,
  AloveraPolyfiberPillow4,
  Milange5,

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
          {
            id: 1017,
            name: "Milange",
            image: Milange5, // Using existing image as dummy
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
        image: SixinchPUFOAM1,
        subitems: [
          {
            id: 1041,
            name: "hr-pu-gravity",
            image: SixinchPUFOAM2, // Using existing image as dummy
          },
          {
            id: 1042,
            name: "hr-pu-space",
            image: SixinchPUFOAM3, // Using existing image as dummy
          },
          {
            id: 1043,
            name: "hr-pu-plush",
            image: SixinchPUFOAM4, // Using existing image as dummy
          },
          {
            id: 1044,
            name: "hr-pu-techniko",
            image: SixinchPUFOAM5, // Using existing image as dummy
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
        name: "Denver Model",
        image: PlatformBed,
        subitems: [
          {
            id: 2011,
            name: "denver-with-storage",
            image: PlatformBed, // Using existing image as dummy
          },
          {
            id: 2012,
            name: "denver-without-storage",
            image: PanelBed, // Using existing image as dummy
          },
          {
            id: 2013,
            name: "Canopy-Bed",
            image: CanopyBed, // Using existing image as dummy
          },
          {
            id: 2014,
            name: "Sleigh-Bed",
            image: SeighBed, // Using existing image as dummy
          },
        ],
      },
      {
        id: 202,
        name: "PK Model",
        image: queensizebed1,
        subitems: [
          {
            id: 2021,
            name: "pkmodel-with-storage",
            image: MurphyBed, // Using existing image as dummy
          },
          {
            id: 2022,
            name: "pkmodel-without-storage",
            image: LoftBed, // Using existing image as dummy
          },
        ],
      },
      // Diamond BED
      {
        id: 204,
        name: "Diamond Model",
        image: queensizebed1,
        subitems: [
          {
            id: 2041,
            name: "diamond-with-storage",
            image: MurphyBed, // Using existing image as dummy
          },
          {
            id: 2042,
            name: "diamond-without-storage",
            image: LoftBed, // Using existing image as dummy
          },
        ],
      },
      // DOUBLE BED
      {
        id: 203,
        name: "double Size Bed",
        image: queensizebed1,
        subitems: [
          {
            id: 2031,
            name: "double-with-storage",
            image: MurphyBed, // Using existing image as dummy
          },
          {
            id: 2032,
            name: "double-without-storage",
            image: LoftBed, // Using existing image as dummy
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
        image: chesterfield1,
        subitems: [
          {
            id: 3011,
            name: "Chesterfield",
            image: chesterfield3, // Using existing image as dummy
          },
          {
            id: 3012,
            name: "Lawson",
            image: Lawson4, // Using existing image as dummy
          },
          {
            id: 3013,
            name: "Tuxedo",
            image: Tuxedo1, // Using existing image as dummy
          },
        ],
      },
      {
        id: 302,
        name: "Sectional Sofa",
        image: UshapedSofa,
        subitems: [
          {
            id: 3021,
            name: "L-Shaped",
            image: LshapedSofa, // Using existing image as dummy
          },
          {
            id: 3022,
            name: "U-Shaped",
            image: UshapedSofa1, // Using existing image as dummy
          },
          {
            id: 3023,
            name: "Modular",
            image: ModularSofa2, // Using existing image as dummy
          },
          {
            id: 3024,
            name: "l-shaped-sofa-cumbed",
            image: ModularSofa2, // Using existing image as dummy
          },
          {
            id: 3025,
            name: "u-shaped-sofa-cumbed",
            image: ModularSofa2, // Using existing image as dummy
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
        name: "Mattress-Protector",
        image: LatexPillow2,
        subitems: [
          {
            id: 4011,
            name: "protector",
            image: BaffelBox, // Using existing image as dummy
          },
          {
            id: 4012,
            name: "quilted-protector",
            image: SewnThrough, // Using existing image as dummy
          },
          {
            id: 4013,
            name: "fitted-protector",
            image: SewnThrough, // Using existing image as dummy
          },
        ],
      },
      {
        id: 402,
        name: "Pillows",
        image: BodyPillow,
        subitems: [
          {
            id: 4011,
            name: "Memory-pillow",
            image: StandardPillow, // Using existing image as dummy
          },
          {
            id: 4012,
            name: "Latex-pillow",
            image: BodyPillow, // Using existing image as dummy
          },
          {
            id: 4013,
            name: "foam-pillow",
            image: MemoryfoamPillow1, // Using existing image as dummy
          },
          {
            id: 4014,
            name: "Poly-fibre-pillow",
            image: MemoryfoamPillow2, // Using existing image as dummy
          },
          {
            id: 4015,
            name: "Polyfibre-textile",
            image: MemoryfoamPillow3, // Using existing image as dummy
          },
        ],
      },
    ],
  },
];

export default products;