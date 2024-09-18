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
  OrthopedicAloeveraMemory1,
  OrthopedicAloeveraMemory2,
  OrthopedicAloeveraMemory3,
  OrthopedicAloeveraMemory4,
  OrthopedicAloeveraMemory5,
  OrthopedicAloeveraMemory6,
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
<<<<<<< HEAD
=======
  OrthoSpecification,
>>>>>>> 66158c0c74874f6a9e2d753b6ceed586e3acca7e
  Orthospeci,
} from "../../assets/index.jsx"; // Adjust the import paths as needed

// Define the image mapping for each product type with multiple images and descriptions
const productData = {
  "leather-sofa": {
    images: [
      OrthopedicAloeveraMemory1,
      OrthopedicAloeveraMemory2,
      OrthopedicAloeveraMemory3,
      OrthopedicAloeveraMemory4,
    ], // Replace these with actual Leather Sofa images
    description:
      "Our leather sofas offer a touch of luxury and timeless elegance. Made from premium materials, these sofas provide both comfort and durability, perfect for any living space.",
  },
  "fabric-sofa": {
    images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM3, SixinchPUFOAM4], // Replace these with actual Fabric Sofa images
    description:
      "Explore our collection of fabric sofas that blend style with comfort. Choose from a variety of colors and textures to suit your home decor, offering both aesthetic appeal and cozy relaxation.",
  },
  // "king-size-bed": {
  //   images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM3, SixinchPUFOAM4], // Replace these with actual King Size Bed images
  //   description:
  //     "Experience luxury with our king-size beds that promise superior comfort and spaciousness. Crafted with quality materials, these beds are designed to provide a restful night's sleep.",
  // },
  // "queen-size-bed": {
  //   images: [SixinchPUFOAM1, SixinchPUFOAM2, SixinchPUFOAM3, SixinchPUFOAM4], // Replace these with actual Queen Size Bed images
  //   description:
  //     "Our queen-size beds combine elegance and comfort, making them an ideal choice for any bedroom. They offer the perfect balance of space and style for a restful retreat.",
  // },
  orthomed: {
    images: [
      OrthomedBanner,
      ORTRHOMED1,
      ORTRHOMED2,
      ORTRHOMED3,
      ORTRHOMED4,
      Orthospeci,
    ],
    description: `
    <div class="text-xl font-semibold my-[6px]">Orthomed - Doctor Approved Spine cure mattress</div>
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
  `,
  },

  preference: {
    images: [Preference1, Preference2, Preference3, Preference4], // Assuming images are not uploaded yet
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
  `,
  },
  buckingham: {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Buckingham</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "orthopedic-aloe-vera-latex": {
    images: [AloveraBonnel1, AloveraBonnel2, AloveraBonnel3, AloveraBonnel4], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">orthopedic-aloe-vera-latex</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "orthopedic-aloe-vera-memory": {
    images: [
      OrthopedicAloeveraMemory1,
      OrthopedicAloeveraMemory2,
      OrthopedicAloeveraMemory3,
      OrthopedicAloeveraMemory6,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">orthopedic-aloe-vera-memory</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  memofy: {
    images: [oxford1, oxford2, oxford3, oxford4], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">memofy</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "6inch-oxford": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">6inch-oxford</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "6inch-silver-crown": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">6inch-silver-crown</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "8inch-love-land": {
    images: [Loveland1, Loveland2, Loveland5, Loveland6], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">8inch-love-land</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "8inch-love-land-pillow-top": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">8inch-love-land-pillow-top</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "8inch-romantic-euroton": {
    images: [Romanticfirm1, Romanticfirm2, Romanticfirm4, Romanticfirm6], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">8inch-romantic-euroton</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "ortho-bonnell-aloe-vera-with-latex": {
    images: [AloveraBonnel1, AloveraBonnel2, AloveraBonnel3, AloveraBonnel4], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Preferences - Doctor Approved Spine care soft mattress</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "ortho-bonnell-aloe-vera-with-memory": {
    images: [
      OrthopedicAloeveraMemory1,
      OrthopedicAloeveraMemory2,
      OrthopedicAloeveraMemory3,
      OrthopedicAloeveraMemory4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">ortho-bonnell-aloe-vera-with-memory</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "pocketed-spring-inspiration": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">pocketed-spring-inspiration</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "pocketed-spring-6inch-eternity-euroton": {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">pocketed-spring-6inch-eternity-euroton</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "pocketed-spring-aloe-vera-with-latex": {
    images: [AloveraBonnel1, AloveraBonnel2, AloveraBonnel3, AloveraBonnel4], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">pocketed-spring-aloe-vera-with-latex</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "pocketed-spring-aloe-vera-with-memory": {
    images: [
      OrthopedicAloeveraMemory1,
      OrthopedicAloeveraMemory2,
      OrthopedicAloeveraMemory3,
      OrthopedicAloeveraMemory4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">pocketed-spring-aloe-vera-with-memory</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "hr-pu-gravity": {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">hr-pu-gravity</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "hr-pu-space": {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">hr-pu-space</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "hr-pu-plush": {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">hr-pu-plush</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "hr-pu-techniko": {
    images: [Buckingham1, Buckingham2, Buckingham3, Buckingham4], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">hr-pu-techniko</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "platform-bed": {
    images: [Buckingham3, Buckingham4, Buckingham5, Buckingham6], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">platform-bed</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "Panel-Bed": {
    images: [
      OrthopedicAloeveraMemory3,
      OrthopedicAloeveraMemory4,
      OrthopedicAloeveraMemory5,
      OrthopedicAloeveraMemory6,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Panel-Bed</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "Canopy-Bed": {
    images: [ORTRHOMED3, ORTRHOMED4, ORTRHOMED5, ORTRHOMED6], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Canopy-Bed</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "Sleigh-Bed": {
    images: [Preference3, Preference4, Preference5, Preference6], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Sleigh-Bed</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "Murphy-Bed": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">  "Murphy-Bed": {
</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "Loft-Bed": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Loft-Bed</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "Bunk-Bed": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Bunk-Bed</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "Trundle-Bed": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM1,
      EightinchPUFOAM1,
      EightinchPUFOAM1,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Trundle-Bed</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "Standard-Sofa": {
    images: [
      EightinchPUFOAM2,
      EightinchPUFOAM2,
      EightinchPUFOAM2,
      EightinchPUFOAM2,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Standard-Sofa</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  Chesterfield: {
    images: [
      EightinchPUFOAM3,
      EightinchPUFOAM3,
      EightinchPUFOAM3,
      EightinchPUFOAM3,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Chesterfield</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  Lawson: {
    images: [
      EightinchPUFOAM4,
      EightinchPUFOAM4,
      EightinchPUFOAM4,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Lawson</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  Tuxedo: {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Tuxedo</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "L-Shaped": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">L-Shaped</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  "U-Shaped": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">U-Shaped</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },
  Modular: {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Modular</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
  `,
  },

  "Baffle Box": {
    images: [
      EightinchPUFOAM1,
      EightinchPUFOAM2,
      EightinchPUFOAM3,
      EightinchPUFOAM4,
    ], // Assuming images are not uploaded yet
    description: `
    <div class="text-xl font-semibold my-[6px]">Baffle Box</div>
    <h2 class=" font-bold">Rebonded Foam</h2>
    This type of foam is made from recycled foam scraps that are bonded together under high pressure. It is known for its durability and firmness, providing excellent support for the spine.<br><br>
    <h2 class="font-bold">Orthopedic Support</h2>
    These mattresses are often recommended by doctors for individuals with back pain or spinal issues. They help maintain proper spinal alignment and reduce pressure points, which can alleviate pain and discomfort.<br><br>
    <h2 class="font-bold">Firmness</h2>
    Typically, these mattresses have a soft to firm feel, which is ideal for supporting the natural curve of the spine. This firmness helps in distributing body weight evenly and prevents the mattress from sagging.<br><br>
    <h2 class="font-bold">Soft Comfort</h2>
    Despite the firm support, these mattresses are designed to offer a soft and comfortable sleeping surface. This balance ensures that you get the necessary support without sacrificing comfort.
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

  return (
    <>
      <Link
        to="/products"
        className="back cursor-pointer absolute rounded-md
         bg-red-300 text-black xl:text-[13px] xl:top-[160px] xl:left-[30px] xl:py-[9px] xl:pr-[22px] xl:pl-[25px]
         lg:text-[12px] lg:top-[152px] lg:left-[20px] lg:py-[8px] lg:pr-[22px] lg:pl-[25px]
         md:text-[12px] md:top-[152px] md:left-[20px] md:py-[7px] md:pr-[22px] md:pl-[25px]
         sm:text-[12px] sm:top-[155px] sm:left-[20px] sm:py-[6px] sm:pr-[22px] sm:pl-[25px]"
      >
        BACK
      </Link>
      <div className="product-details-container p-6 flex gap-8 relative xl:mt-10 sm:mt-8 flex-col sm:flex-col xl:flex-row">
        {/* Main image and carousel controls */}
        <div className="flex-1">
          {productInfo.images.length > 0 ? (
            <>
              <div className="main-image relative mb-4">
                <img
                  src={productInfo.images[currentImageIndex]}
                  alt="Main product"
                  className="xl:w-500px] xl:h-[500px] rounded-xl sm:h-[350px] sm:w-[700px] border-2 border-slate-300 bg-slate-400"
                />
                {/* Carousel navigation buttons */}
                <button
                  onClick={handlePrevClick}
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 text-black text-7xl p-2 rounded-full hover:bg-blue-300 h-20"
                >
                  <div className="-mt-5"> &#8249;</div>
                </button>
                <button
                  onClick={handleNextClick}
                  className="absolute top-1/2 xl:right-[28px] md:right-[18px] lg:right-[52px] sm:right-0 transform -translate-y-1/2 text-black text-7xl p-2 rounded-full hover:bg-blue-300 h-20"
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
                    className={`cursor-pointer w-[100px] h-[50px] rounded-xl ${
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
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Product Description</h2>
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: productInfo.description }} // Use dangerouslySetInnerHTML here
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
