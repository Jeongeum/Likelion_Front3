import React, { useState } from "react";

function Resume(props) {
  const [like, setLike] = useState(0);
  let heart = like % 2 === 1 ? "❤️" : "";

  function handleClickLike() {
    // setLike(like + 1)
    // console.log(like);
    setLike(like + 1);
  }

  return (
    <div>
      <button onClick={handleClickLike}>like : {like}</button>
      <span>{heart ? heart : ""}</span>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>홀수일 때 하트 모양 띄우기</p>
      <Resume />
    </div>
  );
}

export default App;
