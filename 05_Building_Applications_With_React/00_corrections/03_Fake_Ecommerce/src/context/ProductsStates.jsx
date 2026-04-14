import { useState } from "react";
import { ProductsContext } from ".";

function ProductsStates({children}) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsStates