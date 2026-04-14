export const fetchPokemons = async (setPokemons, setLoading, setError) => {
  try {
    setLoading(true);
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    if (!res.ok) throw new Error('Failed to fetch!');
    const data = await res.json();
    setPokemons(data.results);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

export const fetchPokemonByName = async (setPokemon, setLoading, setError, name) => {
    try {
      setLoading(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!res.ok) throw new Error('Failed to fetch!');
      const data = await res.json();
      setPokemon(data)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
};
