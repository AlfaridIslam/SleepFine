// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Spinner from "./components/Spinner/Spinner"; // Adjust path if needed
import { ProductProvider } from "./contexts/ProductContext";

const App = () => {
  const [loading, setLoading] = React.useState(false);

  return <ProductProvider>{loading ? <Spinner /> : <RouterProvider router={router} />}</ProductProvider>;
};

export default App;
