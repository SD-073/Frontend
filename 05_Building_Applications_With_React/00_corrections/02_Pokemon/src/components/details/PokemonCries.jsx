const PokemonCries = ({cries}) => {
  const rendresCries = (cries) => {
    return Object.keys(cries).map((key) => {
      if(cries[key]) {
        return (
          <div key={key}>
            <audio controls>
              <source src={cries[key]} type="audio/mpeg"  />
            </audio>
          </div>
        )
      }
    }
    )
  }
  return <div className='flex flex-wrap items-center justify-around gap-2'>{rendresCries(cries)}</div>;
};

export default PokemonCries;
