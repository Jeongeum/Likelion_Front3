import React, { useState, useEffect } from "react";

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?"); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

  useEffect(() => {
    let time = setInterval(() => {
      const t = new Date();
      setToday(t);
      setHour(t.getHours());
      setMin(t.getMinutes());
      setSec(t.getSeconds());
    }, 1000);
    return () => {
      // 컴포넌트가 사라지기 전에 setinterval을 clearinterval 해줍니다.
      // 한 사이클을 돌면 더 돌지 않게끔!
      // setToday가 바뀌면 다시 렌더링되니까 다시 setToday(t)를 만나고 setHour가 실행된다. 그럼 setHour은 setToday로 인해서 2번 실행되는거니까..? 다들 한 사이클만 돌게 해준다.

      // 함수가 여러개 파생되었을 때, 청소하고 재실행하는 것!
      // 재 렌더링될때 기존에 남아있는 것을 더 실행하지 않는다.
      // 새로운 컴포넌트를 그릴건데 이전 컴포넌트에서 실행되는게 있다면 청소하고 가겠다는 의미!!
      clearInterval(time);
    };
  }, [today]);

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
