import Button from "./Button";
import { ISearchProps } from "../interfaces/ISearchBarProps";

function SearchBar(props: ISearchProps) {
  return (
    <form onSubmit={(e) => props.onSearch(e)} className="search-box">
      <input type="text" name="pokemonName" onChange={props.onChange} />
      <Button color="red" title="search" name="serachButton" type="submit" />
    </form>
  );
}

export default SearchBar;
