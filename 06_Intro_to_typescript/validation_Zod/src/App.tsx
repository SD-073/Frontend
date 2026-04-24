import Products from './components/Products';
import WithouztZod from './components/WithouztZod';

function App() {
  type User = {
    id: number;
    name: string;
    email: string;
  };

  return (
    <>
      <Products />
      <WithouztZod />
    </>
  );
}

export default App;
