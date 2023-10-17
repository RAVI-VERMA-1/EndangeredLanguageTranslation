import { useState } from "react";
import styled from "styled-components";
import useToto from "./apiCall";
import SearchBar from "./Components/SearchBar";
import DIVMAIN from "./Components/CommulativePara";
import "./index.css";
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: #74c0fc; */
`;
const H2 = styled.h2`
  font-family: "Mooli";
  font-size: 30px;
`;
const DIV1 = styled.div`
  /* display: flex;
    flex-direction: column; */
  /* border: 2px solid #000; */
  /* background-color: #ffe3e3; */
  padding: 20px 4rem;

  height: 100vh;
`;

const About = styled.a`
  color: blue;
  font-weight: 400px;
`;

// const Span = styled.span``;

const Main = styled.main`
  /* border: 2px solid #000; */
`;

// const DIVMAIN = styled.div``;
function App() {
  let [query, setQuery] = useState("");
  const [translatedPara, setTranslatedPara] = useState("");
  if (query.includes(" ")) {
    setQuery("");
  }
  // query = query.toLowerCase();
  const { data } = useToto(
    query.toLowerCase(),
    setQuery,
    translatedPara,
    setTranslatedPara
  );
  // translatedPara != "" ? console.log(translatedPara) : "";

  return (
    <DIV1>
      <Nav>
        <H2>Endangered language Translation</H2>
        <SearchBar query={query} setQuery={setQuery} />
        <About href="https://en.wikipedia.org/wiki/Toto_language">
          About Toto 📚
        </About>
      </Nav>
      <Main>
        <List data={data} query={query} setQuery={setQuery} />
      </Main>

      <DIVMAIN translatedPara={translatedPara} />
    </DIV1>
  );
}

function List({ data, query, setQuery }) {
  return (
    <>
      <h2 className="mt-12">
        <span className="text-xl font-bold">English Word:</span>{" "}
        <span className="text-xl font-Roboto-cursue">{query}</span>
      </h2>
      <h2 className="mt-12">
        <span className="text-xl font-bold">Toto Word:</span>
        {query && (
          <span className="text-xl font-Roboto-cursue">
            {" "}
            {query && data.length > 0 ? (
              data[0]?.toto
            ) : (
              <span className="text-xl text-red-500 ">Not found!!😴</span>
            )}
          </span>
        )}
      </h2>
    </>
  );
}

export default App;
