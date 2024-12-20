import React from "react";
import { Helmet } from "react-helmet";
import Carousel from "../components/Carousel/Carousel";
import Section1 from "../components/Section1/Section1";
import Testimonial from "../components/Testimonials/Testimonial";
import Footer from "../components/Footer/Footer";
import { Updates } from "../components/Updates/Updates";
import ProductsScrolling from "../components/ProductsScrolling/ProductsScrolling";
import HeroSection from "../components/HeroSection/HeroSection";
import Offersdisplay from "../components/Offers/OffersDisplay";
import ContactForm from "../components/ContactForm/ContactForm";
import SofaSample from "../components/SofaSample/SofaSample";
import MeasurementSection from '../components/MeasurementSection/MeasurementSection'
 

const Home = () => {
  // SEO metadata
  const seoData = {
    title:
      "Sleep Fine | Quality Mattresses & Bedding Solutions | Quality Home Furniture & Decor",
    description:
      "Discover our wide range of quality furniture including sofas, mattress, beds and home decor. Find the perfect pieces for your home with our exclusive collection.",
    keywords:
      "quality mattresses, orthopedic mattresses, memory foam, cooling technology, hypoallergenic materials, restful sleep,mattress durability, king size mattress 78x72, single bed mattress 3 x6 feet, queen size mattress 78x60, air bed mattress, air pump bed, spine relief mattress, doctor approved,waterproof mattress cover,mattress exchanged , spine care mattress , spine cure mattress,mattresses in best price Foldable mattress , soft comfort mattress , firm comfort mattress , soft comfort mattress , medium comfort mattress,mattresses near me , mattress near me  old mattress exchange offer, mattresses in best price, mattress , sleep fine,mattress manufacturing , sleepfine, sleepfineindia, sleep fine india, High resilience foam mattresses , HR foam mattress , super soft foam mattress, dual comfort mattress, mattress shop near me , mattresses in Alwal , mattresses in Secunderabad,mattresses in Hyderabad, mattresses in warangal , mattresses in hafiz baba nagar , mattresses in santosh nagar , mattresses in Kompally , mattresses in bangalore , mattresses in madhapur , mattresses in Hitec city , mattresses in chennai,mattresses in vizag , mattresses in vishakapatnam , mattresses in kurnool , mattresses in mehboob nagar , mattresses in jadcherla,mattress in hostel, mattresses in hotel, furniture store near me , furniture store near by , mattress store in shadnagar,beds in alwal , sofas in alwal , pillows in alwal, mattress protector in alwal, pillows, memory foam pillows, mattresses in india , best mattresses in india , best quality mattresses in Hyderabad, best manufacturing company in india, best manufacturing company in hyderabad, best manufacturing company in south india, manufacturing in Hyderabad, mattresses in Telangana, Alwal mattress, best quality mattress in low price, 10 years warranty manufactures,mattresses with warranty, iso certified mattress ,iso certified mattress in india , iso certified mattress in hyderabad,technology based mattress, infection free mattress , anti bacterial mattress, cool gel based mattress, cool gel technology mattress,nature based mattress , natural mattress , customized mattress, best customized mattress in india , best customized mattress in hyderabad,customized mattress in india, customized mattress in Hitec city ,customized mattress in Alwal,customized mattress in kompally,customized mattress in hafiz baba nagar, customized mattress in Hyderabad, eco friendly mattress, customized mattress in madhapur,eco friendly mattress in madhapur , eco friendly mattress in Hitec city, eco friendly mattress in hyderabad, eco friendly mattress in alwal,eco friendly mattress near me, mattress for old age, comfort mattress for senior citizen, mattress for children, mattress for babies,comfortable mattress for children, comfortable mattress for babies,manufacturers, South India mattress business.",
    // Add your actual website URL
    canonicalUrl: "https://sleepfineindia.com/",
    // Add your actual image URL
    ogImage: "https://yourwebsite.com/images/og-image.jpg",
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />

        {/* Canonical URL */}
        <link rel="canonical" href={seoData.canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Sleep Fine " />

        {/* Structured Data / JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Mattress Store | Furniture Store",
            name: "Sleep Fine",
            description: seoData.description,
            image: seoData.ogImage,
            url: seoData.canonicalUrl,
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "vasai habit building, Jyothinagar, Surya Nagar, Bolarum, Secunderabad, Hyderabad ",
              addressLocality: "ALWAL",
              addressRegion: "TELANGANA",
              postalCode: "500010",
              addressCountry: "INDIA",
            },
          })}
        </script>
      </Helmet>

      <div className="xl:overflow-hidden">
        <HeroSection />
        <Section1 />
        <ProductsScrolling />
        <Testimonial />
        <Updates />
        <Offersdisplay/>
        <MeasurementSection/>
       
        <Footer />
      </div>
    </>
  );
};

export default Home;
