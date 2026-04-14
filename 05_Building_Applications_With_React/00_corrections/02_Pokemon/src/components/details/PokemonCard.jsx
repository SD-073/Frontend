import {Link} from "react-router-dom";

const PokemonCard = ({name, url}) => {
  
  return (
    <div className='card bg-neutral  shadow-xl'>
      <figure>
        <img
          src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/1.png`}
          width='40%'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title capitalize text-primary'>
          {name}
          <Link to={`/pokemon/${name}`} className='btn btn-secondary'>
            Learn more
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default PokemonCard;
