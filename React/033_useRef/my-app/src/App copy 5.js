// useRef 사용하는 다른 예제 - fetch 해서 데이터 얻어왔다고 생각하고 간단히 작성해보기

import { useState, useRef } from "react";

const data = [
  "개발자 개리 키링",
  "개발자 파우치 위니브",
  "담요",
  "개발자 키보드",
  "코오오딩 노트",
  "일반 무지 노트",
  "위니브 스티커 팩 - 1",
  "위니브 스티커 팩 - 2",
];
export default function App() {
  const searchValue = useRef(null);
  const [searchResult, setsearchResult] = useState([]);

  const handleSearch = (e) => {
    console.log("클릭했어요!");
    console.log(searchValue);
    // 값에 접근하기
    console.log(searchValue.current.value);

    // 검색한 값 출력하는 것 해보기

    // 검색한 값과 data가 일치하면 p 태그로 출력해준다.
    // 근데 이제 useState로 값 변경하고 재렌더링 ,,,,,
    setsearchResult(
      data
        .filter((item) => item.indexOf(searchValue.current.value) !== -1)
        .map((item) => <p key={item}>{item}</p>)
    );
    // input 에 적힌 값을 초기화 한다.
    searchValue.current.value = "";
  };

  return (
    <div>
      <label>
        검색어를 입력하세요 : <input type="text" ref={searchValue} />
      </label>
      <button onClick={handleSearch}>검색</button>
      {searchResult}
    </div>
  );
}
