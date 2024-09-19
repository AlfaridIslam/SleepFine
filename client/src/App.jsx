import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar.jsx";
import Products from "./pages/Products/Product.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoToTop from "./components/GoToTop/GoToTop.jsx";
import Whatsaap from "./components/Whatsapp/Whatsapp.jsx";
import ProductTypes from "./pages/ProductTypes/ProductTypes.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import NewsandUpdate from "./components/NewsandUpdates/NewsUpdate.jsx";
import Store from "./components/OurStore/OurStore.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Spinner from "./components/spinner/Spinner.jsx";

function App() {
  const [loading, setLoading] = useState(true); // Spinner state

  // Simulate an API call or loading effect with useEffect
  useEffect(() => {
    // Mock loading for 2 seconds, replace with your API logic
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Spinner />} {/* Conditionally render the spinner */}
      {!loading && (
        <>
          <Router>
            <Navbar />

            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/products" Component={Products} />
              <Route path="/aboutus" Component={AboutUs} />
              <Route path="/contactus" Component={ContactUs} />
              <Route path="/gallery" Component={Gallery} />

              <Route path="/product-types" element={<ProductTypes />} />
              <Route path="/updates" element={<NewsandUpdate />} />
              <Route path="/ourstores" element={<Store />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route
                path="/product-details/:productType"
                element={<ProductDetails />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>

          <GoToTop />
          <Whatsaap />
        </>
      )}
    </>
  );
}

export default App;
