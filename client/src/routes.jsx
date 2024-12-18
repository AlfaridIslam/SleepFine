// src/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ProductTypes from "./pages/ProductTypes/ProductTypes";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Store from "./components/OurStore/OurStore";
import Blog from "./components/Blog/Blog";
import WarrantyForm from "./components/WarrantyForm/WarrantyForm";
import NotFound from "./pages/NotFound/NotFound";


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product-types", element: <ProductTypes /> },
      { path: "/ourstores", element: <Store /> },
      { path: "/blog", element: <Blog /> },
      { path: "/product-details/:productType", element: <ProductDetails /> },
      { path: "/warranty-form", element: <WarrantyForm /> },
      { path: "*", element: <NotFound /> },
      {
        path: "/product-details/*",
        element: <NotFound />,
      },
     
    ],
  },
]);
