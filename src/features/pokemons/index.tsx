import React, { useState } from "react";
import PokemonList from "./ui/PokemonList";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS, GET_ALL_TYPES } from "./core/gql/query";
import TypesBox from "../../components/TypesBox";

function Pokemons() {
  const [filter, setFilter] = useState<any>({
    offset: 0,
    limit: 9,
    name: "",
    typeId: null,
  });

  const { loading, error, data } = useQuery(
    GET_ALL_POKEMONS(filter.name, filter.typeId),
    {
      variables: {
        ...filter,
        name: `%${filter.name}%`,
      },
    }
  );

  if (error) {
    alert(error.message);
  }

  const {
    loading: loadingTypes,
    error: errorTypes,
    data: dataTypes,
  } = useQuery(GET_ALL_TYPES);

  if (errorTypes) {
    alert(errorTypes.message);
  }

  const onSearch = (e: any) => {
    e.preventDefault();

    setFilter({ ...filter, name: e.target[0].value });
  };

  const handlePreviousPage = () => {
    setFilter({ ...filter, offset: filter.offset - filter.limit });
  };
  const handleNextPage = () => {
    setFilter({ ...filter, offset: filter.offset + filter.limit });
  };

  const handleSearchType = (typeId: number) => {
    setFilter((prevFilter: any) => {
      if (prevFilter.typeId === typeId) {
        return { ...prevFilter, typeId: null };
      } else {
        return { ...prevFilter, typeId: typeId };
      }
    });
  };

  return (
    <div className="contanier">
      <h1>Pokemons</h1>

      <div className="pokemon-wrapper">
        <SearchBar onSearch={onSearch} />

        <TypesBox types={dataTypes} handleSearchType={handleSearchType} />

        {loading ? <p>loading</p> : <PokemonList data={data} />}
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
