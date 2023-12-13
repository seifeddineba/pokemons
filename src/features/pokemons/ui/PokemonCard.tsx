import { useState } from "react";

function PokemonCard({ item }: any) {
  const [showDetails, setShowDetails] = useState(false);

  const imgSrc = JSON.parse(
    item.pokemon_v2_pokemonsprites[0].sprites
  ).front_default;

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div
      className="pokemon-card"
      key={item.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pokemon-name">Name : {item.name}</div>
      {!showDetails ? (
        <>
          <img src={imgSrc} alt="pokemon-image" height="200" width="150" />

          <div className="pokemon-id">ID : {item.id}</div>
          <div className="pokemon-types">
            {item.pokemon_v2_pokemontypes.map((type: any, index: number) => (
              <span key={index} className="type-tag">
                {type.pokemon_v2_type.name}
              </span>
            ))}
          </div>
          <div className="pokemon-abilites">
            {item.pokemon_v2_pokemonabilities.map(
              (ability: any, index: number) => (
                <span key={index} className="abilite-tag">
                  {ability.pokemon_v2_ability.name}
                </span>
              )
            )}
          </div>
        </>
      ) : (
        <>
          <div>Height: {item.height}</div>
          <div>weight: {item.weight}</div>
          {item.pokemon_v2_pokemonstats.map((state: any, index: number) => (
            <div key={index}>
              {state.pokemon_v2_stat.name}: {state.base_stat}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PokemonCard;
