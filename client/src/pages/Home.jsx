import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import Section1 from '../components/Section1/Section1'
import Section2 from '../components/Section2/Section2'
import Testimonial from '../components/Testimonials/Testimonial'
import Footer from '../components/Footer/Footer'
import Whatsapp from '../components/Whatsapp/Whatsapp'
import Section3 from '../components/Section3/Section3'
import { Updates } from '../components/Updates/Updates'
import FooterSample from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        
        <Carousel/>
        <Section1/>
       
        <Whatsapp/>

        
        <Section3/>
        <Section2/>
        <Testimonial/>
        <Updates/>
       
       < Footer/>
       
    </div>
  )
}

export default Home