import React, { useState } from "react";

function Resume(props) {
  const [like, setLike] = useState(0);
  const [message, setMessage] = useState("hello");
  // const message = "hello";

  function handleClickLike() {
    // setLike(like + 1)
    // console.log(like);
    setLike(like + 1);
  }

  function handMouseOver() {
    // console.log("world")
    setMessage("world");
  }

  function handMouseOut() {
    // console.log("hello")
    setMessage("hello");
  }

  return (
    <div>
      <button onClick={handleClickLike}>like : {like}</button>
      <button onMouseOver={handMouseOver}>마우스 오버</button>
      <button onMouseOut={handMouseOut}>마우스 아웃</button>
      <p>{message}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;
