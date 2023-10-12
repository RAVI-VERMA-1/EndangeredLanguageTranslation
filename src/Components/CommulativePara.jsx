import styled from "styled-components";
const TranslatedSentance = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: "Inter";
  border: 2px dashed #000;
  height: 20vh;
  padding: 5px 15px;
  color: green;
`;
function DIVMAIN({ translatedPara }) {
  return (
    <div className="mt-12">
      <p className="text-xl font-bold mb-4">commulative sentance:</p>
      <TranslatedSentance>{translatedPara}</TranslatedSentance>
    </div>
  );
}
export default DIVMAIN;
