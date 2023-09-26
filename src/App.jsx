import { useEffect, useState } from "react";
import styled from "styled-components";
import supabase from "./supabase";
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

const Main = styled.main`
  /* border: 2px solid #000; */
`;
const TranslatedSentance = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: "Inter";
  border: 2px dashed #000;
  height: 20vh;
  padding: 5px 15px;
  color: green;
`;

// const DIVMAIN = styled.div``;
function App() {
  const [query, setQuery] = useState("");
  const [translatedPara, setTranslatedPara] = useState("");
  if (query.includes(" ")) {
    setQuery("");
  }
  const { data } = useToto(query, setQuery, translatedPara, setTranslatedPara);
  translatedPara != "" ? console.log(translatedPara) : "";

  return (
    <DIV1>
      <Nav>
        <H2>Endagered language Translation</H2>
        <SearchBar query={query} setQuery={setQuery} />
      </Nav>
      <Main>
        <List data={data} query={query} setQuery={setQuery} />
      </Main>

      <DIVMAIN translatedPara={translatedPara} />
    </DIV1>
  );
}

function SearchBar({ query, setQuery }) {
  return (
    <ToSearch>
      <Input
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

function useToto(query, setQuery, translatedPara, setTranslatedPara) {
  const [data, setData] = useState([]);
  useEffect(
    function () {
      async function totoData() {
        let { data: vocab } = await supabase
          .from("vocab")
          .select("toto")
          .eq("english", query);
        // console.log(query);
        // console.log(data);
        console.log(vocab);
        // vocab?.length > 0 && console.log(data);
        setData(vocab);
        if (data?.length > 0 && !translatedPara.includes(data[0].toto)) {
          setTranslatedPara((i) => i + " " + data[0]?.toto);
        }
      }
      totoData();
    },
    [query]
  );

  return { data };
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
        <span className="text-xl font-Roboto-cursue">
          {" "}
          {query && data.length > 0 && data[0]?.toto}
        </span>
      </h2>
    </>
  );
}

function DIVMAIN({ translatedPara }) {
  return (
    <div className="mt-12">
      <p className="text-xl font-bold mb-4">commulative sentance:</p>
      <TranslatedSentance>{translatedPara}</TranslatedSentance>
    </div>
  );
}
export default App;
