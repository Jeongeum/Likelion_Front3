// 복습 react 9~10번

// step 1 컴포넌트 리스트 만들기

// key 값이 없으면 에러가 난다.
// key 값은 숫자 또는 문자로 가능하다.
// key 값은 인덱스 값으로 할 경우 순서에 대한 문제가 생기므로 권장하지 않는다.

// const arr = [10, 20, 30, 40, 50];
// function App() {
//   return (
//     <div>
//       {/* {arr.map(v => <p>{v}</p>)} */}
//       {arr.map((v) => (
//         <p key={v.toString()}>{v}</p>
//       ))}
//     </div>
//   );
// }

// step 2 조건부 렌더링
// 조건에 따라 다른 것을 렌더링한다.

// const value = 1;

// function App() {
//   if (value === 1) {
//     return <h1>hello 1</h1>;
//   } else if (value === 2) {
//     return <h1>hello 2</h1>;
//   } else if (value === 3) {
//     return <h1>hello 3</h1>;
//   }
// }

// step 3 스타일 적용하기
// npm install styled-components
// npm i styled-reset

import styled from "styled-components";

const DivBlue = styled.div`
  color: blue;
`;

const DivRed = styled.div`
  color: red;
`;

function App() {
  return (
    <>
      <DivBlue>Hello</DivBlue>
      <DivRed>Hello</DivRed>
    </>
  );
}
export default App;
