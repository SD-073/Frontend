import { PokemonCard, Loading, ErrorMessage } from "../components";
import { useState, useEffect } from "react";
import { fetchPokemons } from "../server/pokeApi";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons(setPokemons, setLoading, setError)
  }, [])
  
  if(loading) return <Loading  />
  if(error) return <ErrorMessage />
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
      {pokemons.map((p) => <PokemonCard key={p.name} name={p.name} url={p.url} />)}
    </div>

  );
};

export default Home;
