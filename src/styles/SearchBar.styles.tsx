import { styled } from "styled-components";

const SearchBarContainer = styled.section`
  margin-bottom: 1.5rem;
  padding: 0 1rem;
`;

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  height: 2rem;
  max-width: 25rem;
  min-width: 18rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 2px 2px #d1d3d2;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  transition: border 0.1s ease-in;
  font-size: 1rem;

  &::placeholder {
    font-size: 1rem;
  }

  &:hover {
    border: 1px solid #00000076;
  }

  &:focus {
    outline: none;
  }
`;
export const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  background-color: #d1d3d2d0;
  height: 100%;
  padding: 0 0.5rem;
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: #d1d3d2;
  }
`;

export default SearchBarContainer;
