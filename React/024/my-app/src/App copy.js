function Resume({ 이름, 취미, 자기소개 }) {
  let like = 0;

  function clickLike() {
    like += 1;
    console.log(like);
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      {/* 여기서의 like는 변하지 않는다. 왜?
      변수가 변경이 된다 하더라도 렌더링이 다시 일어나지 않기 때문이다.
      모든 변수가 변할 때 마다 컴포넌트를 업데이트 한다면 많은 리소스가 낭비된다.
      특정 변수를 지정하여 그 변수가 변할때마다 페이지를 업데이트하라는 명령을 내려줘야 한다.
      */}
      <button onClick={clickLike}>{like}</button>
    </section>
  );
}

function App() {
  return (
    <main>
      <Resume
        이름="안정음"
        취미="노래듣기"
        자기소개="안녕하세요. 프론트엔드 취준생 안정음입니다."
      />
    </main>
  );
}

export default App;
