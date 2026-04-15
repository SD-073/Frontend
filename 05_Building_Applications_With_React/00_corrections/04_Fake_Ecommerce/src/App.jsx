import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsStates } from './contexts';
import { MainLayout } from './layouts';
import { Home, Categories } from './pages';
import { useState, useEffect } from 'react';
import { fetchAllProducts } from './server';

function App() {
  const [fakeProducts, setFakeProducts] = useState([]);
  const [fakeLoading, setFakeLoading] = useState(true);
  const [fakeError, setFakeError] = useState(null);

  useEffect(() => {
    fetchAllProducts(setFakeProducts, setFakeLoading, setFakeError);
  }, []);
  return (
    <Router>
      <ProductsStates>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route
              index
              element={<Home fakeProducts={fakeProducts} fakeLoading={fakeLoading} fakeError={fakeError} />}
            />
            <Route path='/categories' element={<Categories />} />
          </Route>
        </Routes>
      </ProductsStates>
    </Router>
  );
}

export default App;
