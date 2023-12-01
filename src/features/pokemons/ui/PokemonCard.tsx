function PokemonCard({ item }: any) {
  const imgSrc = JSON.parse(
    item.pokemon_v2_pokemonsprites[0].sprites
  ).front_default;
  return (
    <div className="pokemon-card" key={item.id}>
      <img src={imgSrc} alt="pokemon-image" height="200" width="150" />
      <div className="pokemon-name">Name : {item.name}</div>
      <div className="pokemon-id">ID : {item.id}</div>
      <div className="pokemon-name">Height : {item.height}</div>
      <div className="pokemon-types">
        {item.pokemon_v2_pokemontypes.map((type: any, index: number) => (
          <span key={index} className="type-tag">
            {type.pokemon_v2_type.name}
          </span>
        ))}
      </div>
      <div className="pokemon-abilites">
        {item.pokemon_v2_pokemonabilities.map((ability: any, index: number) => (
          <span key={index} className="abilite-tag">
            {ability.pokemon_v2_ability.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
