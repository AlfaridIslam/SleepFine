// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Spinner from "./components/spinner/Spinner"; // Adjust path if needed

const App = () => {
  const [loading, setLoading] = React.useState(false);

  return <>{loading ? <Spinner /> : <RouterProvider router={router} />}</>;
};

export default App;
