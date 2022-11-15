import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefalut();
    console.log("제출 로그인 버튼을 클릭했습니다. 로그인 정보가 들어왔습니다.");
  };

  const handleIdInput = (e) => {
    console.log("아이디가 수정되었습니다");
    // 실시간으로 정규표현식을 사용해서 이상한 문자열이 포함되진 않았는지 확인
    setId(e.target.value);
  };

  const handlePwInput = (e) => {
    console.log("패스워드가 수정되었습니다");
    setPw(e.target.value);
  };

  return (
    <form action="" onSubmit={handleLoginSubmit}>
      <label htmlFor="">
        아이디 :
        <input type="text" name="" id="" onChange={handleIdInput} />
      </label>
      <label htmlFor="">
        패스워드 :
        <input type="password" onChange={handlePwInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
};

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
