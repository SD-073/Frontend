import { useProducts } from '../contexts';

function ProductList({ fakeProducts, fakeLoading, fakeError }) {
  const { products } = useProducts();

  return (
    <div>
      <h2>List of products</h2>
      {products.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </div>
  );
}

export default ProductList;
