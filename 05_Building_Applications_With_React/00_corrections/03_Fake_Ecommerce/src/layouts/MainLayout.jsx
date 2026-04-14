import { Outlet } from 'react-router-dom';
import { useProducts } from '../context';
import { fetchAllProducts } from '../server';
import { useEffect } from 'react';

function MainLayout() {
  const { products, setProducts, loading, setLoading, error, setError } = useProducts();
  useEffect(() => {
    fetchAllProducts(setProducts, setLoading, setError);
  }, []);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>copyright 2026</p>
      </footer>
    </div>
  );
}

export default MainLayout;
