import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import {
//   ORTRHOMED1,
//   ORTRHOMED2,
//   ORTRHOMED3,
//   ORTRHOMED4,
//   ORTRHOMED5,
//   ORTRHOMED6,
//   AloeveraBanner,
//   BuckinghumBanner,
//   PreferenceBanner,
//   RomanticBanner,
//   OrthopedicAloeveraLatexSpeci,
//   OrthopedicAloeveraMemorySpeci,

// orthomedbanner,
// milangebanner,
// preferencebanner,
// buckinghumbanner,
// memofybanner,
// aloeveralatexbanner,
// aloeveramemorybanner,

//   Milange1,
//   Milange2,
//   Milange3,
//   Milange4,
//   Milange5,
//   Milange6,
//   MilangeSpeci,
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
//   BuckinghumSpeci,
//   Hotel1,
//   Hotel2,
//   Hotel3,
//   OrthopedicAloeveraMemory1,
//   OrthopedicAloeveraMemory2,
//   OrthopedicAloeveraMemory3,
//   OrthopedicAloeveraMemory4,
//   OrthopedicAloeveraMemory5,
//   OrthopedicAloeveraMemory6,
//   //pufoam6
//   SixinchPUFOAM1,
//   SixinchPUFOAM2,
//   SixinchPUFOAM3,
//   SixinchPUFOAM4,
//   SixinchPUFOAM5,
//   oxford1,
//   oxford2,
//   oxford3,
//   oxford4,
//   oxford5,
//   oxford6,
//   EightinchPUFOAM1,
//   EightinchPUFOAM2,
//   EightinchPUFOAM3,
//   EightinchPUFOAM4,
//   EightinchPUFOAM5,
//   AloveraBonnel1,
//   AloveraBonnel2,
//   AloveraBonnel3,
//   AloveraBonnel4,
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
//   OrthomedBanner,
//   RoseByRosaBanner2,
//   AmbitiousSleepingBanner3,
//   RomanticBanner4,
//   Orthospeci,
//   InsperationalPocketed1,
//   InsperationalPocketed2 ,
//   InsperationalPocketed3 ,
//   InsperationalPocketed4 ,
//   InsperationalPocketed5 ,
//   InsperationalPocketed6,

//   EternityEuroton1,
//   EternityEuroton3,
//   EternityEuroton2,
//   EternityEuroton4,
//   EternityEuroton5,

//   Memofy1,
//   Memofy2,
//   Memofy3,
//   MemofySpeci,
// //------------------------------------------------------------------
//   //beds
//   //kingsize bed--------------------
//   kingsizebed1,
//   kingsizebed2,
//   kingsizebed3,
//   kingsizebed4,
//   DenverModel2,
// DenverModel3,
// DenverModel4,
// DenverModel1,

//   //queen size
//   queensizebed1,
//   queensizebed2,
//   queensizebed3,
//   queensizebed4,
//   PKModel1,
//   PKModel2,
//   PKModel3,
//   PKModel4,
//   DiamondModel1,
//   DiamondModel2,
//   DiamondModel3,
//   DiamondModel4,

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
//   Foampillow1,
//   Foampillow2,
//   Foampillow3,
//   Foampillow4,
//   AloveraPolyfiberPillow1,
//   AloveraPolyfiberPillow2,
//   AloveraPolyfiberPillow3,
//   AloveraPolyfiberPillow4,
//   PolyfiberPillow1,
//   Foampillow11,
// } from "../../assets/index.jsx";

// importing cloudinary urls
import { productImages } from "../../components/Cloudinary/ProductImages.jsx";

// Define the image mapping for each product type with multiple images and descriptions
const productData = {
  // SOFAS
  // STANDARD SOFA
  chesterfield: {
    // images: [chesterfield1, chesterfield2, chesterfield3, chesterfield4],
    images: productImages.chesterfield,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [Lawson1, Lawson2, Lawson3, Lawson4],
    images: productImages.lawson,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [Tuxedo1, Tuxedo2, Tuxedo3, Tuxedo4],
    images: productImages.tuxedo,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [LshapedSofa1, LshapedSofa2, LshapedSofa3, LshapedSofa4],
    images: productImages.Lshaped,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [UshapedSofa1, UshapedSofa2, UshapedSofa3, UshapedSofa4],
    images: productImages.Ushaped,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [ModularSofa1, ModularSofa2, ModularSofa3, ModularSofa4],
    images: productImages.modular,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [
    //   Lshapedsofacumbed1,
    //   Lshapedsofacumbed2,
    //   Lshapedsofacumbed3,
    //   Lshapedsofacumbed4,
    // ],
    images: productImages.Lshapedsofa_cumbed,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [
    //   ushapedsofacumbed1,
    //   ushapedsofacumbed2,
    //   ushapedsofacumbed3,
    //   ushapedsofacumbed4,
    // ],
    images: productImages.Ushapedsofa_cumbed,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [DenverModel1, DenverModel2, DenverModel3, DenverModel4],
    images: productImages.denver_model_with_storage,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [DenverModel1, DenverModel2, DenverModel3, DenverModel4],
    images: productImages.denver_model_without_storage,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [DiamondModel1, DiamondModel2, DiamondModel3, DiamondModel4],
    images: productImages.diamond_with_storage,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [DiamondModel1, DiamondModel2, DiamondModel3, DiamondModel4],
    images: productImages.diamond_without_storage,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [PKModel1, PKModel2, PKModel3, PKModel4],
    images: productImages.pk_model_withstorage,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [PKModel1, PKModel2, PKModel3, PKModel4],
    images: productImages.pk_model_without_storage,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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

  // MATTRESSES
  // ORTHOPEDIC
  orthomed: {
    // images: [OrthomedBanner, ORTRHOMED1, ORTRHOMED2, ORTRHOMED6, Orthospeci],
    images: productImages.orthomed,

    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Orthomed Spine Cure</div>
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
    <p>Tight Top</p>
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
    // images: [OrthomedBanner, Milange1, Milange2, Milange6, MilangeSpeci],
    images: productImages.milange,

    description: `
    <div class="text-xl font-semibold my-[6px]">Milange Rebonded HR Foam Dual Mattress</div>
    Experience unparalleled comfort and support with our Milange Rebonded HR Foam Dual Mattress, designed to provide a restful sleep experience.<br><br>
    <h2 class="font-bold">Key Features</h2>
    - Rebonded HR Foam: 100density High-Resilience foam ensures optimal support and durability.<br>
    - Dual Comfort: Two layers of HR PU foam provide medium-soft and medium-firm comfort options.<br>
    - Melange Yarn Fabric Quilting: Soft, breathable, and stylish fabric for a luxurious feel.<br>
    - Long-Lasting: Durable construction ensures years of comfortable sleep.<br><br>
    <h2 class="font-bold">Benefits</h2>
    - Pressure Relief: Alleviates pressure points for a pain-free sleep.<br>
    - Allergy-Friendly: Hypoallergenic materials resist dust mites and allergens.<br>
    - Cooling: Breathable fabric regulates body temperature.<br><br>
    <h2 class="font-bold">Upgrade Your Sleep</h2>
    Treat yourself to a superior sleeping experience with our Milange Rebonded HR Foam Dual Mattress. 
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>7 inches only</p>
    </div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>Tight Top</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>7 years</p>
    </div>
    <div>
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐</p>
    </div>
    </div>
  `,
  },

  preference: {
    // images: [
    //   OrthomedBanner,
    //   Preference1,
    //   Preference2,
    //   Preference6,
    //   PreferenceBanner,
    // ],
    images: productImages.preference,

    description: `
    <div class="text-xl font-semibold my-[6px]">The Preference Orthomed </div>
    This mattress is designed for optimal orthopedic support and comfort. It features a high-density rebounded foam core that evenly distributes body weight, reducing pressure on joints and providing spinal alignment. <br><br>
    <h2 class="font-bold">Ortho Support </h2>
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
    // images: [
    //   BuckinghumBanner,
    //   Buckingham1,
    //   Buckingham2,
    //   Buckingham5,
    //   BuckinghumSpeci,
    // ],
    images: productImages.buckingham,

    description: `
    <div class="text-xl font-semibold my-[6px]">Buckingham Orthomed</div>
    This mattress is designed for optimal orthopedic support and comfort. It features a high-density rebounded foam core that evenly distributes body weight, reducing pressure on joints and providing spinal alignment. <br><br>
    <h2 class="font-bold">Ortho Support </h2>
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
    <p>8 inches only</p>
    </div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>EuroTop</p>
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
  `,
  },
  "buckingham-lexus": {
    // images: [
    //   BuckinghumBanner,
    //   Buckingham1,
    //   Buckingham2,
    //   Buckingham5,
    //   BuckinghumSpeci,
    // ],
    images: productImages.buckingham,

    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Buckinghum Lexus Ortho Hybrid</div>
    This Buckingham Lexus Hybrid mattress is a premium mattress designed using advanced Hybrid technology, featuring High Resilience Rebonded foam as Main core. This mattress offers a unique combination of firmness and comfort for orthopedic support, ideal for individuals seeking relief from back and joint pain with luxury.<br><br>
    <h2 class=" font-bold">Support & Technology</h2>
    High Resilience Rebonded Foam Core this mattress provides firm support, ensuring durability and resistance to sagging. The inclusion of Zonal Grid PU Softy Foam Layer enhances the mattress comfort by offering gentle contouring, pressure relief, and a responsive bounce, making it adaptable to various sleeping positions. Zonal Grid PU Softy Foam also has body adoptive properties, contributing to a more temperature-regulated sleep.<br><br>
    <h2 class="font-bold">Comfort & Motion Isolation</h2>
    The combination of HR Rebonded foam and Zonal Grid PU Softy Foam creates a hybrid structure that balances firmness with plushy feel. This ensures optimal support while maintaining a comfortable sleeping surface. The hybrid design helps minimize motion transfer. <br><br>
    <h2 class="font-bold">Breathability & Upholstery </h2>
    The upholstery fabric is treated with anti-microbial agents, which prevent the growth of bacteria, mold, and dust mites, The top quilt layer is intricately designed with multiple layers of soft foam & fibers to create a plush, cloud-like surface. Beneath the fabric, high-density quilting foam is used to enhance support and durability. The quilting often features an elegant, detailed luxurious Patterned Design that adds an aesthetic appeal, complementing the mattress's luxurious feel.
    
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
    // images: [
    //   AloeveraBanner,
    //   AloveraBonnel1,
    //   AloveraBonnel2,
    //   AloveraBonnel3,
    //   OrthopedicAloeveraLatexSpeci,
    // ],
    images: productImages.orthopedic_alovera_latex,

    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">AloeVera Euroton Ortho Mattress with Latex </div>
    The AloeVera Euroton Ortho Mattress with Latex Layer is a perfect blend of firm orthopedic support and luxurious comfort, offering a refreshing sleep experience while promoting overall wellness through its natural materials and specialized fabric. Ideal for those who value both therapeutic support and premium comfort.<br><br>
    <h2 class=" font-bold">Core Features</h2>
    The mattress features a robust HR Rebonded foam core that adds longevity and maintains a firm, supportive foundation. This layer ensures resistance to sagging and provides the structural integrity necessary for orthopedic support engineered to provide firm, consistent support, this mattress ensures optimal spinal alignment, making it ideal for individuals with back, neck, or joint pain. It targets pressure points, helping alleviate discomfort and promoting restorative sleep.<br><br>
    <h2 class="font-bold">Latex Comfort Layer</h2>
    Natural Latex Layer a plush layer of natural latex sits atop the mattress, offering gentle contouring and pressure relief. Latex is known for its responsive support, allowing the mattress to adapt to various body shapes and sleeping positions. This layer also provides a natural bounce, enhancing comfort without compromising support. Latex has natural cooling properties, which combined with its breathability, ensure a cooler and more comfortable sleeping environment by dispersing body heat effectively.<br><br>
    <h2 class="font-bold">Aloe Vera-Infused Fabric</h2>
    The outer fabric is infused with Aloe Vera, which has soothing, skin-friendly properties. This infusion not only enhances the softness of the fabric but also promotes a healthier, more hygienic sleep surface by keeping it naturally fresh and anti-bacterial. The Aloe Vera fabric is hypoallergenic, making it suitable for those with sensitive skin or allergies. It is designed to wick away moisture, ensuring a dry and comfortable sleep throughout the night.The Euro top design enhances the aesthetic appeal with a plush, pillow-like layer that creates a cozy surface. The quilting adds an extra layer of softness without compromising the mattress's orthopedic benefits.
    
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
    <p>5 years for 6 inches</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐⭐</p>
  </div>
</div>

  `,
  },
  "orthopedic-aloe-vera-memory": {
    // images: [
    //   AloeveraBanner,
    //   OrthopedicAloeveraMemory1,
    //   OrthopedicAloeveraMemory2,
    //   OrthopedicAloeveraMemory6,
    //   OrthopedicAloeveraMemorySpeci,
    // ],
    images: productImages.orthopedic_alovera_memory,

    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">AloeVera Euroton Ortho Mattress with Memory</div>
    
    The Aloe Vera OrthoRebonded Mattress with Memory Foam and HR (High Resilience) is designed for enhanced comfort, orthopedic support, and health benefits. This mattress combines a core of rebonded foam, a layer of high resilience (HR) foam, and a top layer of memory foam, all infused with the soothing and skin-friendly properties of aloe vera. These layers work together to provide a balance of firmness, body contouring, and support, making it ideal for people seeking both comfort and relief from orthopedic issues.<br><br>
    <h2 class="font-bold">Core Features</h2>
    The high-density HR Rebonded foam offers firm support, ensuring proper spinal alignment and relieving pressure points. It is especially beneficial for those with back pain or joint discomfort as it keeps the body in a natural, supported position. (HR Extra Layer) The High Resilience (HR) foam layer is added for enhanced comfort. It provides medium-firm support with a responsive, bouncy feel that adapts to body movements. This layer prevents the mattress from feeling too rigid and adds durability, making it last longer without sagging.<br><br>
    <h2 class="font-bold">Memory Comfort Layer</h2>
    The top memory foam layer contours to your body, providing a cradling effect that helps evenly distribute weight. It reduces pressure on sensitive areas such as hips and shoulders while minimizing motion transfe. Memory foam molds to the body, alleviating pressure points, improving blood circulation, and enhancing overall comfort by providing a personalized sleep experience. It also minimizes partner disturbances by reducing motion transfer.<br><br>
    <h2 class="font-bold">Aloe Vera-Infused Fabric</h2>
    The outer fabric is infused with Aloe Vera, which has soothing, skin-friendly properties. This infusion not only enhances the softness of the fabric but also promotes a healthier, more hygienic sleep surface by keeping it naturally fresh and anti-bacterial. The Aloe Vera fabric is hypoallergenic, making it suitable for those with sensitive skin or allergies. It is designed to wick away moisture, ensuring a dry and comfortable sleep throughout the night.The Euro top design enhances the aesthetic appeal with a plush, pillow-like layer that creates a cozy surface. The quilting adds an extra layer of softness without compromising the mattress's orthopedic benefits.
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
    <p>5 years for 6 inches</p>
  </div>

  <div class="flex flex-col">
    <h2 class="font-bold">Ratings</h2>
    <p>⭐⭐⭐⭐⭐</p>
  </div>
</div>

  `,
  },
  memofy: {
    // images: [OrthomedBanner, Memofy1, Memofy2, Memofy3, MemofySpeci], // Assuming images are not uploaded yet
    images: productImages.memofy,

    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Memofy Ortho Mattress </div>
    This mattress features a core of Rebonded foam for firm support, topped with a unique layer that mimics the feel of memory foam, providing a soft and cushioning surface similar to polyurethane (PU) foam but with orthopedic benefits. Memory-Like PU Foam Feel is crafted for those who seek the ideal balance of orthopedic support and a plush, comfortable sleeping surface.<br><br>
    <h2 class=" font-bold">Rebonded Foam with Comfort</h2>
    The mattress has a durable Rebonded foam base that provides firm orthopedic support. This core ensures proper spinal alignment. The top layer of this mattress offers a soft, memory-like feel, similar to high-quality PU foam, but with added orthopedic benefits. This layer contours to the body, delivering the plush comfort of memory foam while maintaining support and responsiveness. <br><br>
   
    <h2 class="font-bold">Firmness</h2>
    Designed to promote healthy sleep posture, the firm rebonded foam works in tandem with the plush top layer to reduce stress on the back, neck, and joints. This mattress helps alleviate aches and pains associated with poor sleep alignment.<br><br>
    <h2 class="font-bold">Fabric & Quilt Cover</h2>
    The outer fabric is designed and quilted with multilayer PU Foam to enhance breathability, allowing for better air circulation and a cooler sleeping surface, preventing overheating during the night.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>6 & 8 inches</p>
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
    // images: [oxford1, oxford2, oxford6],
    images: productImages.oxford,
    description: `

    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Oxford</div>
    The Sleep Fine Ortho Bonnell Spring Oxford mattress is designed for those who seek a perfect balance between firm orthopedic support and traditional spring comfort. Crafted with high-quality Bonnell springs, this mattress provides a stable and durable foundation, ensuring a restful and rejuvenating sleep experience. The interconnected coil system evenly distributes body weight, offering consistent support throughout the night, which helps maintain proper spinal alignment and reduces pressure points.<br><br>
    <h2 class="font-bold">Firm Orthopedic Support</h2>
    This mattress features a firm Bonnell spring core that offers excellent orthopedic benefits, promoting healthy posture and reducing discomfort caused by poor sleep alignment. The open-coil design ensures that air flows freely through the mattress, keeping the surface cool and fresh for a comfortable night’s rest.This combination of firm support and soft comfort makes it ideal for those who prefer a structured yet comfortable sleeping surface.<br><br>
    
    <h2 class="font-bold">Durable and Long-Lasting</h2>
    Built to last, the Bonnell springs are engineered to maintain their shape and performance over time. The sturdy construction ensures that the mattress retains its firmness and does not sag, even after years of use. Its durability makes it a great long-term investment for anyone seeking consistent orthopedic support.

    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>7 inches only</p>
    </div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>Tight-Top</p>
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
    // images: [Hotel1, Hotel2, Hotel3],
    images: productImages.thehotel,
    description: `

    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">The Hotels: The Perfect Blend of Comfort and Durability</div>
    Designed specifically for hospitality use, the Sleep Fine Bonnell Spring Mattress offers the ideal combination of comfort, support, and durability, making it perfect for hotel environments. This mattress is engineered with high-quality Bonnell springs, providing consistent support and lasting comfort for guests, ensuring they wake up feeling refreshed and rejuvenated.<br><br>
    <h2 class="font-bold">Superior Support for All Sleepers</h2>
    The interconnected Bonnell spring system evenly distributes body weight, ensuring optimal spinal alignment and reducing pressure points. This makes it an excellent choice for a wide range of guests, offering both firm support and cushioned comfort. Its ability to adapt to different body types and sleeping positions makes it the go-to mattress for hotels that want to provide top-tier comfort for every guest.<br><br>
    <h2 class="font-bold">Built for Durability</h2>
    Hotels require mattresses that can withstand frequent use without losing their shape or support. The Bonnell Spring Mattress is crafted to be highly durable, maintaining its structural integrity over time. The robust spring system is designed to resist sagging, ensuring the mattress retains its form and provides long-lasting comfort, even in high-traffic settings.<br><br>
    <h2 class="font-bold">Exceptional Comfort and Breathability</h2>
    This mattress combines firm support with a plush comfort layer, offering a balanced sleeping experience that caters to different preferences. The open-coil structure also promotes airflow, keeping the mattress cool and fresh, an important feature in a hospitality setting where comfort and hygiene are key.<br>
    <b>Upholstered with FR (Fire Retardent) Fabric.</b>

    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>6, 8 & 10 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Warranty</h2>
    <p>As per agreement (min 5years)</p>
    </div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>TightTop &Pillow-Top</p>
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
    // images: [Loveland1, Loveland2, Loveland6],
    images: productImages.Love_Land_Pillow_Top,
    description: `

    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">LoveLand Pillow Top</div>
    The Sleep Fine Bonnell Spring LoveLand Pillow Top Mattress combines the robust support of a Bonnell spring system with the plush, indulgent comfort of a pillow top layer. This mattress is designed for those who seek a firm foundation with an added touch of luxury, providing a balanced sleeping experience that supports the body while enveloping it in softness.<br><br>
   
    <h2 class="font-bold">Pillow Top Comfort</h2>
    The signature pillow top layer adds an extra level of plushness to the mattress, creating a soft and luxurious sleeping surface. This layer enhances comfort, offering a cozy feel without sacrificing the firm support provided by the Bonnell spring core. It's perfect for sleepers who want a gentle touch without compromising on structural integrity.<br><br>
    <h2 class="font-bold">Balanced Sleep Experience</h2>
    With its combination of firm Bonnell spring support and a plush pillow top, the LoveLand Pillow Top Mattress is ideal for those who desire a mattress that caters to both support and softness. Whether you're a back, side, or stomach sleeper, this mattress provides the right amount of comfort and support for a rejuvenating night's rest.

    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>8 & 10 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>Pillow-Top</p>
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
  "romantic-euroton": {
    // images: [RomanticBanner, Romanticfirm1, Romanticfirm2, Romanticfirm6],
    images: productImages.Romantic_Euroton,
    description: `

    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Romantic Euroton</div>
    The Sleep Fine Bonnell Spring Romantic Euroton Mattress is the epitome of classic comfort and enduring support. With a foundation built upon a reliable Bonnell spring system, this mattress offers a balanced combination of resilience and plushness, making it perfect for those who desire a firm, supportive sleep surface with a touch of luxury.<br><br>
    <h2 class="font-bold">Bonnell Spring System</h2>
    The core of the Romantic Euroton is reinforced by a robust Bonnell spring system. This interconnected spring structure provides superior durability and even weight distribution, ensuring the mattress retains its shape and integrity over time. Its supportive framework promotes proper spinal alignment, reducing pressure on key areas of the body and helping you wake up refreshed.<br><br>
    <h2 class="font-bold">Eurotop Plush Layer</h2>
    Topping the Bonnell spring base is a Eurotop design that adds a layer of soft cushioning without compromising on support. The Eurotop enhances the mattress's plush feel, giving you a cloud-like sensation while the Bonnell springs work underneath to maintain firmness and stability. This pairing creates the perfect harmony between softness and structure.<br><br>
    <h2 class="font-bold">Luxurious Sleeping Experience</h2>
    With its elegant Eurotop design and sturdy Bonnell spring foundation, the Romantic Euroton Mattress delivers a sleep experience that is both indulgent and supportive. Ideal for sleepers who enjoy a blend of firmness with a gentle surface, this mattress offers the perfect solution for those seeking comfort with reliable orthopedic support.

    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>8 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>Euro-Top</p>
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
  ambitious: {
    // images: [RomanticBanner, Romanticfirm1, Romanticfirm2, Romanticfirm6],
    images: productImages.Romantic_Euroton,
    description: `

    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Romantic Euroton</div>
    The Sleep Fine Bonnell Spring Romantic Euroton Mattress is the epitome of classic comfort and enduring support. With a foundation built upon a reliable Bonnell spring system, this mattress offers a balanced combination of resilience and plushness, making it perfect for those who desire a firm, supportive sleep surface with a touch of luxury.<br><br>
    <h2 class="font-bold">Bonnell Spring System</h2>
    The core of the Romantic Euroton is reinforced by a robust Bonnell spring system. This interconnected spring structure provides superior durability and even weight distribution, ensuring the mattress retains its shape and integrity over time. Its supportive framework promotes proper spinal alignment, reducing pressure on key areas of the body and helping you wake up refreshed.<br><br>
    <h2 class="font-bold">Eurotop Plush Layer</h2>
    Topping the Bonnell spring base is a Eurotop design that adds a layer of soft cushioning without compromising on support. The Eurotop enhances the mattress's plush feel, giving you a cloud-like sensation while the Bonnell springs work underneath to maintain firmness and stability. This pairing creates the perfect harmony between softness and structure.<br><br>
    <h2 class="font-bold">Luxurious Sleeping Experience</h2>
    With its elegant Eurotop design and sturdy Bonnell spring foundation, the Romantic Euroton Mattress delivers a sleep experience that is both indulgent and supportive. Ideal for sleepers who enjoy a blend of firmness with a gentle surface, this mattress offers the perfect solution for those seeking comfort with reliable orthopedic support.

    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">
    <h2 class="font-bold">Height</h2>
    <p>8 inches</p>
    </div>
    <div>
    <h2 class="font-bold">Variant</h2>
    <p>Euro-Top</p>
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
  "ortho-bonnell-aloe-vera-with-latex": {
    // images: [AloeveraBanner, AloveraBonnel1, AloveraBonnel2, AloveraBonnel3],
    images: productImages.orthopedic_alovera_latex,
    description: `

    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Ortho Bonnell Spring Aloe Vera with Latex</div>
    The Sleep Fine Ortho Bonnell Aloe Vera with Latex Mattress combines the strength of a Bonnell spring system with the natural benefits of latex and aloe vera. Crafted for those who seek firm orthopedic support with added comfort, this mattress ensures a rejuvenating sleep experience while promoting natural wellness.<br><br>
    <h2 class="font-bold">Bonnell Spring Orthopedic Support</h2>
    At its core, the mattress features a Bonnell spring system designed for durability and firm support. This interconnected spring structure provides excellent weight distribution, helping maintain spinal alignment and alleviate pressure on joints, making it ideal for those with back pain or seeking orthopedic relief.<br><br>
    <h2 class="font-bold">Natural Latex Comfort Layer</h2>
    The inclusion of a natural latex layer adds a touch of plushness and responsiveness, enhancing the comfort of the mattress. Latex contours gently to your body while retaining its natural bounce, offering a balanced combination of support and softness. Its hypoallergenic and breathable properties ensure a cooler, more hygienic sleep environment.<br><br>
    <h2 class="font-bold">Aloe Vera Infused Fabric</h2>
    To enhance the health benefits, the outer fabric is infused with aloe vera extracts, known for their soothing and skin-friendly properties. The aloe vera-infused cover helps create a calm, natural sleeping environment, while the breathable fabric aids in temperature regulation for a refreshing night’s rest.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">

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
    // images: [
    //   AloeveraBanner,
    //   OrthopedicAloeveraMemory1,
    //   OrthopedicAloeveraMemory2,
    //   OrthopedicAloeveraMemory6,
    // ],
    images: productImages.orthopedic_alovera_memory,
    description: `

    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Ortho Bonnell Spring Aloe Vera with Memory</div>
    The Sleep Fine Ortho Bonnell Aloe Vera with Memory Mattress is a perfect blend of firm orthopedic support, soothing aloe vera benefits, and the luxurious comfort of memory foam. Tailored for those who need sturdy support but don't want to compromise on comfort, this mattress is ideal for a rejuvenating and restful sleep experience.<br><br>
    <h2 class="font-bold">Bonnell Spring Orthopedic Core</h2>
    At the heart of the mattress is the resilient Bonnell spring system, providing firm and lasting support. The interconnected spring structure ensures optimal weight distribution, promoting proper spinal alignment and reducing pressure points for sleepers who need extra support for their back and joints.<br><br>
    <h2 class="font-bold">Memory Foam Comfort Layer</h2>
    The top layer of memory foam adapts to your body's contours, providing personalized comfort and alleviating pressure on sensitive areas like the hips, shoulders, and lower back. The memory foam's ability to mold to your body helps to distribute weight evenly, relieving stress and promoting better sleep posture throughout the night.<br><br>
    <h2 class="font-bold">Aloe Vera-Infused Fabric for Soothing Sleep</h2>
    The aloe vera-infused outer fabric brings a touch of natural wellness to your sleeping environment. Known for its calming and healing properties, aloe vera helps create a soothing atmosphere for your skin and body, while the breathable fabric ensures a cool and comfortable sleep.
    <div class="flex justify-start mt-2 items-center gap-10">
    <div class="flex-col">

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

  // POCKETED

  "pocketed-spring-inspiration": {
    // images: [
    //   InsperationalPocketed1,
    //   InsperationalPocketed2,
    //   InsperationalPocketed6,
    // ], // Assuming images are not uploaded yet
    images: productImages.inspiration,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Pocketed Spring Inspiration Mattress</div>
    
    The Pocketed Spring Inspiration mattress combines the best of advanced spring technology with plush comfort, delivering a superior sleeping experience. Its core consists of individually wrapped pocket springs, ensuring targeted support that adapts to your body’s natural contours. The top comfort layer enhances the mattress's luxurious feel, offering a balance between cushioning and proper orthopedic alignment for a restful sleep.<br><br>
    <h2 class="font-bold">Plush Comfort with Orthopedic Benefits</h2>
    The mattress is topped with a premium comfort layer that mimics the feel of memory foam but with a more responsive and breathable design. This plush top layer offers excellent cushioning without compromising on the support provided by the pocket springs beneath. The combination of materials helps reduce discomfort from back and joint pain, providing a restful, restorative sleep.<br><br>
    <h2 class="font-bold">Medium Firmness for Optimal Comfort</h2>
    Designed for those who need medium firmness, this mattress provides a balance between support and softness. The pocket springs offer a firmer base that keeps your spine aligned, while the plush top layer ensures comfort. This combination helps alleviate common sleep issues like back pain and stiffness, making it an excellent choice for individuals seeking both orthopedic support and luxury.<br><br>
    <h2 class="font-bold">Breathable Fabric & Quilted Cover</h2>
    The outer fabric is crafted from breathable, high-quality materials designed to regulate body temperature. It features a quilted cover that enhances airflow, keeping you cool throughout the night. The multiple layers of fabric and PU foam ensure long-lasting comfort and durability, helping prevent overheating and creating a more hygienic sleeping environment.
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
  "pocketed-spring-6inch-eternity-euroton": {
    // images: [EternityEuroton1, EternityEuroton2, EternityEuroton3],
    images: productImages.Eternity_Euroton,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Pocketed Spring Eternity Euroton Mattress</div>
    The Pocketed Spring Eternity Euroton mattress offers the perfect blend of advanced spring technology and luxurious comfort. This premium mattress is designed to provide long-lasting support with a Euro-top layer, delivering an indulgent sleeping experience. With its individually encased pocket springs, this mattress minimizes motion transfer and enhances support, while the Euroton comfort layer provides a plush and contouring feel for an ideal night’s rest.<br><br>
    <h2 class="font-bold">Advanced Pocketed Springs for Personalized Support</h2>
    The core of this mattress consists of high-density pocketed springs, each encased to move independently. This advanced spring system ensures targeted support across various body zones, adapting to your unique shape and reducing pressure on key areas like the hips, shoulders, and spine. The individually wrapped springs also limit motion transfer, making it perfect for couples seeking uninterrupted sleep.<br><br>
    <h2 class="font-bold">Euroton Plush Top Layer for Extra Comfort</h2>
    The mattress features a luxurious Euroton top layer that enhances the softness and cushioning effect. The Euro-top design offers a thick, pillow-like layer that cradles the body, delivering superior comfort while maintaining the firmness and support needed for proper alignment. This plush top layer contours to the body, providing a feeling of luxury without compromising on orthopedic benefits.<br><br>
    <h2 class="font-bold">Medium-Firm Support for Balanced Comfort</h2>
    This mattress is designed to offer medium-firm support, which is ideal for maintaining a healthy sleeping posture while delivering a plush surface for ultimate comfort. The pocketed springs work in tandem with the Euroton top layer to provide both support and relief from pressure points, reducing stress on the back, neck, and joints. It’s the perfect choice for those seeking a balance between firmness and softness.
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
    // images: [AloeveraBanner, AloveraBonnel1, AloveraBonnel2, AloveraBonnel3],
    images: productImages.orthopedic_alovera_latex,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Pocketed Spring Aloe Vera with Latex Mattress</div>
    The Pocketed Spring Aloe Vera with Latex mattress combines the natural benefits of latex with the advanced support of pocketed springs for a healthier, more comfortable sleep. Infused with aloe vera for added skin benefits and breathability, this mattress is crafted to provide superior orthopedic support, pressure relief, and long-lasting durability. The inclusion of latex adds natural responsiveness, creating a sleep surface that conforms to your body while promoting optimal alignment.<br><br>
    <h2 class="font-bold">Pocketed Springs for Advanced Support</h2>
    At the core of this mattress are individually wrapped pocket springs, engineered to offer tailored support for every part of your body. These springs work independently, minimizing motion transfer and ensuring personalized support for areas such as your shoulders, hips, and spine. This design promotes proper posture and relieves pressure points, making it perfect for those who need firm support with flexibility.<br><br>
    <h2 class="font-bold">Natural Latex Comfort Layer</h2>
    Topped with a natural latex layer, this mattress offers a unique combination of firm support and plush comfort. Latex is known for its breathability, natural resistance to dust mites, and hypoallergenic properties, making it ideal for allergy-prone sleepers. The latex layer adapts to your body’s contours, providing pressure relief while maintaining a responsive feel that helps in spinal alignment. This combination of latex and pocketed springs ensures the right balance of firmness and softness for a rejuvenating sleep.<br><br>
    <h2 class="font-bold">Aloe Vera-Infused Fabric for Skin-Friendly Comfort</h2>
    The mattress cover is infused with natural aloe vera, known for its soothing and anti-inflammatory properties. This not only promotes a fresh and hygienic sleeping environment but also enhances the fabric's breathability, keeping you cool throughout the night. The aloe vera-infused fabric helps moisturize and protect the skin while you sleep, contributing to a relaxing and restorative rest.
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
    // images: [
    //   AloeveraBanner,
    //   OrthopedicAloeveraMemory1,
    //   OrthopedicAloeveraMemory2,
    //   OrthopedicAloeveraMemory6,
    // ],
    images: productImages.orthopedic_alovera_memory,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">Pocketed Spring Aloe Vera with Memory Foam Mattress</div>
    The Pocketed Spring Aloe Vera with Memory Foam mattress blends advanced sleep technology with natural aloe vera benefits, offering superior comfort, support, and freshness. This premium mattress is designed with pocketed springs for individualized support, while the memory foam layer ensures contouring comfort and pressure relief. Infused with aloe vera, this mattress provides a refreshing and skin-friendly sleep environment, perfect for those seeking a combination of orthopedic support and luxury.<br><br>
    <h2 class="font-bold">Pocketed Springs for Customized Support</h2>
    At the core of this mattress are individually wrapped pocket springs, engineered to respond independently to your body's movements. These springs provide targeted support, ensuring proper alignment of the spine and relieving pressure points like the shoulders and hips. The independent movement of each spring reduces motion transfer, making this mattress ideal for couples by minimizing disturbances caused by movement.<br><br>
    <h2 class="font-bold">Memory Foam for Contouring Comfort</h2>
    The memory foam layer atop the pocketed springs adapts to your body's shape, providing a personalized level of comfort and support. It cradles your body, relieving pressure points and promoting optimal spinal alignment. Memory foam also responds to heat, softening and molding to the contours of your body for a cloud-like sleeping experience. This combination of pocketed springs and memory foam ensures the right balance of support and plushness for a restful sleep.<br><br>
    <h2 class="font-bold">Aloe Vera-Infused Fabric for Skin Rejuvenation</h2>
    The outer cover is infused with natural aloe vera, known for its soothing and skin-rejuvenating properties. Aloe vera helps keep the fabric fresh and cool, promoting a healthy sleep environment by preventing overheating and maintaining breathability. This infusion also offers natural skin benefits, helping to keep your skin moisturized and revitalized during sleep. The aloe vera-infused fabric makes the mattress not only comfortable but also skin-friendly.
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
    // images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM5],
    images: productImages.gravity,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">HR PU Gravity Mattress</div>
    The HR PU Gravity mattress is designed with advanced High-Resilience (HR) PU foam technology, offering the perfect balance of firm support and plush comfort. This premium mattress is crafted for individuals who require robust back support combined with a soft, cushioning surface. The HR foam core adapts to your body’s movements, providing durability, enhanced flexibility, and optimal comfort for a restful night’s sleep.<br><br>
    <h2 class="font-bold">High-Resilience PU Foam for Superior Support</h2>
    The core of the HR PU Gravity mattress is made of high-resilience PU foam, known for its ability to contour to the body while maintaining its shape over time. This foam is more durable and flexible than traditional PU foam, ensuring long-lasting comfort and support. The HR foam responds quickly to pressure, offering targeted support for your back, hips, and shoulders, promoting proper spinal alignment and helping to alleviate pressure points.<br><br>
    <h2 class="font-bold">Firmness and Support</h2>
    The HR PU Gravity mattress is designed with medium-firm support, ideal for maintaining healthy posture during sleep. The high-resilience foam prevents sagging and provides firm support to the spine, helping reduce the chances of waking up with aches or stiffness. Its durable structure is especially beneficial for those who need consistent support throughout the night.<br><br>
    <h2 class="font-bold">Breathable and Durable Fabric</h2>
    The mattress is wrapped in a breathable fabric that promotes airflow, preventing heat retention and ensuring a cooler sleeping environment. The durable quilted cover enhances the overall longevity of the mattress, protecting the foam layers from wear and tear while adding an additional layer of comfort. This breathable design keeps the mattress cool, even on hot nights, allowing for an undisturbed sleep experience.
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
    // images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM5],
    images: productImages.space,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">HR PU Space Mattress</div>
    The HR PU Space mattress is crafted using High-Resilience (HR) PU foam technology, providing a unique combination of superior support and luxurious comfort. Designed for individuals who prioritize both durability and pressure-relieving features, this mattress adapts to your body’s contours, ensuring optimal spinal alignment while delivering a plush, restful sleep surface.<br><br>
    <h2 class="font-bold">Space-Like Comfort with Plush Surface</h2>
    The top layer of the HR PU Space mattress offers a plush, cloud-like surface, designed to give you the feeling of floating in space. This luxurious layer creates a soft, cushioning effect while the HR foam underneath ensures that the body remains supported. The combination of plush comfort and firm support makes this mattress ideal for sleepers who want to experience both coziness and orthopedic benefits.<br><br>
    <h2 class="font-bold">Medium-Firm Support for Healthy Sleep Posture</h2>
    With a medium-firm support level, the HR PU Space mattress is perfect for maintaining a healthy sleep posture. The HR foam core is firm enough to keep your spine aligned, while the plush top layer ensures comfort without compromising on support. This balance helps reduce pressure on your joints and prevents back pain, making it an excellent choice for people seeking a supportive and restorative sleep surface.<br><br>
    <h2 class="font-bold">Breathable and Durable Quilted Cover</h2>
    The mattress is encased in a breathable, quilted fabric cover designed to enhance airflow, keeping the surface cool and comfortable throughout the night. This durable cover is engineered to protect the foam layers from wear and tear, ensuring that the mattress maintains its shape and performance over time. Its breathability also helps prevent overheating, allowing you to enjoy a cool and refreshing sleep experience.
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
    // images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM5],
    images: productImages.plush,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">HR PU Plush Mattress</div>
    The HR PU Plush mattress offers an exceptional blend of luxury, comfort, and support, thanks to its High-Resilience (HR) PU foam core and plush surface. Designed for those who seek a soft yet supportive sleep experience, this mattress delivers a cloud-like feel while ensuring your spine remains properly aligned. With superior cushioning and long-lasting durability, this mattress is the perfect choice for anyone wanting the best of both worlds—plush comfort and firm support.<br><br>
    <h2 class="font-bold">High-Resilience PU Foam for Lasting Support</h2>
    The core of the HR PU Plush mattress is built with high-resilience PU foam, which provides advanced support by contouring to your body and distributing your weight evenly. HR foam offers more elasticity and responsiveness compared to regular PU foam, making it ideal for long-term use without sagging. The foam adjusts to your body’s natural curves, reducing pressure on sensitive areas like the hips and shoulders, and promoting proper spinal alignment.<br><br>
    <h2 class="font-bold">Luxurious Plush Comfort Layer</h2>
    Topping the HR foam core is a plush comfort layer that offers an indulgently soft sleeping surface. This layer cradles your body, providing a gentle, cushioning feel that enhances relaxation and encourages restful sleep. Despite its soft feel, the mattress ensures that your body remains well-supported, preventing any sinking sensation that could lead to discomfort. Whether you sleep on your back, side, or stomach, the plush top layer offers the perfect balance of softness and support.

    <br><br>
    <h2 class="font-bold">Breathable and Durable Quilted Cover</h2>
    The mattress is wrapped in a high-quality, breathable quilted cover that promotes airflow, keeping you cool and comfortable throughout the night. The fabric is designed to wick away moisture, ensuring a fresh and dry sleep environment. The durable construction of the cover helps protect the mattress from wear and tear, ensuring long-lasting performance and comfort.
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
    // images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM5],
    images: productImages.techniko,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
    <div class="text-xl font-semibold my-[6px]">HR PU Techniko Mattress</div>
    The HR PU Techniko mattress combines cutting-edge sleep technology with premium materials to deliver a sleep experience that’s both comfortable and supportive. Built with High-Resilience (HR) PU foam, this mattress offers a balance of firm support and plush cushioning, ideal for sleepers who want durability, responsiveness, and pressure relief all in one. The HR foam core ensures long-lasting comfort while maintaining optimal spinal alignment, making it a perfect solution for those seeking a high-performance mattress.<br><br>
    <h2 class="font-bold">High-Resilience PU Foam for Enhanced Support</h2>
    The core of the HR PU Techniko mattress is composed of high-resilience PU foam, which adapts to your body shape and provides targeted support where you need it most. HR foam is known for its elasticity and ability to bounce back quickly, ensuring that the mattress maintains its shape and doesn't sag over time. It offers a superior level of pressure relief, especially for the back, shoulders, and hips, promoting a restful sleep and reducing the risk of developing aches and pains.<br><br>
    <h2 class="font-bold">Adaptive Comfort Layer for a Balanced Sleep Surface</h2>
    This mattress is designed with a specialized comfort layer that enhances the body-contouring properties of HR foam. The comfort layer works to cushion pressure points and provide a medium-firm feel that supports a variety of sleep styles. Whether you prefer to sleep on your back, side, or stomach, the HR PU Techniko adapts to your position, offering balanced support without compromising on comfort.<br><br>
    <h2 class="font-bold">Durable and Breathable Quilted Cover</h2>
    The outer layer of the mattress features a breathable, quilted cover that helps regulate body temperature and enhances airflow. This breathable fabric ensures that you stay cool and comfortable throughout the night by preventing heat retention. The quilted design not only adds to the comfort of the mattress but also increases its durability, protecting the foam layers from wear and tear.
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
    // images: [BaffelBox, SewnThrough],
    images: productImages.waterproof_protectors,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [BaffelBox, SewnThrough],
    images: productImages.Quilted_protectors,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [BaffelBox, SewnThrough],
    images: productImages.fitted_protectors,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [
    //   MemoryfoamPillow1,
    //   MemoryfoamPillow2,
    //   MemoryfoamPillow3,
    //   MemoryfoamPillow4,
    // ],
    images: productImages.Memory_pillow,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [LatexPillow1, LatexPillow2, LatexPillow3, LatexPillow4],
    images: productImages.latexy_pillow,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [Foampillow11, Foampillow2, Foampillow3, Foampillow4],
    images: productImages.foam_pillow,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
    // images: [
    //   PolyfiberPillow1,
    //   AloveraPolyfiberPillow2,
    //   AloveraPolyfiberPillow3,
    //   Foampillow4,
    // ],
    images: productImages.polyfiber_pillow,
    description: `
    <div class="sm:w-[143%] sm:text-justify xl:w-[83%]">
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
};

const ProductDetails = () => {
  const { productType } = useParams(); // Get the productType from URL
  const formattedProductType = productType.toLowerCase(); // Ensure the keys in productData are lower case and hyphenated
  const productInfo = productData[formattedProductType]; // Fetch the product info based on the URL param

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

  const [zoom, setZoom] = useState(false);

  const [magnifyStyle, setMagnifyStyle] = useState({ display: "none" }); // To control magnifying glass

  const [isLargeScreen, setIsLargeScreen] = useState(false); //  to control magnifying glass only for specific screen

  // Detect screen size to apply conditional behavior
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1080); // Check if screen is xl or larger
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // handle for magnifying glass appearance
  // Handle mouse enter to show the magnifying glass
  const handleMouseEnter = () => {
    setMagnifyStyle({ display: "block" });
  };

  // Handle mouse leave to hide the magnifying glass
  const handleMouseLeave = () => {
    setMagnifyStyle({ display: "none" });
  };

   

  // handle function for zooming main image on Hovered or onClicked
  // const handleZoomIn = () => {
  //   if (!isLargeScreen) {
  //     setZoom(true);
  //   }
  // };

  // const handleZoomOut = () => {
  //   if (!isLargeScreen) {
  //     setZoom(false);
  //   }
  // };

  // using toggle effect
  const handleToggleZoom = () => {
    setZoom((prevZoom) => !prevZoom); // Toggle zoom state
  };

  // Handle mouse move for magnifying glass effect
  const handleMouseMove = (e) => {
    if (!isLargeScreen) return; // Disable on small screens

    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;
    const xPercent = (offsetX / offsetWidth) * 100;
    const yPercent = (offsetY / offsetHeight) * 100;

    setMagnifyStyle({
      display: "block",
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      top: `${e.clientY - 300}px`,
      left: `${e.clientX - 100}px`,
    });
  };

  

  // Handle touch move for magnifying glass effect on mobile
  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const target = e.target;
    const { offsetWidth, offsetHeight } = target;
    const touchX = touch.clientX - target.getBoundingClientRect().left;
    const touchY = touch.clientY - target.getBoundingClientRect().top;

    const xPercent = (touchX / offsetWidth) * 100;
    const yPercent = (touchY / offsetHeight) * 100;

    setMagnifyStyle({
      display: "block",
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      top: `${touch.clientY - 200}px`,
      left: `${touch.clientX - 100}px`,
    });
  };

  const hideMagnifyGlass = () => {
    setMagnifyStyle({ display: "none" });
  };

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
              <div className="main-image relative mb-4 xl:w-[100%] xl:h-[380px] sm:ml-[12px] sm:w-[143%] sm:max-w-[616px]">
                <img
                  src={productInfo.images[currentImageIndex]}
                  alt="Main product"
                  className={`sm:w-[540px] sm:h-[412px] xl:w-[645px] xl:h-[378px] rounded-xl border-2 border-slate-300 bg-slate-400 transition-transform duration-300 ease-in-out ${
                    zoom ? "scale-150" : "scale-100"
                  }`}
                  // Apply onClick and onDoubleClick for both large and small screens
                  onClick={handleToggleZoom}
                  
                  // Conditionally apply handlers for magnifying glass and touch events only for large screens
                  {...(isLargeScreen && {
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                    onMouseMove: handleMouseMove,
                    onTouchMove: handleTouchMove,
                    onTouchStart: handleTouchMove,
                    onTouchEnd: hideMagnifyGlass,
                  })}
                />

                {/* Magnifying Glass Effect */}
                <div
                  className="magnify-glass absolute w-[200px] h-[200px] rounded-full bg-no-repeat pointer-events-none border border-blue-500"
                  style={{
                    backgroundImage: `url(${productInfo.images[currentImageIndex]})`,
                    backgroundSize: "400%",
                    ...magnifyStyle,
                  }}
                ></div>

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
              <div className="thumbnail flex justify-start">
                {productInfo.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className={`cursor-pointer sm:w-[70px] sm:h-[70px] sm:ml-[13px] xl:w-[65px]  xl:h-65px] xl:ml-[15px]  rounded-xl ${
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

          <div className="mt-6 xl:ml-[-37rem] flex justify-center sm:ml-0 ">
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
