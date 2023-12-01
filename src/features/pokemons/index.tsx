import React, { useState } from "react";
import PokemonList from "./ui/PokemonList";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import { useQuery } from "@apollo/client";
import GET_POKEMONS from "./core/gql/query";

function Pokemons() {
  const [filter, setFilter] = useState<any>({ offset: 9, limit: 9, name: "" });

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: filter,
  });

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {};
  const onChange = (e: any) => {
    setFilter({ ...filter, name: e.target.value });
  };
  const handlePreviousPage = () => {
    setFilter({ ...filter, offset: filter.offset - filter.limit });
  };
  const handleNextPage = () => {
    setFilter({ ...filter, offset: filter.offset + filter.limit });
  };
  return (
    <div className="contanier">
      <h1>Pokemons</h1>
      <div className="pokemon-wrapper">
        <SearchBar onSearch={onSearch} onChange={onChange} />
        <PokemonList data={data} />
        <Pagination
          filter={filter}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      </div>
    </div>
  );
}

export default Pokemons;
