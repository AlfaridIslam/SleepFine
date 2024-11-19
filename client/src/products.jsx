// assets/products.js
// import {
//   ORTRHOMED1,
//   ORTRHOMED2,
//   ORTRHOMED3,
//   ORTRHOMED4,
//   ORTRHOMED5,
//   ORTRHOMED6,
//   Preference1,
//   Preference2,
//   Preference3,
//   Preference4,
//   Preference5,
//   Preference6,
//   Buckingham1,
//   Buckingham2,
//   Buckingham3,
//   Buckingham4,
//   Buckingham5,
//   Buckingham6,
//   SixinchPUFOAM1,
//   SixinchPUFOAM2,
//   SixinchPUFOAM3,
//   SixinchPUFOAM4,
//   SixinchPUFOAM5,
//   EightinchPUFOAM1,
//   EightinchPUFOAM2,
//   EightinchPUFOAM3,
//   EightinchPUFOAM4,
//   EightinchPUFOAM5,
//   oxford1,
//   oxford2,
//   oxford3,
//   oxford4,
//   oxford5,
//   oxford6,
//   AloveraBonnel1,
//   AloveraBonnel2,
//   AloveraBonnel3,
//   AloveraBonnel4,
//   AloveraBonnel5,
//   AloveraBonnel6,
//   OrthopedicAloeveraMemory1,
//   OrthopedicAloeveraMemory2,
//   OrthopedicAloeveraMemory3,
//   OrthopedicAloeveraMemory4,
//   OrthopedicAloeveraMemory5,
//   OrthopedicAloeveraMemory6,
//   PlatformBed,
//   PanelBed,
//   CanopyBed,
//   SeighBed,
//   Loveland1,
//   Loveland2,
//   Loveland3,
//   Loveland4,
//   Loveland5,
//   Loveland6,
//   Romanticfirm1,
//   Romanticfirm2,
//   Romanticfirm3,
//   Romanticfirm4,
//   Romanticfirm5,
//   Romanticfirm6,
//   EternityEuroton1,
//   EternityEuroton2,
//   EternityEuroton3,
//   EternityEuroton4,
//   EternityEuroton5,
//   EternityEuroton6,
//   InsperationalPocketed1,
//   InsperationalPocketed2,
//   InsperationalPocketed3,
//   InsperationalPocketed4,
//   InsperationalPocketed5,
//   InsperationalPocketed6,
//   LoftBed,
//   MurphyBed,
//   queensizebed1,
//   queensizebed2,
//   queensizebed3,
//   queensizebed4,
//   //Sofas
//   //Standard-sofa
//   chesterfield1,
//   chesterfield2,
//   chesterfield3,
//   chesterfield4,
//   ChesterfieldSofa,
//   Lawson1,
//   Lawson2,
//   Lawson3,
//   Lawson4,
//   LawsonSofa,
//   Tuxedo1,
//   Tuxedo2,
//   Tuxedo3,
//   Tuxedo4,
//   //Sectional sofas
//   LshapedSofa,
//   UshapedSofa,
//   LshapedSofa1,
//   LshapedSofa2,
//   LshapedSofa3,
//   LshapedSofa4,
//   UshapedSofa1,
//   UshapedSofa2,
//   UshapedSofa3,
//   UshapedSofa4,
//   ushapedsofacumbed1,
//   ushapedsofacumbed2,
//   ushapedsofacumbed3,
//   ushapedsofacumbed4,
//   Lshapedsofacumbed1,
//   Lshapedsofacumbed2,
//   Lshapedsofacumbed3,
//   Lshapedsofacumbed4,
//   ModularSofa1,
//   ModularSofa2,
//   ModularSofa3,
//   ModularSofa4,
//   //---------ACCESSORIES------------------------
//   //COMFORTERS
//   BaffelBox,
//   SewnThrough,
//   //Pillows
//   BodyPillow,
//   StandardPillow,
//   MemoryfoamPillow1,
//   MemoryfoamPillow2,
//   MemoryfoamPillow3,
//   MemoryfoamPillow4,
//   LatexPillow1,
//   LatexPillow2,
//   LatexPillow3,
//   LatexPillow4,
//   AloveraPolyfiberPillow1,
//   AloveraPolyfiberPillow2,
//   AloveraPolyfiberPillow3,
//   AloveraPolyfiberPillow4,
//   Milange5,

// } from "./assets/index";

import { SubProductsImages } from "./components/Cloudinary/SubProductsImages";

const products = [
  //-------------------Mattresses-------------
  {
    id: 1,

    name: "Mattressess",
    image: SubProductsImages.Mattressess,

    subcategories: [
      //----------Orthopedic Bonded Collection--------
      {
        id: 101,
        name: "Orthopedic Bonded Collection",
        image: SubProductsImages.Orthopedic,

        subitems: [
          {
            id: 1011,
            name: "Orthomed",
            image:SubProductsImages.Orthomed,
          },

          {
            id: 1012,
            name: "Preference",
            image: SubProductsImages.Preference, 
          },
          {
            id: 1013,
            name: "Buckingham",
            image: SubProductsImages.Buckingham, 
          },
          {
            id: 1014,
            name: "Buckingham-lexus",
            image: SubProductsImages.Buckingham, 
          },
          {
            id: 1015,
            name: "Orthopedic-Aloe-Vera-Latex",
            image: SubProductsImages.Aloeveralatex, 
          },
          {
            id: 1016,
            name: "orthopedic-aloe-vera-memory",
            image: SubProductsImages.Aloeveramemory, 
          },
          {
            id: 1017,
            name: "Memofy",
            image: SubProductsImages.Memofy, 
          },
          {
            id: 1018,
            name: "Milange",
            image: SubProductsImages.Milange, 
          },
        ],
      },

      // ------------------------Ortho Bonnell Spring Collection----------------------------
      {
        id: 102,
        name: "Ortho Bonnell Spring Collection",
        image:SubProductsImages.orthobonell,

        subitems: [
          {
            id: 1021,
            name: "the-hotel",
            image: SubProductsImages.Thehotel, 
          },
          {
            id: 1022,
            name: "Oxford",
            image:SubProductsImages.oxford, 
          },
          {
            id: 1023,
            name: "Love-Land-pillow-top",
            image: SubProductsImages.LovelandPillowtop, 
          },

          {
            id: 1024,
            name: "Romantic-Euroton",
            image: SubProductsImages.RomanticEuroton, 
          },
          {
            id: 1026,
            name: "ortho-bonnell-aloe-vera-with-latex",
            image: SubProductsImages.AloveraLatex, 
          },
          {
            id: 1027,
            name: "ortho-bonnell-aloe-vera-with-memory",
            image: SubProductsImages.AloverMemory , 
          },
          {
            id: 1028,
            name: "ambitious",
            image: SubProductsImages.AloverMemory , 
          },
        ],
      },

      //--------------Pocketed Spring Collection----------------------------------
      {
        id: 103,
        name: "Pocketed Spring Collection",
        image:SubProductsImages.PocketedSpring ,

        subitems: [
          {
            id: 1031,
            name: "pocketed-spring-inspiration",
            image: SubProductsImages.Inspiration , 
          },
          {
            id: 1032,
            name: "pocketed-spring-6inch-eternity-euroton",
            image:SubProductsImages.Euroton , 
          },
          {
            id: 1033,
            name: "pocketed-spring-aloe-vera-with-latex",
            image: SubProductsImages.AloveraLatex, 
          },
          {
            id: 1034,
            name: "pocketed-spring-aloe-vera-with-memory",
            image:SubProductsImages.AloverMemory , 
          },
        ],
      },
      //-----------------HR PU Foam Collection-----------------------
      {
        id: 104,
        name: "HR PU Foam Collection",
        image:SubProductsImages.Hrpufoam,
        subitems: [
          {
            id: 1041,
            name: "hr-pu-gravity",
            image: SubProductsImages.gravity, 
          },
          {
            id: 1042,
            name: "hr-pu-space",
            image: SubProductsImages.space, 
          },
          {
            id: 1043,
            name: "hr-pu-plush",
            image:SubProductsImages.plush, 
          },
          {
            id: 1044,
            name: "hr-pu-techniko",
            image: SubProductsImages.techniko, 
          },
        ],
      },
    ],
  },

  //-----------------Beds-----------------------
  {
    id: 2,
    name: "Beds",

    image: SubProductsImages.Bed,

    subcategories: [
      {
        id: 201,
        name: "Denver Model",
        image: SubProductsImages.DenverModel,
        subitems: [
          {
            id: 2011,
            name: "denver-with-storage",
            image: SubProductsImages.DenverModel_Withstorage,
          },
          {
            id: 2012,
            name: "denver-without-storage",
            image: SubProductsImages.DenverModel_WithOutstorage,
          },
         
        ],
      },
      {
        id: 202,
        name: "PK Model",
        image:  SubProductsImages.PkModel,
        subitems: [
          {
            id: 2021,
            name: "pkmodel-with-storage",
            image:  SubProductsImages.PkModel_WithStorage, 
          },
          {
            id: 2022,
            name: "pkmodel-without-storage",
            image:  SubProductsImages.PkModel_WithOutStorage, 
          },
        ],
      },
      // Diamond BED
      {
        id: 204,
        name: "Diamond Model",
        image: SubProductsImages.DiamondModel,
        subitems: [
          {
            id: 2041,
            name: "diamond-with-storage",
            image:SubProductsImages.DiamondModel_WithStorage, 
          },
          {
            id: 2042,
            name: "diamond-without-storage",
            image: SubProductsImages.DiamondModel_WithoutStorage, 
          },
        ],
      },
      
    ],
  },

  //-----------------Sofas-----------------------
  {
    id: 3,
    name: "Sofas",
    image: SubProductsImages.Sofas ,
    subcategories: [
      {
        id: 301,
        name: "Standard-Sofa",
        image: SubProductsImages.StandardSofa,
        subitems: [
          {
            id: 3011,
            name: "Chesterfield",
            image:SubProductsImages.Chesterfield,
          },
          {
            id: 3012,
            name: "Lawson",
            image:SubProductsImages.Lawson, 
          },
          {
            id: 3013,
            name: "Tuxedo",
            image: SubProductsImages.Tuxedo, 
          },
        ],
      },
      {
        id: 302,
        name: "Sectional Sofa",
        image: SubProductsImages.SectionalSofa,
        subitems: [
          {
            id: 3021,
            name: "L-Shaped",
            image: SubProductsImages.Lshaped, 
          },
          {
            id: 3022,
            name: "U-Shaped",
            image: SubProductsImages.Ushaped, 
          },
          {
            id: 3023,
            name: "Modular",
            image: SubProductsImages.Modular, 
          },
          {
            id: 3024,
            name: "l-shaped-sofa-cumbed",
            image: SubProductsImages.Lshaped_SofacumBed, 
          },
          {
            id: 3025,
            name: "u-shaped-sofa-cumbed",
            image: SubProductsImages.Ushaped_SofacumBed, 
          },
        ],
      },
    ],
  },

  //-----------------Accessories-----------------------
  {
    id: 4,
    name: "Accessories",
    image:SubProductsImages.Accessories,
    subcategories: [
      {
        id: 401,
        name: "Mattress-Protector",
        image:SubProductsImages.Mattress_Protector,
        subitems: [
          {
            id: 4011,
            name: "protector",
            image: SubProductsImages.waterproof_Protector, // Using existing image as dummy
          },
          {
            id: 4012,
            name: "quilted-protector",
            image: SubProductsImages.QuiltedProtector, 
          },
          {
            id: 4013,
            name: "fitted-protector",
            image: SubProductsImages.FittedProtector, 
          },
        ],
      },
      {
        id: 402,
        name: "Pillows",
        image:  SubProductsImages.Pillows,
        subitems: [
          {
            id: 4011,
            name: "Memory-pillow",
            image:  SubProductsImages.MemoryPillow, 
          },
          {
            id: 4012,
            name: "Latex-pillow",
            image:  SubProductsImages.LatexPillow, 
          },
          {
            id: 4013,
            name: "foam-pillow",
            image:  SubProductsImages.FoamPillow, 
          },
          {
            id: 4014,
            name: "Poly-fibre-pillow",
            image:  SubProductsImages.PolyFiberPillow, 
          },
          
        ],
      },
    ],
  },
];

export default products;