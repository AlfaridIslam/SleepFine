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

const Home = () => {
  // SEO metadata
  const seoData = {
    title:
      "Sleep Fine | Quality Mattresses & Bedding Solutions | Quality Home Furniture & Decor",
    description:
      "Discover our wide range of quality furniture including sofas, mattress, beds and home decor. Find the perfect pieces for your home with our exclusive collection.",
    keywords:
      "quality mattresses, orthopedic mattresses, memoryfoam, cooling technology, hypoallergenic materials, restful sleep,mattress durability, king size mattress 78x72, single bed mattress 3x6 feet, queen size mattress 78x60, air bed mattress, air pump bed,waterproof mattress cover, old mattress exchange offer, mattressmanufacturing in Hyderabad, mattresses in Telangana, Alwal mattressmanufacturers, South India mattress business.",
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
            "@type": "Mattress Store",
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
        <Footer />
      </div>
    </>
  );
};

export default Home;
