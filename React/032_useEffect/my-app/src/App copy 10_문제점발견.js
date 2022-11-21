import { useState, useEffect } from "react";
export default function App() {
  // 수업여부는 수업중이 들어간 변수, set수업여부는 수업여부를 변경시켜주는 함수
  const [수업여부, set수업여부] = useState('수업중');
  const [잔고, set잔고] = useState(100000);

  const handleZoomOut = (e) => {
    set수업여부("수업종료")
  }

  // 수업이 끝났고 잔고가 2만원 이상이면 카페로 출발, 카페에 가서 1만원 사용한다고 가정
  // 의도와는 다르게 카페로 출발만 계속 함
  // set잔고가 종료안되고 다시 위로 가서 실행되고 또 9만원을 받아서 또 실행하기 때문!!
  // useEffect 로 어떻게 우리 의도대로 할 수 있을까? 
  if(수업여부 === '수업종료' && 잔고 >= 20000) {
    alert("카페로 출발 =3")
    set잔고(90000)
  }
  return (
    <div>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <p>{수업여부}</p>
      <p>{잔고}</p>
    </div>
  );
}
