// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ProductProvider } from "./contexts/ProductContext";
import { AuthProvider } from "./modules/auth/AuthContext";
// import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    // <ErrorBoundary>
      <AuthProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </AuthProvider>
    // </ErrorBoundary>
  );
};

export default App;

const port = 1000
