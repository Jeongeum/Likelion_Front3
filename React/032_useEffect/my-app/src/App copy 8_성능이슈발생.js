// useEffect 사용 전

import React, { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?"); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

  // 1초마다 각 값들이 변경되게 한다.
  // 이러면 성능 이슈가 생긴다.
  // setToday가 실행 -> 다시 렌더링 (아직 코드 셋인터벌 코드 실행중)
  // hour, min, sec도 실행되면 변경된거니까 다시 렌더링
  // 결국 4의 승수만큼 계속 다시 렌더링되니까 성능이슈가 생김
  setInterval(() => {
    const t = new Date();
    setToday(t);
    setHour(t.getHours());
    setMin(t.getMinutes());
    setSec(t.getSeconds());
  }, 1000);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Time />
    </div>
  );
}

export default App;
