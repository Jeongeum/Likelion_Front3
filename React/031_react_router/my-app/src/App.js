// 퀴즈
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Outlet,
} from "react-router-dom";


function Home() {
  return <h1>Home Page</h1>
}

function Products() {
  return <h1>Product page</h1>
}

function ProductsDetail() {
  const location = useLocation();
  const num = location.pathname.split("/")[2];
  return <h1>{num}번째 ProductsDetail page</h1>
}

function ProductsDetailNotice() {
  const location = useLocation();
  const num = location.pathname.split("/")[2];
  return <h1>{num}번째 ProductsDetail Notice page</h1>
}

function Cart() {
  return <h1>Cart page</h1>
}

function Users() {
  return <h1>Users page</h1>
}

function Coupon() {
  return <h1>User Coupon page</h1>
}

function Question() {
  return <h1>User Question page</h1>
}

function UserNotice() {
  return <h1>UserNotice page</h1>
}


function App() {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/users">Users</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products"  element={<Products/>}/>
        <Route path="/products/:id"  element={<ProductsDetail/>}/>
        <Route path="/products/:id/notice" element={<ProductsDetailNotice />}/>
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/users"  element={<Users/>}/>
        <Route path="/users/*"  element={<Outlet/>}>
          <Route path="coupon"  element={<Coupon/>}/>
          <Route path="question"  element={<Question/>}/>
          <Route path="notice"  element={<UserNotice/>}/>  
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
