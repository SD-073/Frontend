import { Outlet } from 'react-router-dom';
import { useProducts } from '../contexts';
import { fetchAllProducts } from '../server';
import { useEffect } from 'react';

function MainLayout() {
  const { products, setProducts, loading, setLoading, error, setError } = useProducts();
  useEffect(() => {
    fetchAllProducts(setProducts, setLoading, setError);
  }, []);

  return (
    <div className='grid '>
      <header className='bg-neutral'>
        <nav className='navbar flex items-center'>
          <div className='navbar-start'>
            <h1 className='btn btn-ghost'>Fake Ecommerce</h1>
          </div>
          <div className='navbar-end gap-4'>
            <li className='btn btn-link no-underline'>Home</li>
            <li className='btn btn-link no-underline'>About</li>
          </div>
        </nav>
      </header>
      <main className='pt-4'>
        <Outlet />
      </main>
      <footer className='bg-neutral text-center p-4 mt-4'>
        <p>copyright 2026</p>
      </footer>
    </div>
  );
}

export default MainLayout;
