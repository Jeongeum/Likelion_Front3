// useRef 사용하는 다른 예제

import { useState, useRef } from "react";

export default function App() {
  const searchValue = useRef(null);

  const handleSearch = (e) => {
    console.log("클릭했어요!");
    console.log(searchValue);
    // 값에 접근하기
    console.log(searchValue.current.value);
    // 값을 알아냈으니 fetch로 보낸다.
    // ... 중략

    // input 에 적힌 값을 초기화 한다.
    searchValue.current.value = "";
  };
  return (
    <div>
      <label>
        검색어를 입력하세요 : <input type="text" ref={searchValue} />
      </label>
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}
