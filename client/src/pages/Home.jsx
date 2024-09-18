import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import Testimonial from "../components/Testimonials/Testimonial";
import Footer from "../components/Footer/Footer";
import Section3 from "../components/Section3/Section3";
import { Updates } from "../components/Updates/Updates";
import ContactUS from "../pages/ContactUs/ContactUs.jsx";

const Home = () => {
  return (
    <div className="xl:overflow-hidden">
      <Carousel />
      <Section1 />
      
      <Section3 />
      <Section2 />
      <ContactUS/>
      <Testimonial />
      <Updates />
      <Footer />
    </div>
  );
};

export default Home;
