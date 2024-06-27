

import { getProducts } from "../util";
import { useEffect, useState } from "react";


export const getTheProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const result = await getProducts();
        console.log({ result });
        setProducts(result);
        setLoading(false);
      } catch (error) {
        setError(`Error: ${error.message}`);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return { products, error, loading };
};