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
    images: [chesterfield1, chesterfield2, chesterfield3, chesterfield4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Chesterfield Sofa: Timeless Elegance Meets Modern Comfort</div>
    <h2 class=" font-bold">Luxury and Craftsmanship</h2>
    The Sleep Fine Chesterfield Sofa brings an air of sophistication and classic charm to your living space. Renowned for its deep button-tufted backrest, rolled arms, and premium upholstery, this timeless piece of furniture is a perfect blend of traditional design and contemporary comfort. Whether placed in a formal living room or a cozy den, the Chesterfield sofa enhances any interior with its luxurious style.<br><br>
    <h2 class="font-bold">Solid Wood Frame for Durability</h2>
    Built with a solid wood frame, this Chesterfield sofa is designed for durability and longevity. The sturdy construction ensures that your sofa can withstand everyday use while retaining its structural integrity and luxurious look. The robust frame also contributes to the sofa's ability to support multiple people comfortably.<br><br>
    <h2 class="font-bold">Versatile Design for Any Space</h2>
    With its versatile design, the Sleep Fine Chesterfield Sofa fits seamlessly into both modern and traditional interiors. Its classic silhouette and elegant proportions make it an ideal centerpiece for living rooms, studies, or even office spaces. The sofa's timeless style allows it to adapt to evolving design trends, ensuring it remains a cherished part of your home for years to come.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },
  lawson: {
    images: [Lawson1, Lawson2, Lawson3, Lawson4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Lawson Sofa: Modern Simplicity Meets Comfort</div>
    <h2 class=" font-bold">Effortless Style and Versatility</h2>
    The Sleep Fine Lawson Sofa is the epitome of modern simplicity, offering clean lines and a versatile design that complements a wide range of interior styles. Whether your home décor leans contemporary, transitional, or even mid-century modern, the Lawson sofa's understated elegance makes it a perfect fit for any living room, family room, or lounge area.<br><br>
    <h2 class="font-bold">Premium Upholstery Choices</h2>
    The Sleep Fine Lawson Sofa comes in a range of high-quality upholstery options, from luxurious fabrics to durable leathers. Available in a variety of neutral and bold color options, the sofa can be customized to match your home’s color palette and style preferences. The upholstery is not only soft to the touch but also easy to clean and maintain, ensuring your sofa looks great for years to come.<br><br>
    <h2 class="font-bold">Low-Maintenance and Family-Friendly</h2>
    The Sleep Fine Lawson Sofa is designed with everyday living in mind. The removable cushion covers make cleaning a breeze, while the durable upholstery is resistant to stains, wear, and tear, making it a great option for homes with children or pets.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },
  tuxedo: {
    images: [Tuxedo1, Tuxedo2, Tuxedo3, Tuxedo4], // Replace these with actual King Size Bed images
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Tuxedo Sofa: Sophisticated Elegance with a Modern Edge</div>
    <h2 class=" font-bold">Timeless Design, Elevated Aesthetics</h2>
    The Sleep Fine Tuxedo Sofa brings a touch of luxurious sophistication to your living space. Defined by its high, straight back and arms that are of equal height, the Tuxedo sofa creates a bold, structured look that is perfect for those who appreciate refined design. Its angular, clean lines exude elegance, making it a stunning centerpiece for formal living rooms, upscale lounges, or contemporary spaces.<br><br>
    <h2 class="font-bold">Tailored Comfort and Support</h2>
    While the Tuxedo Sofa is known for its sophisticated shape, it doesn’t compromise on comfort. The high arms and back envelop you, creating a sense of coziness while maintaining an upright posture that’s ideal for entertaining guests or enjoying a moment of relaxation. The sofa is generously padded with plush foam and topped with soft cushions that strike the perfect balance between firm support and inviting comfort.<br><br>
    <h2 class="font-bold">Sturdy Construction, Built to Last</h2>
    The Tuxedo Sofa is as durable as it is stylish. Featuring a solid wood frame and expertly crafted construction, this sofa is designed to provide long-lasting comfort and support. The sturdy base ensures stability, while the sleek, minimalist legs add a touch of modernity to its timeless silhouette.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },

  // SECTIONAL SOFA
  "l-shaped": {
    images: [LshapedSofa1, LshapedSofa2, LshapedSofa3, LshapedSofa4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">L-Shaped Sofa: The Perfect Blend of Comfort and Versatility</div>
    <h2 class=" font-bold">Stylish Comfort for Modern Living</h2>
    The Sleep Fine L-Shaped Sofa is designed to combine maximum comfort with sleek, contemporary style. Its spacious, versatile design makes it the ideal choice for families, entertainers, or anyone looking to elevate their living room with a stylish and functional piece of furniture. With its clean lines, plush cushioning, and modern appeal, the L-shaped sofa is perfect for both lounging and hosting guests in a relaxed setting.<br><br>
    <h2 class="font-bold">Space-Saving Versatility</h2>
    One of the greatest advantages of the L-Shaped Sofa is its ability to make the most of your space. Whether placed in a corner to optimize floor area or positioned centrally to define an open-concept living space, this sofa offers flexible seating options. It creates an inviting atmosphere, with enough room for everyone to relax. Available in left- or right-hand configurations, this sofa adapts to your room layout seamlessly.<br><br>
    <h2 class="font-bold">Superior Comfort and Support</h2>
    The Sleep Fine L-Shaped Sofa is built with ultimate comfort in mind. Its generously padded seat cushions are designed to provide lasting support, ensuring you feel comfortable even during extended periods of lounging. The plush backrests and wide armrests enhance the coziness of the sofa, creating a warm and inviting spot for movie nights, reading, or relaxing with family.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },
  "u-shaped": {
    images: [UshapedSofa1, UshapedSofa2, UshapedSofa3, UshapedSofa4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">U-Shaped Sofa: The Ultimate Statement of Comfort and Luxury</div>
    <h2 class=" font-bold">Luxurious Design for Larger Living Spaces</h2>
    The Sleep Fine U-Shaped Sofa is a grand statement of comfort and style, designed to make a bold impact in spacious living areas. With its expansive seating arrangement, this sofa is perfect for larger families, entertainers, and anyone looking for a versatile piece that can comfortably seat multiple people. Its U-shaped design brings everyone together, creating a cozy environment for socializing, lounging, or simply stretching out after a long day.<br><br>
    <h2 class="font-bold">Ideal for Entertainers and Large Families</h2>
    The Sleep Fine U-Shaped Sofa is perfect for hosting gatherings, whether you’re having a movie night, a party, or a family get-together. Its U-shaped layout encourages conversation and interaction, making it a central hub for social activities. The extended seating allows guests to sit comfortably, and its spacious design ensures that no one is left out.<br><br>
    <h2 class="font-bold">Durability and Strength You Can Count On</h2>
    Built with a robust frame and durable legs, the Sleep Fine U-Shaped Sofa is designed to last. Its solid wood structure provides exceptional support, while the high-quality foam cushions are resilient and bounce back to their original shape even after long periods of use. This sofa is made to handle everyday wear and tear without compromising on comfort or stability, ensuring long-lasting satisfaction.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },
  modular: {
    images: [ModularSofa1, ModularSofa2, ModularSofa3, ModularSofa4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Modular Sofa: Adaptable Comfort and Customizable Design</div>
    <h2 class=" font-bold">Flexibility Meets Style</h2>
    The Sleep Fine Modular Sofa offers unmatched versatility, allowing you to create a seating arrangement that perfectly fits your living space and lifestyle. Whether you have a compact apartment or a large living room, this sofa can be easily reconfigured to suit your needs. Its modular design means each section can stand alone or be combined in various ways, giving you the freedom to adjust the sofa’s shape and size to fit any occasion.<br><br>
    <h2 class="font-bold">Effortless Comfort for Every Lifestyle</h2>
    Designed with your comfort in mind, the Sleep Fine Modular Sofa features plush cushions and supportive backrests, making it ideal for lounging, reading, or entertaining guests. The high-density foam padding provides just the right balance of softness and firmness, ensuring that every seat feels inviting. Plus, you can easily move and reconfigure each section to create more space or a cozier, intimate seating arrangement.<br><br>
    <h2 class="font-bold">Perfect for Entertaining</h2>
    Thanks to its modular design, this sofa is ideal for hosting friends and family. Rearrange the sections to create a larger seating area for parties, or transform it into a cozy corner for more intimate gatherings. The flexibility of the Modular Sofa makes it a versatile piece for any occasion, whether you’re entertaining guests or enjoying a quiet evening at home.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
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
    <div class="text-xl font-semibold my-[6px]"> L-Shaped Sofa Cum Bed: Space-Saving Comfort and Versatility</div>
    <h2 class=" font-bold">Multi-Functional Design for Modern Living</h2>
    The Sleep Fine L-Shaped Sofa Cum Bed is the ultimate solution for those who need a blend of style, comfort, and functionality. This cleverly designed piece of furniture serves as both a luxurious seating arrangement and a spacious bed, making it perfect for compact apartments, guest rooms, or any living space that requires flexible usage. The L-shape not only maximizes seating capacity but also transforms effortlessly into a bed, offering you comfort day and night.<br><br>
    <h2 class="font-bold">Perfect for Hosting Guests</h2>
    The L-Shaped Sofa Cum Bed is ideal for homes that frequently host overnight guests. It allows you to quickly provide a spacious sleeping area without the need for a separate guest bed. The easy conversion from sofa to bed and back again ensures that your living room remains functional and stylish while still being ready to accommodate visitors.<br><br>
    <h2 class="font-bold">Storage and Convenience</h2>
    Many models come with a hidden storage compartment, allowing you to store extra pillows, blankets, or linens conveniently out of sight. This added feature makes the sofa cum bed even more practical for small spaces, helping you keep your living area clutter-free while being prepared for unexpected guests.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },

  "u-shaped-sofa-cumbed": {
    images: [
      ushapedsofacumbed1,
      ushapedsofacumbed2,
      ushapedsofacumbed3,
      ushapedsofacumbed4,
    ], // Replace these with actual Queen Size Bed images
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]"> U-Shaped Sofa Cum Bed: Space-Saving Comfort and Versatility</div>
    <h2 class=" font-bold">Multi-Functional Design for Modern Living</h2>
    The Sleep Fine L-Shaped Sofa Cum Bed is the ultimate solution for those who need a blend of style, comfort, and functionality. This cleverly designed piece of furniture serves as both a luxurious seating arrangement and a spacious bed, making it perfect for compact apartments, guest rooms, or any living space that requires flexible usage. The L-shape not only maximizes seating capacity but also transforms effortlessly into a bed, offering you comfort day and night.<br><br>
    <h2 class="font-bold">Perfect for Hosting Guests</h2>
    The L-Shaped Sofa Cum Bed is ideal for homes that frequently host overnight guests. It allows you to quickly provide a spacious sleeping area without the need for a separate guest bed. The easy conversion from sofa to bed and back again ensures that your living room remains functional and stylish while still being ready to accommodate visitors.<br><br>
    <h2 class="font-bold">Storage and Convenience</h2>
    Many models come with a hidden storage compartment, allowing you to store extra pillows, blankets, or linens conveniently out of sight. This added feature makes the sofa cum bed even more practical for small spaces, helping you keep your living area clutter-free while being prepared for unexpected guests.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },

  // BEDS
  // DENVER-MODEL-BEDS
  "denver-with-storage": {
    images: [DenverModel1, DenverModel2, DenverModel3, DenverModel4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]"> Denver with storage: Space-Saving Comfort and Versatility</div>
    <h2 class=" font-bold">Multi-Functional Design for Modern Living</h2>
    The Sleep Fine L-Shaped Sofa Cum Bed is the ultimate solution for those who need a blend of style, comfort, and functionality. This cleverly designed piece of furniture serves as both a luxurious seating arrangement and a spacious bed, making it perfect for compact apartments, guest rooms, or any living space that requires flexible usage. The L-shape not only maximizes seating capacity but also transforms effortlessly into a bed, offering you comfort day and night.<br><br>
    <h2 class="font-bold">Perfect for Hosting Guests</h2>
    The L-Shaped Sofa Cum Bed is ideal for homes that frequently host overnight guests. It allows you to quickly provide a spacious sleeping area without the need for a separate guest bed. The easy conversion from sofa to bed and back again ensures that your living room remains functional and stylish while still being ready to accommodate visitors.<br><br>
    <h2 class="font-bold">Storage and Convenience</h2>
    Many models come with a hidden storage compartment, allowing you to store extra pillows, blankets, or linens conveniently out of sight. This added feature makes the sofa cum bed even more practical for small spaces, helping you keep your living area clutter-free while being prepared for unexpected guests.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },
  "denver-without-storage": {
    images: [DenverModel1, DenverModel2, DenverModel3, DenverModel4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Denver Sofa: Adaptable Comfort and Customizable Design</div>
    <h2 class=" font-bold">Flexibility Meets Style</h2>
    The Sleep Fine Modular Sofa offers unmatched versatility, allowing you to create a seating arrangement that perfectly fits your living space and lifestyle. Whether you have a compact apartment or a large living room, this sofa can be easily reconfigured to suit your needs. Its modular design means each section can stand alone or be combined in various ways, giving you the freedom to adjust the sofa’s shape and size to fit any occasion.<br><br>
    <h2 class="font-bold">Effortless Comfort for Every Lifestyle</h2>
    Designed with your comfort in mind, the Sleep Fine Modular Sofa features plush cushions and supportive backrests, making it ideal for lounging, reading, or entertaining guests. The high-density foam padding provides just the right balance of softness and firmness, ensuring that every seat feels inviting. Plus, you can easily move and reconfigure each section to create more space or a cozier, intimate seating arrangement.<br><br>
    <h2 class="font-bold">Perfect for Entertaining</h2>
    Thanks to its modular design, this sofa is ideal for hosting friends and family. Rearrange the sections to create a larger seating area for parties, or transform it into a cozy corner for more intimate gatherings. The flexibility of the Modular Sofa makes it a versatile piece for any occasion, whether you’re entertaining guests or enjoying a quiet evening at home.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },
  // DIAMOND MODEL BED
  "diamond-with-storage": {
    images: [DiamondModel1, DiamondModel2, DiamondModel3, DiamondModel4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]"> Diamond with storage: Space-Saving Comfort and Versatility</div>
    <h2 class=" font-bold">Multi-Functional Design for Modern Living</h2>
    The Sleep Fine L-Shaped Sofa Cum Bed is the ultimate solution for those who need a blend of style, comfort, and functionality. This cleverly designed piece of furniture serves as both a luxurious seating arrangement and a spacious bed, making it perfect for compact apartments, guest rooms, or any living space that requires flexible usage. The L-shape not only maximizes seating capacity but also transforms effortlessly into a bed, offering you comfort day and night.<br><br>
    <h2 class="font-bold">Perfect for Hosting Guests</h2>
    The L-Shaped Sofa Cum Bed is ideal for homes that frequently host overnight guests. It allows you to quickly provide a spacious sleeping area without the need for a separate guest bed. The easy conversion from sofa to bed and back again ensures that your living room remains functional and stylish while still being ready to accommodate visitors.<br><br>
    <h2 class="font-bold">Storage and Convenience</h2>
    Many models come with a hidden storage compartment, allowing you to store extra pillows, blankets, or linens conveniently out of sight. This added feature makes the sofa cum bed even more practical for small spaces, helping you keep your living area clutter-free while being prepared for unexpected guests.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },
  "diamond-without-storage": {
    images: [DiamondModel1, DiamondModel2, DiamondModel3, DiamondModel4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Diamond Sofa: Adaptable Comfort and Customizable Design</div>
    <h2 class=" font-bold">Flexibility Meets Style</h2>
    The Sleep Fine Modular Sofa offers unmatched versatility, allowing you to create a seating arrangement that perfectly fits your living space and lifestyle. Whether you have a compact apartment or a large living room, this sofa can be easily reconfigured to suit your needs. Its modular design means each section can stand alone or be combined in various ways, giving you the freedom to adjust the sofa’s shape and size to fit any occasion.<br><br>
    <h2 class="font-bold">Effortless Comfort for Every Lifestyle</h2>
    Designed with your comfort in mind, the Sleep Fine Modular Sofa features plush cushions and supportive backrests, making it ideal for lounging, reading, or entertaining guests. The high-density foam padding provides just the right balance of softness and firmness, ensuring that every seat feels inviting. Plus, you can easily move and reconfigure each section to create more space or a cozier, intimate seating arrangement.<br><br>
    <h2 class="font-bold">Perfect for Entertaining</h2>
    Thanks to its modular design, this sofa is ideal for hosting friends and family. Rearrange the sections to create a larger seating area for parties, or transform it into a cozy corner for more intimate gatherings. The flexibility of the Modular Sofa makes it a versatile piece for any occasion, whether you’re entertaining guests or enjoying a quiet evening at home.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },
  // PK MODEL BEDS
  "pkmodel-with-storage": {
    images: [PKModel1, PKModel2, PKModel3, PKModel4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]"> PK Model with storage: Space-Saving Comfort and Versatility</div>
    <h2 class=" font-bold">Multi-Functional Design for Modern Living</h2>
    The Sleep Fine L-Shaped Sofa Cum Bed is the ultimate solution for those who need a blend of style, comfort, and functionality. This cleverly designed piece of furniture serves as both a luxurious seating arrangement and a spacious bed, making it perfect for compact apartments, guest rooms, or any living space that requires flexible usage. The L-shape not only maximizes seating capacity but also transforms effortlessly into a bed, offering you comfort day and night.<br><br>
    <h2 class="font-bold">Perfect for Hosting Guests</h2>
    The L-Shaped Sofa Cum Bed is ideal for homes that frequently host overnight guests. It allows you to quickly provide a spacious sleeping area without the need for a separate guest bed. The easy conversion from sofa to bed and back again ensures that your living room remains functional and stylish while still being ready to accommodate visitors.<br><br>
    <h2 class="font-bold">Storage and Convenience</h2>
    Many models come with a hidden storage compartment, allowing you to store extra pillows, blankets, or linens conveniently out of sight. This added feature makes the sofa cum bed even more practical for small spaces, helping you keep your living area clutter-free while being prepared for unexpected guests.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },
  "pkmodel-without-storage": {
    images: [PKModel1, PKModel2, PKModel3, PKModel4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">PK Model Sofa: Adaptable Comfort and Customizable Design</div>
    <h2 class=" font-bold">Flexibility Meets Style</h2>
    The Sleep Fine Modular Sofa offers unmatched versatility, allowing you to create a seating arrangement that perfectly fits your living space and lifestyle. Whether you have a compact apartment or a large living room, this sofa can be easily reconfigured to suit your needs. Its modular design means each section can stand alone or be combined in various ways, giving you the freedom to adjust the sofa’s shape and size to fit any occasion.<br><br>
    <h2 class="font-bold">Effortless Comfort for Every Lifestyle</h2>
    Designed with your comfort in mind, the Sleep Fine Modular Sofa features plush cushions and supportive backrests, making it ideal for lounging, reading, or entertaining guests. The high-density foam padding provides just the right balance of softness and firmness, ensuring that every seat feels inviting. Plus, you can easily move and reconfigure each section to create more space or a cozier, intimate seating arrangement.<br><br>
    <h2 class="font-bold">Perfect for Entertaining</h2>
    Thanks to its modular design, this sofa is ideal for hosting friends and family. Rearrange the sections to create a larger seating area for parties, or transform it into a cozy corner for more intimate gatherings. The flexibility of the Modular Sofa makes it a versatile piece for any occasion, whether you’re entertaining guests or enjoying a quiet evening at home.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
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
    <div class="text-xl font-semibold my-[6px]"> Double bed with storage: Space-Saving Comfort and Versatility</div>
    <h2 class=" font-bold">Multi-Functional Design for Modern Living</h2>
    The Sleep Fine L-Shaped Sofa Cum Bed is the ultimate solution for those who need a blend of style, comfort, and functionality. This cleverly designed piece of furniture serves as both a luxurious seating arrangement and a spacious bed, making it perfect for compact apartments, guest rooms, or any living space that requires flexible usage. The L-shape not only maximizes seating capacity but also transforms effortlessly into a bed, offering you comfort day and night.<br><br>
    <h2 class="font-bold">Perfect for Hosting Guests</h2>
    The L-Shaped Sofa Cum Bed is ideal for homes that frequently host overnight guests. It allows you to quickly provide a spacious sleeping area without the need for a separate guest bed. The easy conversion from sofa to bed and back again ensures that your living room remains functional and stylish while still being ready to accommodate visitors.<br><br>
    <h2 class="font-bold">Storage and Convenience</h2>
    Many models come with a hidden storage compartment, allowing you to store extra pillows, blankets, or linens conveniently out of sight. This added feature makes the sofa cum bed even more practical for small spaces, helping you keep your living area clutter-free while being prepared for unexpected guests.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
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
    <div class="text-xl font-semibold my-[6px]">Double bed: Adaptable Comfort and Customizable Design</div>
    <h2 class=" font-bold">Flexibility Meets Style</h2>
    The Sleep Fine Modular Sofa offers unmatched versatility, allowing you to create a seating arrangement that perfectly fits your living space and lifestyle. Whether you have a compact apartment or a large living room, this sofa can be easily reconfigured to suit your needs. Its modular design means each section can stand alone or be combined in various ways, giving you the freedom to adjust the sofa’s shape and size to fit any occasion.<br><br>
    <h2 class="font-bold">Effortless Comfort for Every Lifestyle</h2>
    Designed with your comfort in mind, the Sleep Fine Modular Sofa features plush cushions and supportive backrests, making it ideal for lounging, reading, or entertaining guests. The high-density foam padding provides just the right balance of softness and firmness, ensuring that every seat feels inviting. Plus, you can easily move and reconfigure each section to create more space or a cozier, intimate seating arrangement.<br><br>
    <h2 class="font-bold">Perfect for Entertaining</h2>
    Thanks to its modular design, this sofa is ideal for hosting friends and family. Rearrange the sections to create a larger seating area for parties, or transform it into a cozy corner for more intimate gatherings. The flexibility of the Modular Sofa makes it a versatile piece for any occasion, whether you’re entertaining guests or enjoying a quiet evening at home.<br><br>
    <h2 class="font-bold">Customization available as per requirement</h2>
    </div>
  `,
  },

  // MATTRESSES
  // ORTHOPEDIC
  orthomed: {
    images: [OrthomedBanner, ORTRHOMED1, ORTRHOMED2, ORTRHOMED6, Orthospeci],
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
    images: [OrthomedBanner, Milange1, Milange2, Milange6, MilangeSpeci], // Assuming images are not uploaded yet
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
    images: [
      OrthomedBanner,
      Preference1,
      Preference2,
      Preference6,
      PreferenceBanner,
    ], // Assuming images are not uploaded yet
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
    images: [
      BuckinghumBanner,
      Buckingham1,
      Buckingham2,
      Buckingham5,
      BuckinghumSpeci,
    ], // Assuming images are not uploaded yet
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
    images: [
      AloeveraBanner,
      AloveraBonnel1,
      AloveraBonnel2,
      AloveraBonnel3,
      OrthopedicAloeveraLatexSpeci,
    ], // Assuming images are not uploaded yet
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
    images: [OrthomedBanner, Memofy1, Memofy2, Memofy3, MemofySpeci], // Assuming images are not uploaded yet
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

  // ORTHO BONNELL

  oxford: {
    images: [oxford1, oxford2, oxford6], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Ortho Bonnell Spring Oxford</div>
    The Sleep Fine Ortho Bonnell Spring Oxford mattress is designed for those who seek a perfect balance between firm orthopedic support and traditional spring comfort. Crafted with high-quality Bonnell springs, this mattress provides a stable and durable foundation, ensuring a restful and rejuvenating sleep experience. The interconnected coil system evenly distributes body weight, offering consistent support throughout the night, which helps maintain proper spinal alignment and reduces pressure points.<br><br>
    <h2 class="font-bold">Firm Orthopedic Support</h2>
    This mattress features a firm Bonnell spring core that offers excellent orthopedic benefits, promoting healthy posture and reducing discomfort caused by poor sleep alignment. The open-coil design ensures that air flows freely through the mattress, keeping the surface cool and fresh for a comfortable night’s rest.<br><br>
    <h2 class="font-bold">Enhanced Comfort Layer</h2>
    The Ortho Bonnell Spring Oxford comes with a plush comfort layer on top of the springs, providing just the right amount of cushioning for a soothing sleeping experience. This combination of firm support and soft comfort makes it ideal for those who prefer a structured yet comfortable sleeping surface.<br><br>
    <h2 class="font-bold">Durable and Long-Lasting</h2>
    Built to last, the Bonnell springs are engineered to maintain their shape and performance over time. The sturdy construction ensures that the mattress retains its firmness and does not sag, even after years of use. Its durability makes it a great long-term investment for anyone seeking consistent orthopedic support.
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
    images: [Hotel1, Hotel2, Hotel3], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">The Hotels: The Perfect Blend of Comfort and Durability</div>
    Designed specifically for hospitality use, the Sleep Fine Bonnell Spring Mattress offers the ideal combination of comfort, support, and durability, making it perfect for hotel environments. This mattress is engineered with high-quality Bonnell springs, providing consistent support and lasting comfort for guests, ensuring they wake up feeling refreshed and rejuvenated.<br><br>
    <h2 class="font-bold">Superior Support for All Sleepers</h2>
    The interconnected Bonnell spring system evenly distributes body weight, ensuring optimal spinal alignment and reducing pressure points. This makes it an excellent choice for a wide range of guests, offering both firm support and cushioned comfort. Its ability to adapt to different body types and sleeping positions makes it the go-to mattress for hotels that want to provide top-tier comfort for every guest.<br><br>
    <h2 class="font-bold">Built for Durability</h2>
    Hotels require mattresses that can withstand frequent use without losing their shape or support. The Bonnell Spring Mattress is crafted to be highly durable, maintaining its structural integrity over time. The robust spring system is designed to resist sagging, ensuring the mattress retains its form and provides long-lasting comfort, even in high-traffic settings.<br><br>
    <h2 class="font-bold">Exceptional Comfort and Breathability</h2>
    This mattress combines firm support with a plush comfort layer, offering a balanced sleeping experience that caters to different preferences. The open-coil structure also promotes airflow, keeping the mattress cool and fresh, an important feature in a hospitality setting where comfort and hygiene are key.
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
    images: [Loveland1, Loveland2, Loveland6], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Ortho Bonnell LoveLand Pillow Top</div>
    The Sleep Fine Ortho Bonnell Spring LoveLand Pillow Top mattress is designed for those who seek a perfect balance between firm orthopedic support and traditional spring comfort. Crafted with high-quality Bonnell springs, this mattress provides a stable and durable foundation, ensuring a restful and rejuvenating sleep experience. The interconnected coil system evenly distributes body weight, offering consistent support throughout the night, which helps maintain proper spinal alignment and reduces pressure points.<br><br>
    <h2 class="font-bold">Firm Orthopedic Support</h2>
    This mattress features a firm Bonnell spring core that offers excellent orthopedic benefits, promoting healthy posture and reducing discomfort caused by poor sleep alignment. The open-coil design ensures that air flows freely through the mattress, keeping the surface cool and fresh for a comfortable night’s rest.<br><br>
    <h2 class="font-bold">Enhanced Comfort Layer</h2>
    The Ortho Bonnell Spring LoveLand Pillow Top comes with a plush comfort layer on top of the springs, providing just the right amount of cushioning for a soothing sleeping experience. This combination of firm support and soft comfort makes it ideal for those who prefer a structured yet comfortable sleeping surface.<br><br>
    <h2 class="font-bold">Durable and Long-Lasting</h2>
    Built to last, the Bonnell springs are engineered to maintain their shape and performance over time. The sturdy construction ensures that the mattress retains its firmness and does not sag, even after years of use. Its durability makes it a great long-term investment for anyone seeking consistent orthopedic support.
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
    images: [RomanticBanner, Romanticfirm1, Romanticfirm2, Romanticfirm6], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Ortho Bonnell Spring Romantic Euroton</div>
    The Sleep Fine Ortho Bonnell Spring Romantic Euroton mattress is designed for those who seek a perfect balance between firm orthopedic support and traditional spring comfort. Crafted with high-quality Bonnell springs, this mattress provides a stable and durable foundation, ensuring a restful and rejuvenating sleep experience. The interconnected coil system evenly distributes body weight, offering consistent support throughout the night, which helps maintain proper spinal alignment and reduces pressure points.<br><br>
    <h2 class="font-bold">Firm Orthopedic Support</h2>
    This mattress features a firm Bonnell spring core that offers excellent orthopedic benefits, promoting healthy posture and reducing discomfort caused by poor sleep alignment. The open-coil design ensures that air flows freely through the mattress, keeping the surface cool and fresh for a comfortable night’s rest.<br><br>
    <h2 class="font-bold">Enhanced Comfort Layer</h2>
    The Ortho Bonnell Spring Romantic Euroton comes with a plush comfort layer on top of the springs, providing just the right amount of cushioning for a soothing sleeping experience. This combination of firm support and soft comfort makes it ideal for those who prefer a structured yet comfortable sleeping surface.<br><br>
    <h2 class="font-bold">Durable and Long-Lasting</h2>
    Built to last, the Bonnell springs are engineered to maintain their shape and performance over time. The sturdy construction ensures that the mattress retains its firmness and does not sag, even after years of use. Its durability makes it a great long-term investment for anyone seeking consistent orthopedic support.
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
    images: [AloeveraBanner, AloveraBonnel1, AloveraBonnel2, AloveraBonnel3], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Ortho Bonnell Spring Aloe Vera with Latex</div>
    The Sleep Fine Ortho Bonnell Spring Aloe Vera with Latex mattress is designed for those who seek a perfect balance between firm orthopedic support and traditional spring comfort. Crafted with high-quality Bonnell springs, this mattress provides a stable and durable foundation, ensuring a restful and rejuvenating sleep experience. The interconnected coil system evenly distributes body weight, offering consistent support throughout the night, which helps maintain proper spinal alignment and reduces pressure points.<br><br>
    <h2 class="font-bold">Firm Orthopedic Support</h2>
    This mattress features a firm Bonnell spring core that offers excellent orthopedic benefits, promoting healthy posture and reducing discomfort caused by poor sleep alignment. The open-coil design ensures that air flows freely through the mattress, keeping the surface cool and fresh for a comfortable night’s rest.<br><br>
    <h2 class="font-bold">Enhanced Comfort Layer</h2>
    The Ortho Bonnell Spring Aloe Vera with Latex comes with a plush comfort layer on top of the springs, providing just the right amount of cushioning for a soothing sleeping experience. This combination of firm support and soft comfort makes it ideal for those who prefer a structured yet comfortable sleeping surface.<br><br>
    <h2 class="font-bold">Durable and Long-Lasting</h2>
    Built to last, the Bonnell springs are engineered to maintain their shape and performance over time. The sturdy construction ensures that the mattress retains its firmness and does not sag, even after years of use. Its durability makes it a great long-term investment for anyone seeking consistent orthopedic support.
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
  "ortho-bonnell-aloe-vera-with-memory": {
    images: [
      AloeveraBanner,
      OrthopedicAloeveraMemory1,
      OrthopedicAloeveraMemory2,
      OrthopedicAloeveraMemory6,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Ortho Bonnell Spring Aloe Vera with Memory</div>
    The Sleep Fine Ortho Bonnell Spring Aloe Vera with Memory mattress is designed for those who seek a perfect balance between firm orthopedic support and traditional spring comfort. Crafted with high-quality Bonnell springs, this mattress provides a stable and durable foundation, ensuring a restful and rejuvenating sleep experience. The interconnected coil system evenly distributes body weight, offering consistent support throughout the night, which helps maintain proper spinal alignment and reduces pressure points.<br><br>
    <h2 class="font-bold">Firm Orthopedic Support</h2>
    This mattress features a firm Bonnell spring core that offers excellent orthopedic benefits, promoting healthy posture and reducing discomfort caused by poor sleep alignment. The open-coil design ensures that air flows freely through the mattress, keeping the surface cool and fresh for a comfortable night’s rest.<br><br>
    <h2 class="font-bold">Enhanced Comfort Layer</h2>
    The Ortho Bonnell Spring Aloe Vera with Memory comes with a plush comfort layer on top of the springs, providing just the right amount of cushioning for a soothing sleeping experience. This combination of firm support and soft comfort makes it ideal for those who prefer a structured yet comfortable sleeping surface.<br><br>
    <h2 class="font-bold">Durable and Long-Lasting</h2>
    Built to last, the Bonnell springs are engineered to maintain their shape and performance over time. The sturdy construction ensures that the mattress retains its firmness and does not sag, even after years of use. Its durability makes it a great long-term investment for anyone seeking consistent orthopedic support.
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

  // POCKETED

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
    images: [EternityEuroton1, EternityEuroton2, EternityEuroton3], // Assuming images are not uploaded yet
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
    images: [AloeveraBanner, AloveraBonnel1, AloveraBonnel2, AloveraBonnel3], // Assuming images are not uploaded yet
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

  // HR-PU FOAM

  "hr-pu-gravity": {
    images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM5], // Assuming images are not uploaded yet
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
    images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM5], // Assuming images are not uploaded yet
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
    images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM5], // Assuming images are not uploaded yet
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
    images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM5], // Assuming images are not uploaded yet
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

  protector: {
    images: [BaffelBox, SewnThrough], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Water-Proof Mattress Protector</div>
    <h2 class=" font-bold">Ultimate Protection for a Healthy Sleep Environment</h2>
    Our Sleep Fine Mattress Protector offers superior protection for your mattress while ensuring a comfortable and hygienic sleep environment. Crafted with premium, breathable fabric, this protector shields your mattress from spills, stains, dust mites, and allergens, prolonging its life and maintaining its freshness.<br><br>
    <h2 class="font-bold">Waterproof & Breathable</h2>
    The mattress protector features a soft, breathable top layer combined with a waterproof backing. The waterproof membrane effectively blocks liquids while allowing air to circulate, ensuring your mattress stays dry and cool throughout the night. No more worrying about spills or moisture seeping through!<br><br>
    <h2 class="font-bold">Hypoallergenic & Dust Mite Protection</h2>
    Ideal for those with allergies or sensitive skin, this protector creates a barrier against dust mites, allergens, and bacteria. The hypoallergenic material keeps irritants at bay, allowing you to sleep soundly in a clean and healthy environment.<br><br>
    <h2 class="font-bold">Soft & Silent Comfort</h2>
    The Sleep Fine Mattress Protector fits snugly around your mattress with deep pockets and elasticized edges, ensuring it stays securely in place. It’s machine washable, making it easy to clean and maintain, so your mattress stays protected and fresh for years to come.
    </div>
  `,
  },

  "quilted-protector": {
    images: [BaffelBox, SewnThrough], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Quilted Mattress Protector</div>
    <h2 class=" font-bold">Enhanced Comfort and Protection for a Luxurious Sleep</h2>
    The Sleep Fine Quilted Mattress Protector not only shields your mattress from everyday wear and tear but also adds an extra layer of plush comfort to your bed. With its quilted design, this protector offers both protection and luxurious padding, enhancing the comfort of your mattress while keeping it clean and fresh for years to come.<br><br>
    <h2 class="font-bold">Plush Quilted Comfort</h2>
    Our mattress protector features a soft, quilted top layer filled with premium padding to provide added cushioning, transforming your sleep experience. The quilting ensures an even distribution of comfort, making your mattress feel softer without losing the support you need for a restful night’s sleep.<br><br>
    <h2 class="font-bold">Water-Resistant and Hypoallergenic</h2>
    The Sleep Fine Quilted Mattress Protector provides reliable water resistance to guard against accidental spills and stains. Its hypoallergenic material helps keep allergens, dust mites, and bacteria at bay, promoting a healthier sleep environment for sensitive sleepers or allergy sufferers.<br><br>
    <h2 class="font-bold">Secure Fit & Durability</h2>
    With deep pockets and a stretchable skirt, this quilted mattress protector fits mattresses of various thicknesses snugly, ensuring it stays in place throughout the night. The durable stitching and high-quality fabric make it resistant to wear, providing lasting protection and comfort for your mattress.
    </div>
  `,
  },

  "fitted-protector": {
    images: [BaffelBox, SewnThrough], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Fitted Mattress Protector</div>
    <h2 class=" font-bold">Perfect Fit Protection with Lasting Comfort</h2>
    The Sleep Fine Fitted Mattress Protector is designed to provide comprehensive protection for your mattress while offering a snug, wrinkle-free fit. Its fitted sheet-style design ensures that your mattress is fully encased and protected from spills, allergens, and wear, all while maintaining the natural feel and comfort of your bedding.<br><br>
    <h2 class="font-bold">Hypoallergenic Defense</h2>
    This fitted mattress protector is crafted from hypoallergenic materials to safeguard against dust mites, allergens, and bacteria. It promotes a healthier sleeping environment, making it a perfect choice for people with allergies or sensitive skin.<br><br>
    <h2 class="font-bold">Breathable Comfort</h2>
    The Sleep Fitted Mattress Protector is engineered with breathable fabric to allow air circulation, ensuring a cool, dry, and comfortable sleeping surface. Its moisture-wicking properties help regulate temperature, preventing overheating during the night and delivering a refreshing sleep experience.<br><br>
    <h2 class="font-bold">Easy Care and Durability</h2>
    This fitted mattress protector is machine washable, making it easy to clean and maintain. Its high-quality fabric is designed for durability, ensuring it withstands frequent washing without losing its softness, shape, or protective qualities.
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
    <div class="text-xl font-semibold my-[6px]">Memory Foam Pillow</div>
    <h2 class=" font-bold">Ergonomic Comfort for a Restful Sleep</h2>
    The Sleep Fine Memory Foam Pillow is designed to provide optimal support for your head and neck, ensuring a restful night's sleep. Crafted with high-quality memory foam, this pillow molds to the natural curves of your body, delivering personalized comfort while relieving pressure points for a rejuvenating sleep experience.<br><br>
    <h2 class="font-bold">Orthopedic Benefits</h2>
    Engineered to promote healthy sleep posture, the memory foam helps reduce stress on your neck, shoulders, and spine. Its orthopedic design helps alleviate common discomforts like neck stiffness and tension headaches, allowing you to wake up feeling refreshed and energized.<br><br>
    <h2 class="font-bold">Adaptive Memory Foam Technology</h2>
    This pillow features premium-grade memory foam that adapts to your unique shape, offering customized support to cradle your head and neck. The memory foam contours to your sleeping position, helping to maintain proper spinal alignment and alleviating discomfort. Whether you're a back, side, or stomach sleeper, the Sleep fine Memory Foam Pillow adjusts to your needs for consistent, supportive rest.<br><br>
    <h2 class="font-bold">Luxurious Removable Cover</h2>
    The pillow comes with a removable and washable cover that enhances comfort and maintains hygiene. The fabric is soft and skin-friendly, allowing for easy maintenance without compromising on comfort or durability.
    </div>
  `,
  },
  latexpillow: {
    images: [LatexPillow1, LatexPillow2, LatexPillow3, LatexPillow4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Latex Pillow</div>
    <h2 class=" font-bold">Naturally Supportive Comfort for a Healthier Sleep</h2>
    The Sleep Fine Latex Pillow offers a luxurious combination of natural comfort and superior support. Crafted from 100% natural latex, this pillow provides optimal neck and head alignment while offering a resilient, spring-like feel. Known for its durability and natural breathability, the latex pillow ensures long-lasting comfort and freshness, promoting a deeper, healthier sleep.<br><br>
    <h2 class="font-bold">Natural Latex for Adaptive Support</h2>
    Made from premium natural latex, this pillow molds to the natural shape of your head and neck, delivering targeted support that helps relieve pressure points and promotes proper spinal alignment. Unlike memory foam, latex provides a responsive, springy feel, allowing you to shift positions comfortably throughout the night without compromising support.<br><br>
    <h2 class="font-bold">Durability & Long-Lasting Performance</h2>
    Latex pillows are known for their exceptional durability and bounce-back ability, maintaining their shape and performance for years. The Sleep Fine Latex Pillow will not flatten or lose its resilience over time, ensuring long-term comfort and support.
    <h2 class="font-bold">Removable, Washable Cover</h2>
    To enhance the luxurious feel, the pillow comes with a soft, removable cover. The cover is designed for breathability and is machine washable, ensuring that your pillow stays fresh and clean with minimal effort.
    </div>
  `,
  },
  "foam-pillow": {
    images: [Foampillow11, Foampillow2, Foampillow3, Foampillow4], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Foam Pillow</div>
    <h2 class=" font-bold">Enhanced Comfort & Support for a Restful Night</h2>
    The Sleep Fine Foam Pillow is designed to deliver a perfect balance of plush comfort and sturdy support, ensuring a restful night's sleep. Crafted from high-quality polyurethane (PU) foam, this pillow adapts to the contours of your head and neck, providing personalized support that helps relieve pressure points and promote proper spinal alignment.<br><br>
    <h2 class="font-bold">Adaptive PU Foam Support</h2>
    This pillow is made from premium foam that molds to your head and neck for personalized support. Unlike traditional pillows, the foam adapts to your sleep posture, offering consistent support that helps prevent neck stiffness and back pain. It gently cradles the head, ensuring a neutral spine position and reducing pressure on key areas.<br><br>
    <h2 class="font-bold">Durability & Shape Retention</h2>
    Unlike traditional pillows that lose shape over time, the Sleep Fine Foam Pillow is engineered for long-lasting durability. It retains its shape and resilience, offering consistent support for years without sagging or flattening.<br><br>
    <h2 class="font-bold">Soft, Removable Cover</h2>
    The pillow comes with a soft, removable, and machine-washable cover, designed for enhanced breathability and comfort. The cover ensures that your pillow remains fresh and clean with minimal effort.
    </div>
  `,
  },
  "poly-fibre-pillow": {
    images: [
      PolyfiberPillow1,
      AloveraPolyfiberPillow2,
      AloveraPolyfiberPillow3,
      Foampillow4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="sm:w-[140%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Poly Fibre Pillow</div>
    <h2 class=" font-bold">Soft Comfort and Support for Peaceful Sleep</h2>
    The Sleep Fine Poly Fiber Pillow offers a delightful blend of plush softness and supportive comfort, making it an ideal choice for a restful night's sleep. Crafted with premium poly fiber filling, this pillow is designed to provide excellent support while retaining its shape, ensuring a cozy sleeping experience.<br><br>
    <h2 class="font-bold">Lightweight and Breathable</h2>
    The Sleep Fine Poly Fiber Pillow is lightweight and breathable, ensuring a cool and comfortable sleep environment. Its structure allows for airflow, preventing overheating and keeping you comfortable throughout the night, no matter the season.<br><br>
    <h2 class="font-bold">Durable and Shape-Retaining</h2>
    Engineered for durability, the Sleep Fine Poly Fiber Pillow retains its shape and loft over time, providing consistent support without flattening. You can enjoy the same level of comfort and support night after night, ensuring a lasting investment in your sleep quality.<br><br>
    <h2 class="font-bold">Soft, Removable Cover</h2>
    The pillow comes with a soft, removable, and machine-washable cover for added convenience. The breathable cover enhances comfort and makes it easy to keep your pillow fresh and clean.
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
    <div class="text-xl font-semibold my-[6px]">Poly fibre textile pillow</div>
    <h2 class=" font-bold">Softness and Support for Ultimate Comfort</h2>
    The Sleep Fine Poly Fiber Textile Pillow combines plush softness with exceptional support, designed to enhance your sleeping experience. Crafted from high-quality poly fiber filling, this pillow offers a perfect balance of comfort and stability, making it an ideal choice for those who value restful sleep.<br><br>
    <h2 class="font-bold">Premium Poly Fiber Filling</h2>
    This pillow features premium poly fiber filling, which mimics the luxurious softness of down while providing excellent support for your head and neck. Its unique construction helps maintain proper spinal alignment, reducing pressure points and promoting healthier sleep posture.<br><br>
    <h2 class="font-bold">Durability and Shape Retention</h2>
    Engineered for longevity, this pillow retains its shape and loft over time, providing consistent support without flattening. You can rely on the Sleep Fine Poly Fiber Textile Pillow to deliver the same level of comfort night after night.<br><br>
    <h2 class="font-bold">Easy to Maintain</h2>
    The pillow comes with a removable cover that is machine washable, making it easy to keep your pillow fresh and clean. This feature ensures that you can maintain a hygienic sleeping environment without hassle.

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

                  className="left xl:absolute xl:text-[80px] xl:top-[122px] xl:left-[1rem] xl:translate-x-[1.375rem] sm:hidden"

                >
                   &#8249;
                </button>
                <button
                  onClick={handleNextClick}

                  className="right xl:absolute xl:text-[80px] xl:top-[122px] xl:right-[8rem] xl:translate-x-[1.375rem] sm:hidden"
                >
                  &#8250;

               

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

          <div className="mt-6 xl:ml-[-37rem] flex justify-center sm:ml-[-20rem] ">
            <button
              onClick={handleEnquiryClick}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Enquiry Now
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetails;
