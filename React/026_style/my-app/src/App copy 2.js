import styled from "styled-components";

const ContentsDivOne = styled.div`
  color: red;
`;

const ContentsDivTwo = styled.div`
  color: green;
`;

const ContentsDivThree = styled.div`
  color: blue;
`;

const SectionTitle = styled.h2`
  color: lightblue;
  font-size: 32px;
`;

function App() {
  return (
    <>
      <SectionTitle>hello</SectionTitle>
      <ContentsDivOne>Hello world</ContentsDivOne>
      <ContentsDivTwo>Hello world</ContentsDivTwo>
      <ContentsDivThree>Hello world</ContentsDivThree>
    </>
  );
}

export default App;
