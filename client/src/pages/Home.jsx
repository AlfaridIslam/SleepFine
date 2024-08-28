import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/Carousel/Carousel'
import Section1 from '../components/Section1/Section1'
import Section2 from '../components/Section2/Section2'
import Testimonial from '../components/Testimonials/Testimonial'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <Carousel/>
        <Section1/>
        <Section2/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home