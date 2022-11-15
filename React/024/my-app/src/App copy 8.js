function App() {
  return <Hello name="licat" />;
}

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const numComponentsArray = num.map((v) => (
  //   <p>
  //     안녕, {name} {v}호
  //   </p>
  // ));

  // key를 index로 하는 것은 권장하지 않는다.
  // index를 사용하면 나중에 특정 값이 제거되면 순서가 바껴서 문제가 발생할 수 있다.
  // const numComponentsArray = num.map((v, index) => (
  //   <p key={index.toString()}>
  //     안녕, {name} {v}호
  //   </p>
  // ));

  const numComponentsArray = num.map((v) => (
    <p key={v.toString()}>
      안녕, {name} {v}호
    </p>
  ));

  console.log(numComponentsArray);
  return (
    <div>
      {/* <h1>안녕, {name} 1호</h1>
      <h1>안녕, {name} 2호</h1>
      <h1>안녕, {name} 3호</h1>
      <h1>안녕, {name} 4호</h1>
      <h1>안녕, {name} 5호</h1>
      <h1>안녕, {name} 6호</h1>
      <h1>안녕, {name} 7호</h1>
      <h1>안녕, {name} 8호</h1>
      <h1>안녕, {name} 9호</h1>
      <h1>안녕, {name} 10호</h1> */}

      {/* 
      컴포넌트 안에서 리스트를 렌더링할 때에는 꼭 key 값을 넣어줘야한다. 
      키값을 넣어주는 이유는 리엑트에서 랜더링 작업을 진행했을 때 어떤 요소에 변동이 있다면 그 요소만 새로 그려주기 위함이다.
      리스트로 렌더링한다는 것은 콤마를 없애고 요소를 밖으로 꺼내주는 것을 의미한다.
      {['hello', 'world', 3, 4, 5]}
      */}
      {numComponentsArray}
    </div>
  );
}

export default App;
