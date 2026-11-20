import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

/**
 * Hook que carrega a lista de produtos da API.
 * @returns {{ products: object[], loading: boolean, error: string | null }}
 */
export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false; // evita atualizar estado de componente desmontado

    getProducts()
      .then((data) => {
        if (!ignore) setProducts(data);
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return { products, loading, error };
}
