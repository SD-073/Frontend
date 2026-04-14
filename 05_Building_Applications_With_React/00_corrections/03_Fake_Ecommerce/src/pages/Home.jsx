import { useProducts } from "../context";
import { ProductList } from "../components";

function Home({fakeProducts, fakeLoading, fakeError}) {
  const {loading, error} = useProducts();
  

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error! {error}</p>
  return (
    <div>
        <h1>Fake eCommerce Home</h1>
        <ProductList fakeProducts={fakeProducts} fakeLoading={fakeLoading} fakeError={fakeError} />
    </div>
  )
}

export default Home;