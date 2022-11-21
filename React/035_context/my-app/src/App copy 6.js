// 직접 만드는 props 예제 - Context.Provider로 값 변경하기

// props drilling을 하지 않고 직접 Three 컴포넌트에 값을 내려줄 수 있다. 파일이 달라고 import해서 사용할 수 있다.
import { createContext } from 'react'

const Value = createContext({price:1000})

function Three(){
  return (
    <Value.Consumer>
      {(value) => (<p>{value.price}</p>)}
    </Value.Consumer>
  )
}

function Two(){
  return (
    <div>
      Two
      <Value.Provider value={{price:2000}}>
        <Three/>
      </Value.Provider>
    </div>
  )
}

function One(){
  return (
    <div>
      One
      <Two/>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <One/>
    </div>
  )
}
