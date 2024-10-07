import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Section1 from "../components/Section1/Section1";
// import Section2 from "../components/Section2/Section2";
import Testimonial from "../components/Testimonials/Testimonial";
import Footer from "../components/Footer/Footer";
// import Section3 from "../components/Section3/Section3";
import { Updates } from "../components/Updates/Updates";
import ProductsScrolling from "../components/ProductsScrolling/ProductsScrolling";
import HeroSection from "../components/HeroSection/HeroSection";
import Offersdisplay from "../components/Offers/OffersDisplay";
import ContactForm from "../components/ContactForm/ContactForm";


const Home = () => {
  return (
    <div className="xl:overflow-hidden">
      <HeroSection/>
      {/* <Carousel /> */}
      {/* <Section1 /> */}


      {/* <Section3 /> */}
      {/* <Section2 /> */}

      <ProductsScrolling />

      <Testimonial />

     
      <Updates />
      <Offersdisplay/>
      {/* <ContactForm/> */}
      <Footer />
    </div>
  );
};

export default Home;
