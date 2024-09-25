import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  ORTRHOMED1,
  ORTRHOMED2,
  ORTRHOMED3,
  ORTRHOMED4,
  ORTRHOMED5,
  ORTRHOMED6,
  AloeveraBanner,
  BuckinghumBanner,
  PreferenceBanner,
  RomanticBanner,
  OrthopedicAloeveraLatexSpeci,
  OrthopedicAloeveraMemorySpeci,





  Milange1,
  Milange2,
  Milange3,
  Milange4,
  Milange5,
  Milange6,
  MilangeSpeci,
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
  BuckinghumSpeci,
  Hotel1,
  Hotel2,
  Hotel3,
  OrthopedicAloeveraMemory1,
  OrthopedicAloeveraMemory2,
  OrthopedicAloeveraMemory3,
  OrthopedicAloeveraMemory4,
  OrthopedicAloeveraMemory5,
  OrthopedicAloeveraMemory6,
  //pufoam6
  SixinchPUFOAM1,
  SixinchPUFOAM2,
  SixinchPUFOAM3,
  SixinchPUFOAM4,
  SixinchPUFOAM5,
  oxford1,
  oxford2,
  oxford3,
  oxford4,
  oxford5,
  oxford6,
  EightinchPUFOAM1,
  EightinchPUFOAM2,
  EightinchPUFOAM3,
  EightinchPUFOAM4,
  EightinchPUFOAM5,
  AloveraBonnel1,
  AloveraBonnel2,
  AloveraBonnel3,
  AloveraBonnel4,
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
  OrthomedBanner,
  RoseByRosaBanner2,
  AmbitiousSleepingBanner3,
  RomanticBanner4,
  Orthospeci,
  InsperationalPocketed1,
  InsperationalPocketed2 ,
  InsperationalPocketed3 ,
  InsperationalPocketed4 ,
  InsperationalPocketed5 ,
  InsperationalPocketed6,

  EternityEuroton1,
  EternityEuroton3,
  EternityEuroton2,
  EternityEuroton4,
  EternityEuroton5,

  Memofy1,
  Memofy2,
  Memofy3,
  MemofySpeci,
//------------------------------------------------------------------
  //beds
  //kingsize bed--------------------
  kingsizebed1,
  kingsizebed2,
  kingsizebed3,
  kingsizebed4,
  DenverModel2,
DenverModel3,
DenverModel4,
DenverModel1,

  //queen size
  queensizebed1,
  queensizebed2,
  queensizebed3,
  queensizebed4,
  PKModel1,
  PKModel2,
  PKModel3,
  PKModel4,
  DiamondModel1,
  DiamondModel2,
  DiamondModel3,
  DiamondModel4,


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
  Foampillow1,
  Foampillow2,
  Foampillow3,
  Foampillow4,
  AloveraPolyfiberPillow1,
  AloveraPolyfiberPillow2,
  AloveraPolyfiberPillow3,
  AloveraPolyfiberPillow4,
  PolyfiberPillow1,
  Foampillow11,
} from "../../assets/index.jsx"; // Adjust the import paths as needed

// Define the image mapping for each product type with multiple images and descriptions
const productData = {
  // SOFAS
  // STANDARD SOFA
  chesterfield: {
    images: [
      chesterfield1,
      chesterfield2,
      chesterfield3,
      chesterfield4,
      
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Chesterfield</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  lawson: {
    images: [Lawson1, Lawson2,Lawson3,Lawson4, ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">lawson</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  tuxedo: {
    images: [Tuxedo1, Tuxedo2, Tuxedo3,Tuxedo4,], // Replace these with actual King Size Bed images
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Tuxedo</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },

  // SECTIONAL SOFA
  "l-shaped": {
    images: [LshapedSofa1, LshapedSofa2, LshapedSofa3,LshapedSofa4, ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">l shaped</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "u-shaped": {
    images: [UshapedSofa1, UshapedSofa2, UshapedSofa3,UshapedSofa4,], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">U shaped</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  modular: {
    images: [
      ModularSofa1,
      ModularSofa2,
      ModularSofa3,
      ModularSofa4,
      
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Modular</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },

  "l-shaped-sofa-cumbed": {
    images: [
      Lshapedsofacumbed1,
      Lshapedsofacumbed2,
      Lshapedsofacumbed3,
      Lshapedsofacumbed4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">l shaped sofa cum bed</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },

  "u-shaped-sofa-cumbed": {
    images: [ushapedsofacumbed1,
      ushapedsofacumbed2,
      ushapedsofacumbed3,
      ushapedsofacumbed4,], // Replace these with actual Queen Size Bed images
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">U shaped sofa cum bed</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },

  // BEDS
  // DENVER-MODEL-BEDS
  "denver-with-storage": {
    images: [ DenverModel1, DenverModel2,
      DenverModel3,
      DenverModel4,
     
     ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Denver with storage</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "denver-without-storage": {
    images: [
      DenverModel1,
      DenverModel2,
      DenverModel3,
      DenverModel4,
      
      
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Denver without storage</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  // DIAMOND MODEL BED
  "diamond-with-storage": {
    images: [ DiamondModel1,
      DiamondModel2,
      DiamondModel3,
      DiamondModel4,], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Diamond with storage</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "diamond-without-storage": {
    images: [ DiamondModel1,
      DiamondModel2,
      DiamondModel3,
      DiamondModel4,], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Diamond without storage</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  // PK MODEL BEDS
  "pkmodel-with-storage": {
    images: [
      PKModel1,
      PKModel2,
      PKModel3,
      PKModel4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">PK model with storage</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "pkmodel-without-storage": {
    images: [
      PKModel1,
  PKModel2,
  PKModel3,
  PKModel4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">PK Model without storage</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  // DOUBLE BED
  "double-with-storage": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Double bed with storage</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "double-without-storage": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM1,
      EightinchPUFOAM1,
      EightinchPUFOAM1,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Double bed without storage</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },

  // MATTRESSES
  // ORTHOPEDIC
  orthomed: {
    images: [
      OrthomedBanner,
      ORTRHOMED1,
      ORTRHOMED2,
      ORTRHOMED6,
     
      Orthospeci,
    ],
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Orthomed</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>TT (Tight Top)</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  milange: {
    images: [OrthomedBanner, Milange1,Milange2,Milange6, MilangeSpeci,], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Milange </div>
    This mattress is designed for optimal orthopedic support and comfort. It features a high-density rebounded foam core that evenly distributes body weight, reducing pressure on joints and providing spinal alignment. 
    The mattress is firm yet comfortable, catering to those with back or joint issues. Its breathable cover ensures a cool and hygienic sleeping surface. Ideal for individuals seeking a restful night's sleep while maintaining proper posture and relieving body aches. Suitable for all bed types, it offers durability, long-lasting shape retention, and a blend of therapeutic and luxury sleeping experiences.<br><br>
    <h2 class="font-bold">Firmness</h2>
    The Preference Orthomed Mattress offers orthopedic support, providing firm and balanced support that aligns the spine and alleviates pressure points, making it an excellent choice for those with back or joint discomfort.<br><br>
    <h2 class="font-bold">Comfort</h2>
    When it comes to comfort, this mattress strikes the perfect balance with its high-density Rebonded foam combines with HR foam core. It provides a firm sleeping surface that supports the body without feeling too hard, ensuring a restful and rejuvenating sleep experience.<br><br>
    <h2 class="font-bold">Breathability & Upholstery </h2>
    Its breathability is enhanced by a breathable cover made of 300gsm Viscose Okotex 100 Certified knitted Fabric, designed to regulate temperature and moisture. This keeps the sleeping surface cool, fresh, and hygienic, promoting a more comfortable sleep throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>6 inches only</p>
    </div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>EuroTop</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
  `,
  },

  preference: {
    images: [OrthomedBanner,Preference1, Preference2, Preference6,PreferenceBanner, ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">The Preference Orthomed </div>
    This mattress is designed for optimal orthopedic support and comfort. It features a high-density rebounded foam core that evenly distributes body weight, reducing pressure on joints and providing spinal alignment. 
    The mattress is firm yet comfortable, catering to those with back or joint issues. Its breathable cover ensures a cool and hygienic sleeping surface. Ideal for individuals seeking a restful night's sleep while maintaining proper posture and relieving body aches. Suitable for all bed types, it offers durability, long-lasting shape retention, and a blend of therapeutic and luxury sleeping experiences.<br><br>
    <h2 class="font-bold">Firmness</h2>
    The Preference Orthomed Mattress offers orthopedic support, providing firm and balanced support that aligns the spine and alleviates pressure points, making it an excellent choice for those with back or joint discomfort.<br><br>
    <h2 class="font-bold">Comfort</h2>
    When it comes to comfort, this mattress strikes the perfect balance with its high-density Rebonded foam combines with HR foam core. It provides a firm sleeping surface that supports the body without feeling too hard, ensuring a restful and rejuvenating sleep experience.<br><br>
    <h2 class="font-bold">Breathability & Upholstery </h2>
    Its breathability is enhanced by a breathable cover made of 300gsm Viscose Okotex 100 Certified knitted Fabric, designed to regulate temperature and moisture. This keeps the sleeping surface cool, fresh, and hygienic, promoting a more comfortable sleep throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>6 inches only</p>
    </div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>EuroTop</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
  `,
  },
  buckingham: {
    images: [BuckinghumBanner,Buckingham1, Buckingham2, Buckingham5,BuckinghumSpeci,], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Buckinghum</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>8 & 10 inches only</p>
    </div>
    <div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>EuroTop</p>
    </div>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>10 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "orthopedic-aloe-vera-latex": {
    images: [AloeveraBanner,AloveraBonnel1, AloveraBonnel2, AloveraBonnel3,OrthopedicAloeveraLatexSpeci, ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Orthopedic aloe vera latex</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    </div>
    <div class="description flex justify-start items-start gap-5 mt-2">
  <div class="flex flex-col">
    <h2 class="font-bold">Height</h2>
    <p>6 ,8 & 10 inches only</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Variant</h2>
    <p>EuroTop</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Warranty</h2>
    <p>10 years for 8 & 10 inches</p>
    <p>7 years for 6 inches</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐⭐</p>
  </div>
</div>

  `,
  },
  "orthopedic-aloe-vera-memory": {
    images: [
      AloeveraBanner,
      OrthopedicAloeveraMemory1,
      OrthopedicAloeveraMemory2,
      OrthopedicAloeveraMemory6,
      OrthopedicAloeveraMemorySpeci,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Orthopedic aloe vera memory</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    </div>
    <div class="description flex justify-start items-start gap-5 mt-2">
  <div class="flex flex-col">
    <h2 class="font-bold">Height</h2>
    <p>6 ,8 & 10 inches only</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Variant</h2>
    <p>EuroTop</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Warranty</h2>
    <p>10 years for 8 & 10 inches</p>
    <p>7 years for 6 inches</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐⭐</p>
  </div>
</div>

  `,
  },
  memofy: {
    images: [ OrthomedBanner,Memofy1,Memofy2,Memofy3, MemofySpeci,], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Orthopedic aloe vera memory</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>6 & 8 inches only</p>
    </div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>P/T(PillowTop)</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  oxford: {
    images: [
      oxford1, oxford2, oxford6, 
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Oxford</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "the-hotel": {
    images: [
      Hotel1,
      Hotel2,
      Hotel3,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">The Hotel</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "love-land-pillow-top": {
    images: [
      Loveland1,
      Loveland2,
      Loveland6,
      
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Loveland Pillow top</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "romantic-euroton": {
    images: [RomanticBanner,Romanticfirm1, Romanticfirm2, Romanticfirm6], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Romantic Euroton</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "ortho-bonnell-aloe-vera-with-latex": {
    images: [AloeveraBanner,AloveraBonnel1, AloveraBonnel2, AloveraBonnel3,], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Orthobonnell aloe vera latex</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    </div>
    <div class="description flex justify-start items-start gap-5 mt-2">
  <div class="flex flex-col">
    <h2 class="font-bold">Height</h2>
    <p>6 ,8 & 10 inches only</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Variant</h2>
    <p>EuroTop</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Warranty</h2>
    <p>10 years for 8 & 10 inches</p>
    <p>7 years for 6 inches</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐⭐</p>
  </div>
</div>

  `,
  },
  "ortho-bonnell-aloe-vera-with-memory": {
    images: [
      AloeveraBanner,
      OrthopedicAloeveraMemory1,
      OrthopedicAloeveraMemory2,
      OrthopedicAloeveraMemory6,
      
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Orthobonnell aloe vera memory</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    </div>
    <div class="description flex justify-start items-start gap-5 mt-2">
  <div class="flex flex-col">
    <h2 class="font-bold">Height</h2>
    <p>6 ,8 & 10 inches only</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Variant</h2>
    <p>EuroTop</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Warranty</h2>
    <p>10 years for 8 & 10 inches</p>
    <p>7 years for 6 inches</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐⭐</p>
  </div>
</div>

  `,
  },
  "pocketed-spring-inspiration": {
    images: [
      InsperationalPocketed1,
      InsperationalPocketed2,
      InsperationalPocketed6,
      
      
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Pocketed spring inspiration</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "pocketed-spring-6inch-eternity-euroton": {
    images: [EternityEuroton1,EternityEuroton2,
      EternityEuroton3,
     ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">pocketed spring 6 inch eternity euroton</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "pocketed-spring-aloe-vera-with-latex": {
    images: [AloeveraBanner,AloveraBonnel1, AloveraBonnel2, AloveraBonnel3, ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Pocketed Spring aloe vera with latex</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    </div>
    <div class="description flex justify-start items-start gap-5 mt-2">
  <div class="flex flex-col">
    <h2 class="font-bold">Height</h2>
    <p>6 ,8 & 10 inches only</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Variant</h2>
    <p>EuroTop</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Warranty</h2>
    <p>10 years for 8 & 10 inches</p>
    <p>7 years for 6 inches</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐⭐</p>
  </div>
</div>

  `,
  },
  "pocketed-spring-aloe-vera-with-memory": {
    images: [
      AloeveraBanner,
      OrthopedicAloeveraMemory1,
      OrthopedicAloeveraMemory2,
      OrthopedicAloeveraMemory6,
      
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Pocketed spring aloe vera with memory</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    </div>
    <div class="description flex justify-start items-start gap-5 mt-2">
  <div class="flex flex-col">
    <h2 class="font-bold">Height</h2>
    <p>6 ,8 & 10 inches only</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Variant</h2>
    <p>EuroTop</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Warranty</h2>
    <p>10 years for 8 & 10 inches</p>
    <p>7 years for 6 inches</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐⭐</p>
  </div>
</div>

  `,
  },
  "hr-pu-gravity": {
    images: [ SixinchPUFOAM1,SixinchPUFOAM2,SixinchPUFOAM5,], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">HR PU gravity</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "hr-pu-space": {
    images: [SixinchPUFOAM1,SixinchPUFOAM2,SixinchPUFOAM5,], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">HR PU space</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "hr-pu-plush": {
    images: [SixinchPUFOAM1,SixinchPUFOAM2,SixinchPUFOAM5,], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">HR PU Plush</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "hr-pu-techniko": {
    images: [SixinchPUFOAM1,SixinchPUFOAM2,SixinchPUFOAM5,], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">HR PU Techniko</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },

  // ACCESSORIES
  // COMFORTERS

  "protector": {
    images: [
      BaffelBox,
      SewnThrough,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Protector</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "sewn-through": {
    images: [
      SewnThrough,
      StandardPillow,
      MemoryfoamPillow1,
      MemoryfoamPillow2,
      MemoryfoamPillow3,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Sewn Through</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },

  // pillows
  "memory-pillow": {
    images: [
      MemoryfoamPillow1,
      MemoryfoamPillow2,
      MemoryfoamPillow3,
      MemoryfoamPillow4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Memory Pillow</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  latexpillow: {
    images: [LatexPillow1, LatexPillow2, LatexPillow3, LatexPillow4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Latex Pillow</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "foam-pillow": {
    images: [
      Foampillow11,
      Foampillow2,
      Foampillow3,
      Foampillow4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Foam Pillow</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "poly-fibre-pillow": {
    images: [
      AloveraPolyfiberPillow1,
      AloveraPolyfiberPillow2,
      AloveraPolyfiberPillow3,
      Foampillow4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Poly Fibre Pillow</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
  "polyfibre-textile": {
    images: [
      AloveraPolyfiberPillow1,
      AloveraPolyfiberPillow2,
      AloveraPolyfiberPillow3,
      AloveraPolyfiberPillow4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Poly fibre textile</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a medium to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Breathability</h2>
    Orthomed mattresses are designed with breathable materials to ensure good air circulation, keeping the mattress cool and comfortable throughout the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>5 & 6 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>5 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
    </div>
  `,
  },
};

const ProductDetails = () => {
  const { productType } = useParams(); // Get the productType from URL
  const formattedProductType = productType.toLowerCase(); // Ensure the keys in productData are lower case and hyphenated
  const productInfo = productData[formattedProductType]; // Fetch the product info based on the URL param

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

  // Handle navigation for the carousel
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productInfo.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productInfo.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle main image change when a thumbnail is clicked or hovered
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  // WhatsApp enquiry function
  const handleEnquiryClick = () => {
    const whatsappNumber = "9346023775"; // Replace with your WhatsApp number
    const currentUrl = window.location.href; // Get the current URL
    const productImage = `${window.location.origin}/${productInfo.images[currentImageIndex]}`; // Get the full image URL
    // const message = `Check out this product:\n${currentUrl}\n\nImage:\n${productImage}`; // to get both url and image link
    const message = `Check out this product:\n${currentUrl}`; // just to send the url
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank"); // Open the WhatsApp URL in a new tab
  };

  return (
    <>
      <Link
        to="/products"
        className="back cursor-pointer absolute rounded-md
         bg-red-300 text-black xl:text-[13px] xl:top-[160px] xl:left-[30px] xl:py-[2px] xl:pr-[22px] xl:pl-[25px] xl:px-0 xl:ml-0 xl:mt-0
          sm:text-lg sm:px-4 sm:ml-8 sm:mt-4 sm:p-[12px]"
      >
        BACK
      </Link>
      <div className="product-details-container sm:mt-[72px] sm:w-[100%] p-6 flex gap-8 relative xl:mt-10 flex-col sm:flex-col xl:flex-row">
        {/* Main image and carousel controls */}
        <div className="flex-1">
          {productInfo.images.length > 0 ? (
            <>
              <div className="main-image relative mb-4 xl:w-[100%] xl:h-[380px] sm:ml-[12px] sm:w-[143%]">
                <img
                  src={productInfo.images[currentImageIndex]}
                  alt="Main product"
                  className=" sm:w-[540px] sm:h-[412px] xl:w-[645px] xl:h-[378px] rounded-xl border-2 border-slate-300 bg-slate-400"
                />
                {/* Carousel navigation buttons */}
                <button
                  onClick={handlePrevClick}
                  className="absolute top-1/2 left-0 xl:block sm:hidden transform -translate-y-1/2 text-black text-7xl p-2 rounded-full h-20"
                >
                  <div className="-mt-5"> &#8249;</div>
                </button>
                <button
                  onClick={handleNextClick}
                  className="absolute top-1/2 left-[550px] xl:block sm:hidden transform -translate-y-1/2 text-black text-7xl p-2 rounded-full h-20"
                >
                  <div className="-mt-5"> &#8250;</div>
                </button>
              </div>
              <div className="thumbnail flex justify-start gap-2">
                {productInfo.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className={`cursor-pointer sm:w-[70px] sm:h-[100px] sm:ml-[13px] xl:w-[80px]  xl:h-[80px] xl:ml-5  rounded-xl ${
                      index === currentImageIndex
                        ? "border-2 border-blue-500"
                        : ""
                    }`}
                    onClick={() => handleThumbnailClick(index)} // Change main image on click
                    onMouseEnter={() => handleThumbnailClick(index)} // Change main image on hover
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-xl text-gray-500">Coming Soon</p>
            </div>
          )}
        </div>

        {/* Product description */}
        <div className="flex-1 ">
          <h2 className="text-2xl font-bold mb-2">Product Description</h2>
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: productInfo.description }} // Use dangerouslySetInnerHTML here
          />

          {/* Enquiry Now Button */}
          <button
            onClick={handleEnquiryClick}
            className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Enquiry Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
