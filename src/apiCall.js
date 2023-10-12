import { useEffect, useState } from "react";
import supabase from "./supabase";
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

export default useToto;
