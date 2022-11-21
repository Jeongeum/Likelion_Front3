// useMemo 실전 예제
import React, { useState, useMemo } from "react";

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  console.log("랜더링!!");

  const result = useMemo(() => {
    return 부하();
  }, [countTwo]);

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>count : {count}</div>
      <button onClick={handleCountUp}>one up!</button>
      <div>countTwo : {countTwo}</div>
      <button onClick={handleCountUpTwo}>two up!</button>
    </div>
  );
}

export default App;
