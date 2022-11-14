function One(props) {
  return (
    <div>
      <p>{props.name}님 안녕하세요~</p>
      <p>당신의 나이는 {props.age}입니다.</p>
    </div>
  );
}

// props 라고 계속 써야하니까 구조분해할당 이용할 수도 있다!
function Two({ name, age }) {
  return (
    <div>
      <p>{name}님 안녕하세요~</p>
      <p>당신의 나이는 {age}입니다.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <One name="정음" age={24} />
      <Two name="정음" age={24} />
    </div>
  );
}

export default App;
