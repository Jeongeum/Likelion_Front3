import { useState, useEffect } from 'react'

function Counter (){
  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [three, setThree] = useState(0)
  let test = 0;
  
  const handleOneUp = (e) => {
    setOne(one + 1)
  }

  const handleTwoUp = (e) => {
    setTwo(two + 1)
  }

  const handleThreeUp = (e) => {
    setThree(three + 1)
  }

  const handleTestUp = (e) => {
    test += 1;
    console.log(test)
  }

  useEffect(()=>{
    if (one % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  }, [one, two])
  
  return (
    <>
      <div>{one}</div>
      <button onClick={handleOneUp}>Up!</button>
      <div>{two}</div>
      <button onClick={handleTwoUp}>Up!</button>
      {/* useEffect 가 감시하는 애는 one과 two이므로 렌더링은 되지만 경고창이 뜨지는 않는다. three는 감시받고 있지 않기 때문에! */}
      <div>{three}</div>
      <button onClick={handleThreeUp}>Up!</button>
      {/* 콘솔창에는 찍히지만 렌더링이 되지 않는다. 일반변수는 렌더링이 안된다. */}
      <div>{test}</div>
      <button onClick={handleTestUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;