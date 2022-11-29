import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Home from "./pages/Home/Home";
import "./reset.css";
import "./global.css";

function App() {
  // 실제로는 로그인이 되는 로직이 들어가야 한다.
  const [userId, setUserId] = useState(1);
  const [isLogin, setIsLogin] = useState(true);
  return (
    // UserContext.Provider로 인해 userId와 isLogin을 모든 컴포넌트에서 사용할 수 있게 되었다.
    // props drilling을 피하기 위해 사용한다.
    <UserContext.Provider value={{ userId, isLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
