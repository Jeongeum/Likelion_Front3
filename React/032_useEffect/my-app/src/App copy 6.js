import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  // true, false 없이! 0일때에도 짝수가 뜨니까 0일때에는 안뜨게끔
  useEffect(() => {
    if (count !== 0) {
      if (count % 2) {
        alert("홀수입니다");
      } else {
        alert("짝수입니다");
      }
    }
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
