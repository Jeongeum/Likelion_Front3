// 또 다른 예제

// 문제 input창 3개를 만들어 자기소개를 하는 기능을 만들어주세요.
// input 1 - 이름
// input 2 - 성별
// input 3 - 나이
// button - 자기소개
// return - 제 이름은 이호준입니다. 저는 남자이고요. 나이는 10살입니다.

import { useState, useRef } from "react";



export default function App() {
  const name = useRef(null);
  const gender = useRef(null);
  const age = useRef(null);
  const [infoResult, setInfoResult] = useState("");


  const handleInfo = (e) => {
    // console.log(name.current.value)
    // console.log(gender.current.value)
    // console.log(age.current.value)

    setInfoResult(`제 이름은 ${name.current.value}입니다. 저는 ${gender.current.value}이고요. 나이는 ${age.current.value}세 입니다.`)
  }

  return <div>
    <label>
      이름 : 
      <input type="text" ref={name}></input>
    </label>
    <br />
    <label>
      성별 : 
      <input type="text" ref={gender}></input>
    </label>
    <br />
    <label>
      나이 : 
      <input type="text" ref={age}></input>
    </label>
    <button onClick={handleInfo}>자기소개</button>
    <p>{infoResult}</p>
  </div>;
}
