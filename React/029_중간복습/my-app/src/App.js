import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import shoppingCart from "./assets/icon-shopping-cart-white.svg";
import heart from "./assets/icon-heart.svg";
import heartOn from "./assets/icon-heart-on.svg";

// npx create-react-app my-app --template basic-react
// cd my-app
// npm install styled-components styled-reset

const GlobalStyle = createGlobalStyle`
/* reset 코드 + 커스텀 reset 코드 + 유틸리티코드 */
/*  한 줄 말줄임, 두 줄 말줄임 ... */
${reset}
span {
  color: red;
  font-size: 12px;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  border: none;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}
`;

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`;

const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
`;

const IconShoppingCart = styled.a`
  background: #000 url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: sticky;
  top: 60px;
`;

// 과제
const ProductName = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 20px;
`;

const IconHeart = styled.span`
  display: block;
  background: url(${heart}) no-repeat center;
  width: 18px;
  height: 16px;

  &.true {
    background: url(${heartOn}) no-repeat center;
  }
`;

const ProductPrice = styled.p`
  font-size: 24px;
  ::after {
    content: "원";
    font-size: 16px;
    color: #333;
    margin-left: 2px;
  }
`;

async function requests() {
  const response = await fetch("http://test.api.weniv.co.kr/mall");
  const data = await response.json();
  return data;
}

function ProductList() {
  const [productListData, setProductListData] = useState([]);

  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  if (dataLoadSwitch) {
    requests().then((productData) => {
      setProductListData(productData);
      setDataLoadSwitch(false);
    });
  }

  // 무한반복
  // requests().then((productData) => setProductListData(productData));
  // console.log(productListData);

  // const productListData = requests();
  // console.log(productListData); // 위와 같이 실행하면 promise이다.
  return (
    <ContainerProductList>
      {productListData.map((item) => (
        <ProductListItem
          key={item.id}
          productName={item.productName}
          price={item.price}
          thumbnailImg={item.thumbnailImg}
        />
      ))}
    </ContainerProductList>
  );
}

function ProductListItem({ productName, price, thumbnailImg }) {
  const [like, setLike] = useState(false);

  const handleHeartToggle = () => {
    setLike(!like);
  };
  // console.log(like);
  return (
    <ItemProductList>
      <ImgProduct
        src={"http://test.api.weniv.co.kr/" + thumbnailImg}
        alt={productName}
      />
      <ProductName>
        {productName}
        <IconHeart className={like} onClick={handleHeartToggle}></IconHeart>
      </ProductName>

      <ProductPrice>{price}</ProductPrice>
    </ItemProductList>
  );
}

function ShoppingCart() {
  return <IconShoppingCart href="#"></IconShoppingCart>;
}

function App() {
  return (
    <main>
      <ContainerMain>
        <GlobalStyle />
        <ProductList />
        <ShoppingCart />
      </ContainerMain>
    </main>
  );
}
export default App;
