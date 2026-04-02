import { useState } from 'react';
import Basics from './components/Basics';
import Cleanup from './components/Cleanup';
import Pokemons from './components/Pokemons';
import Fetch2 from './components/Fetch2';

function App() {
  const [showCleanup, setShowCleanup] = useState(true);

  return (
    <>
      <h2>useEffect</h2>
      {/* <Basics /> */}
      {/* <button onClick={() => setShowCleanup((prev) => !prev)}>
        {showCleanup ? 'Unmount Cleanup' : 'Mount Cleanup'}
      </button>
      {showCleanup ? <Cleanup /> : <p>cleanup is hidden</p>} */}

      {/* <Pokemons /> */}

      <Fetch2 />
    </>
  );
}

export default App;
