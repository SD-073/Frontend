import { useProducts } from '../contexts';
import { ProductList } from '../components';
import {ProductCard } from "../components"

function Home({ fakeProducts, fakeLoading, fakeError }) {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error}</p>;
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Fake eCommerce Home</h1>
      {/* <ProductList fakeProducts={fakeProducts} fakeLoading={fakeLoading} fakeError={fakeError} /> */}
      <div className='flex flex-wrap gap-3 items-center w-[98%] p-3'>
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      
    </div>
  );
}

export default Home;
