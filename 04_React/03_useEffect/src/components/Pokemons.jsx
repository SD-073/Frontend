import { useEffect, useState } from 'react';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        console.log(data.results);
        setPokemons(data.results);
      } catch (error) {
        console.error('error fetching pokemons', error);
        setError('Failed to fetch pokemons');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Fetch</h2>
      <div>
        {loading && <p>loading</p>}
        {error && <p>{error}</p>}

        {!loading && !error && (
          <ul>
            {pokemons.map((p) => (
              <li key={p.name}>{p.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Pokemons;
