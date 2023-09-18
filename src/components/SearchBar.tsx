import { useState } from "react";
import SearchBarContainer, {
  SearchButton,
  SearchForm,
  SearchInput,
} from "../styles/SearchBar.styles";

interface SearchBarProps {
  setQuery: (query: string) => void;
}

const SearchBar = ({ setQuery }: SearchBarProps) => {
  const [queryInput, setQueryInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(queryInput);
    setQueryInput("");
  };

  return (
    <SearchBarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search for photos"
          value={queryInput}
          onChange={(e) => {
            setQueryInput(e.target.value);
          }}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
    </SearchBarContainer>
  );
};

export default SearchBar;
