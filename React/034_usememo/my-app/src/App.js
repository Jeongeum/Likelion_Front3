// useMemo 실전 예제 - useMemo 사용하기
import React from "react";
import { useMemo } from "react";
import { useState, useRef } from "react";

export default function App() {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const n = useMemo(() => getNum(userInfo), [userInfo]);

  function handleInputName(e) {
    setName(e.target.value) // input 창 변경될 때마다 그 값을 가져옴.
    console.log("렌더링 - 1")
  }

  function handleInputId(e) {
    setId(e.target.value) 
    console.log("렌더링 - 2")
  }

  function handleSubmit(e) {
    e.preventDefault();
    // userInfo.push({})
    const newInfo = [...userInfo, {name, id}];
    inputName.current.value = '';
    inputId.current.value = '';
    inputName.current.focus();
    setUserInfo(newInfo);
    console.log("렌더링 - 3")
  }

  // 모든 렌더링에 함께 렌더링되는 이슈가 있다.
  function getNum(li) {
    console.log("렌더링");
    return li.length;
  }

  return (
  <>
  <form>
    <input 
    type="text" 
    placeholder="이름을 입력하세요" 
    onChange={handleInputName} 
    ref={inputName}/>
    <input 
    type="text" 
    placeholder="아이디를 입력하세요" 
    onChange={handleInputId} 
    ref={inputId}/>
    <button type="submit" onClick={handleSubmit}>버튼</button>
    </form>
    <ul>
      {
        userInfo.map((value, index) => (
          <li key={index}>
            <h3>이름 : {value.name}</h3>
            <strong>아이디 : {value.id}</strong>
          </li>
        ))
      }
    </ul>
    <span>{n}</span>
    </>
    );
}
