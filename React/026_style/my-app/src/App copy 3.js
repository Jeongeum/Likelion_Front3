import styled from "styled-components";

const ContentsDivOne = styled.div`
  color: red;
`;

// styled 함수의 div 메서드이기 때문에 props 가 들어갈 수 있다.
const ContentsDivTwo = styled.div`
  color: green;
  font-size: ${(props) => props.size + "px"};
`;

const ContentsDivThree = styled.div`
  color: ${(옵션) => (옵션.option === "하나" ? "red" : "pink")};
`;

const ContentsDivFour = styled.div`
  color: red;
  ${({ border }) => border}
`;

function App() {
  return (
    <>
      <ContentsDivOne>hello</ContentsDivOne>
      <ContentsDivTwo size={32}>world</ContentsDivTwo>
      <ContentsDivThree option={"하나"}>option!</ContentsDivThree>
      <ContentsDivThree option={"둘"}>option!</ContentsDivThree>
      <ContentsDivFour border="border : 1px solid black">
        option!
      </ContentsDivFour>
    </>
  );
}
export default App;
