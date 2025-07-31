// contexts/ProductContext.jsx
import { createContext, useState } from "react";
import mattressesData from "../data/mattress.json";
import bedsData from "../data/beds.json";
import accessoriesData from "../data/accessories.json";
import sofaData from "../data/sofa.json";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Since we're importing directly, we can initialize state with the data
  const [products] = useState({
    mattresses: mattressesData,
    beds: bedsData,
    sofas: sofaData,
    accessories: accessoriesData,
  });

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
