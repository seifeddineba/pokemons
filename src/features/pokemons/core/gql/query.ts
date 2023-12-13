import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = (name: string, typeId: string) => {
  if (typeId) {
    return gql`
      query samplePokeAPIquery($typeId: Int, $limit: Int) {
        pokemon_v2_pokemon(
          where: { pokemon_v2_pokemontypes: { id: { _eq: $typeId } } }
          limit: $limit
        ) {
          name
          order
          id
          height
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
          pokemon_v2_pokemonstats {
            base_stat
            effort
            pokemon_v2_stat {
              name
            }
          }
        }
      }
    `;
  }
  if (name) {
    return gql`
      query samplePokeAPIquery($name: String, $limit: Int) {
        pokemon_v2_pokemon(where: { name: { _like: $name } }, limit: $limit) {
          name
          order
          id
          height
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
          pokemon_v2_pokemonstats {
            base_stat
            effort
            pokemon_v2_stat {
              name
            }
          }
        }
      }
    `;
  } else {
    return gql`
      query samplePokeAPIquery($offset: Int, $limit: Int) {
        pokemon_v2_pokemon(limit: $limit, offset: $offset) {
          name
          order
          id
          height
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
          pokemon_v2_pokemonstats {
            base_stat
            effort
            pokemon_v2_stat {
              name
            }
          }
        }
      }
    `;
  }
};

export const GET_ALL_TYPES = gql`
  query samplePokeAPIquery {
    pokemon_v2_type(limit: 20, offset: 0) {
      id
      name
    }
  }
`;
