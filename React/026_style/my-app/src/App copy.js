import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// createGlobalStyle은 결국 함수라는 뜻이다! ->  tagged tamplate literal.js 참고
const GlobalStyle = createGlobalStyle`
${reset}
span {
  color: red;
}
`;

function One() {
  return (
    <section>
      <h2>hello one</h2>
      <span>hello</span>
    </section>
  );
}

function Two() {
  return (
    <section>
      <h2>hello two</h2>
      <span>hello</span>
    </section>
  );
}

function App() {
  // console.log("// reset");
  // console.log(reset);
  // console.log(reset[0]);
  return (
    <>
      <GlobalStyle />
      <h1>Hello World!</h1>
      <span>hello world</span>
      <One />
      <Two />
    </>
  );
}

export default App;
