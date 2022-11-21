import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [checkRender, setCheckRender] = useState(false);
  const countUp = () => {
    setCount(count + 1);
  };
  // 배열에 변수가 있는 경우, 변수의 변화가 일어날때마다 실행
  // true, false에 따라
  useEffect(() => {
    if (checkRender) {
      if (count % 2) {
        alert("홀수입니다");
      } else {
        alert("짝수입니다");
      }
    }
    setCheckRender(true);
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>up!</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
