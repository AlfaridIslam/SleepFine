// src/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ProductTypes from "./pages/ProductTypes/ProductTypes";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Store from "./components/OurStore/OurStore";
import Blog from "./components/Blog/Blog";
import WarrantyForm from "./components/WarrantyForm/WarrantyForm2";
import NotFound from "./pages/NotFound/NotFound";
import MeasurementVideoPage from './pages/MeasurementVideoPage/MeasurementVideoPage';
import Login from './pages/Login';
import { adminRoutes } from "./routes/AdminRoutes";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { 
        path: "/", 
        element: <Home />
      },
      { 
        path: "/product-types", 
        element: <ProductTypes />
      },
      { 
        path: "/ourstores", 
        element: <Store />
      },
      { 
        path: "/blog", 
        element: <Blog />
      },
      { 
        path: "/product-details/:productType", 
        element: <ProductDetails />
      },
      { 
        path: "/warranty-form", 
        element: <WarrantyForm />
      },
      {
        path: "/measurement-video", 
        element: <MeasurementVideoPage />
      },
      {
        path: "/product-details/*",
        element: <NotFound />,
      },
      // Login route
      {
        path: "/login",
        element: <Login />
      },
      // Admin routes - spread the admin routes array
      ...adminRoutes,
      { 
        path: "*", 
        element: <NotFound />
      },
    ],
  },
]);
