// 직접 만드는 props 예제 - three로 props 받아오기 문제
function Three(){
  return <div>가격</div>
}

function Two(){
  return (
    <div>
      <Three />
    </div>
  )
}

function One(){
  return (
    <div>
      <Two />
    </div>
  )
}

export default function App() {
  const value = 1000 // 이 값을 three에서 출력하고 싶습니다.
  return (
    <div>
      <One />
    </div>
  )
}
