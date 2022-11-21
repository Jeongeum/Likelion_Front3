import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Outlet,
} from "react-router-dom";


function Index() {
  return <h1>Main</h1>
}

function Login() {
  return <h1>Login</h1>
}

function Study() {
  return <h1>Study</h1>
}

function StudyDetail(props) { 
  // 아무것도 들어오지 않음. 이전버전에서는 props로 처리했음. 
  // console.log(props)

  // 방법 1
  const location = useLocation();
  const path = location.pathname.split("/")[2]
  // console.log(path)

  // 방법 2
  // console.log(useParams()) // {num: '1'}니까 객체 구조분해 할당을 해준다. 
  const { num } = useParams();

  return (
    <>
      <p> {path}번 게시물에 오신 것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 {path} 번 게시물을 요청하셔야 합니다.</p>
    <p> {num}번 게시물에 오신 것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 {num} 번 게시물을 요청하셔야 합니다.</p>
    </>
  )
}

function Chat(){

  const location = useLocation()
  const params = useParams()
  console.log(location)
  console.log(params)

  const 채팅방번호 = location.pathname.split('/')[2]

  // 제가 자주 하는 방식, 권하진 않습니다. 왜 이렇게 사용하냐면 url의 주소의 깊이가 깊어졌을 때 www/블라.com/a/b/c/d/e 이렇게 되었을 때 앞이 있는 값이 필요한 경우가 종종 있습니다.

  return <p>{채팅방번호}번 게시물에 오신것을 환영합니다. 여기는 {채팅방번호}번 게시물의 채팅방입니다. 여러분이 fetch를 통해 백엔드에서 채팅 정보를 받아와야 합니다.</p>
}

function Memo(){

  const location = useLocation()
  const { num } = useParams()
  console.log(location)

  // 깔끔한 방식
  return <p>{num}번 게시물에 오신것을 환영합니다. 여기는 {num}번 게시물의 메모방입니다. 여러분이 fetch를 통해 백엔드에서 메모 정보를 받아와야 합니다.</p>
}

function Notice() {
  return <h1>Notice</h1>
}

function App() {
  return (
    <BrowserRouter>
    <Link to="/">Main</Link>
    <Link to="/login">Login</Link>
    <Link to="/study">Study</Link>
    <Link to="/notice">Notice</Link>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/study"  element={<Study/>}/>
        <Route path="/study/:num"  element={<StudyDetail/>}/>
        {/* <Route path="/study/:num/chat" element={<Chat />}/>
        <Route path="/study/:num/memo" element={<Memo />}/> */}
        <Route path="/study/:num/*"  element={<Outlet />}>
          <Route path="chat" element={<Chat />}/>
          <Route path="memo" element={<Memo />}/>
        </Route>
        <Route path="/notice"  element={<Notice/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
