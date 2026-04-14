import {
  Loading,
  ErrorMessage,
  PokemonGeneral,
  Accordion,
  PokemonAbilities,
  PokemonStats,
  PokemonCries,
  PokemonSprites,
} from '../components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonByName } from '../server/pokeApi';

const Details = () => {
  const {name} = useParams();

  console.log(name)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonByName(setPokemon, setLoading, setError, name)
  }, [name])
  
  if(loading) return <Loading />
  if(error) return <ErrorMessage />
  console.log(pokemon)
  return (
    <>
      <PokemonGeneral name={pokemon.name} id={pokemon.id} />
      <Accordion title='Abilities' defaultChecked={true}>
        <PokemonAbilities abilities={pokemon.abilities} />
      </Accordion> 
       <Accordion title='Stats'>
        <PokemonStats stats={pokemon.stats} />
      </Accordion>
      <Accordion title='Cries'>
        <PokemonCries cries={pokemon.cries} />
      </Accordion>
      <Accordion title='Sprites'>
        <PokemonSprites sprites={pokemon.sprites} />
      </Accordion>
    </>
  );
};

export default Details;
