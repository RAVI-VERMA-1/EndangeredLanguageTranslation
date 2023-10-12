import styled from "styled-components";

const ToSearch = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4rem;
`;
const Input = styled.input`
  display: inline-block;
  border: 2px solid #000;
  border-radius: 7px;
  width: 20rem;
  font-size: 20px;
  padding: 3px 6px;
  font-family: "Nunito";
  font-weight: 500;
`;
function SearchBar({ query, setQuery }) {
  return (
    <ToSearch>
      <Input
        className="focus:ring focus:ring focus:ring-green-300"
        autoFocus
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter english word..."
      />
      {/* <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter toto word..."
        /> */}
    </ToSearch>
  );
}

export default SearchBar;
