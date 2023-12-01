import PokemonCard from "./PokemonCard";

function PokemonList({ data }: any) {
  return (
    <div className="pokemon-list">
      {data &&
        data.pokemon_v2_pokemon.length > 0 &&
        data.pokemon_v2_pokemon.map((item: any) => (
          <PokemonCard item={item} key={item.id} />
        ))}
    </div>
  );
}

export default PokemonList;
