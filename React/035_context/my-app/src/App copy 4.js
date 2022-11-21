// 직접 만드는 props 예제 - three로 props 받아오기 정답
function Three({price}){
  return <div>{price}</div>
}

function Two({price}){
  return (
    <div>
      Two
      <Three price={price} />
    </div>
  )
}

function One({price}){
  return (
    <div>
      One
      <Two price={price}/>
    </div>
  )
}

export default function App() {
  const value = 1000 // 이 값을 three에서 출력하고 싶습니다.
  return (
    <div>
      <One price={value}/>
    </div>
  )
}
