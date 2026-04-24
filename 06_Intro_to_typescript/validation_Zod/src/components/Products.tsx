import { useEffect, useState } from 'react';
import { ProductSchema, type Product } from '../schemas';
import { z } from 'zod/v4';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLodaing] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLodaing(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Network error');

        const resData = await res.json();
        // console.log(resData);

        // ...validate
        const { data, error, success } = z
          .array(ProductSchema)
          .safeParse(resData);
        if (!success) throw new Error(z.prettifyError(error));

        setProducts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLodaing(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
