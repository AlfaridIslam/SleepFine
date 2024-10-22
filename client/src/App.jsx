import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar.jsx";
// import Products from "./pages/Products/Product.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoToTop from "./components/GoToTop/GoToTop.jsx";
import Whatsaap from "./components/Whatsapp/Whatsapp.jsx";
import ProductTypes from "./pages/ProductTypes/ProductTypes.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";

import Store from "./components/OurStore/OurStore.jsx";

import NotFound from "./pages/NotFound/NotFound.jsx";
import Spinner from "./components/spinner/Spinner.jsx";

import WarrantyForm from "./components/WarrantyForm/WarrantyForm.jsx";
// import WarrantyForm2 from "./components/WarrantyForm/WarrantyForm2.jsx";

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
              {/* <Route path="/products" Component={Products} /> */}

              <Route path="/product-types" element={<ProductTypes />} />

              <Route path="/ourstores" element={<Store />} />

              <Route
                path="/product-details/:productType"
                element={<ProductDetails />}
              />

              <Route path="/warranty-form" element={<WarrantyForm />} />
              {/* <Route path="/warranty-form2" element={<WarrantyForm2/>} /> */}
              

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
