import { useEffect, useState } from 'react';

const Fetch2 = () => {
  const [limit, setLimit] = useState(10);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const getPokemon = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
        );

        if (!res.ok) throw new Error('Something went wrong');

        const data = await res.json();

        if (!ignore) {
          setPokemon(data.results);
        }
      } catch (error) {
        if (!ignore) {
          setError('Failed to fetch pokemons');
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    getPokemon();

    return () => {
      ignore = true;
    };
  }, [limit]);

  return (
    <div>
      <h2>Re-fetching</h2>

      {/* <input type='text' placeholder='Search...' /> */}

      <input
        type='range'
        min={1}
        max={151}
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
      />

      <p>Fetching: {limit}</p>

      {loading && <p>loading..</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <ol>
          {pokemon.map((p) => (
            <li key={p.name}>{p.name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Fetch2;
