// function Header() {
//   return (
//     <>
//       <h1 class="tit-law">
//         <img src="img/title.png" alt="1만 시간의 법칙" class="img-tit" />
//       </h1>
//       <img
//         src="img/txt_subtitle.png"
//         alt="연습은 어제의 당신보다 당신을 더 낫게 만든다."
//         class="img-txt"
//       />
//       <p class="txt-desc">
//         <strong class="tit-desc">1만 시간의 법칙</strong>은<br />
//         어떤 분야의 전문가가 되기 위해서는
//         <br />
//         최소한 1만 시간의 훈련이 필요하다는 법칙이다.
//       </p>
//     </>
//   );
// }

// function Form() {
//   return (
//     <form class="cont-inp">
//       <p class="txt-wannabe">
//         나는
//         <input
//           id="inp-field"
//           type="text"
//           placeholder="예) 프로그래밍"
//           required
//         />
//         전문가가 될 것이다.
//       </p>
//       <p class="txt-time">
//         그래서 앞으로 매일 하루에
//         <input id="inp-time" type="number" placeholder="예) 5" required />
//         시간씩 훈련할 것이다.
//       </p>
//       <button type="button" class="btn-exc">
//         나는 며칠 동안 훈련을 해야 1만 시간이 될까?
//       </button>
//     </form>
//   );
// }

// function Loading() {
//   return (
//     <section class="cont-result-loading">
//       <h2 class="blind">결과 확인 로딩중</h2>
//       <img class="img-rotate" src="img/loading.png" alt="" />
//     </section>
//   );
// }

// function Result() {
//   return (
//     <section class="cont-result">
//       <h2 class="blind">결과 확인</h2>
//       <p class="txt-wannabe">
//         당신은
//         <strong class="field-result"></strong>
//         전문가가 되기 위해서
//         <br />
//         대략
//         <strong class="time-result"></strong>일 이상 훈련하셔야 합니다!
//       </p>
//       <button class="btn-go">훈련하러 가기 GO!GO!</button>
//       <button class="btn-share">공유하기</button>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer class="cont-footer">
//       <img class="img-footer" src="img/weniv.png" alt="" />
//       <p class="txt-footer">
//         &#8251; 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에
//         있습니다.
//       </p>
//       <p>수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
//     </footer>
//   );
// }

import { Header } from "./Components/Header";
import { Form } from "./Components/Form";
import { Loading } from "./Components/Loading";
import { Result } from "./Components/Result";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Form />
      <Loading />
      <Result />
      <Footer />
    </main>
  );
}

export default App;
