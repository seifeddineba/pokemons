import { gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query samplePokeAPIquery($limit: Int, $offset: Int, $name: String) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      name
      order
      pokemon_species_id
      id
      height
      base_experience
      pokemon_v2_pokemontypes {
        id
        type_id
        slot
        pokemon_v2_type {
          name
        }
      }
      weight
      pokemon_v2_pokemonabilities {
        pokemon_id
        ability_id
        id
        slot
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        id
        sprites
      }
    }
  }
`;

export default GET_POKEMONS;
