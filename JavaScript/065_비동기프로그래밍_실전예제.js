fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => console.log(data));

// 1. 추가 then을 사용하여 7개의 항목 productName만 출력해보세요.(console.log)

// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 product를 출력하는 코드를 작성해주세요.(console.log)

// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p태그로 생성하여(DOM) 화면에 출력해주세요.

// 4. error 처리를 해주세요.

fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    console.log(data.map((x) => x.productName)); // 1.
    return data;
  })
  .then((data) => {
    console.log(data.filter((x) => x.price >= 10000)); // 2.
    return data;
  })
  .then((data) => {
    // let items = data.map((x) => [x.productName, x.price]);
    // for (const item of items) {
    //   let name = document.createElement("h2");
    //   let price = document.createElement("p");
    //   name.textContent = item[0];
    //   price.textContent = item[1];

    //   document.body.appendChild(name);
    //   document.body.appendChild(price);

    // 3.
    const main = document.createElement("main");
    const productName = document.createElement("h2");
    const price = document.createElement("p");

    productName.textContent = `상품명 : ${data.productName}`;
    price.textContent = `가격 : ${data.price}`;

    main.appendChild(productName);
    main.appendChild(price);

    return data;
  })
  .catch((error) => {
    console.log(error); // 4.
  });

// async await 으로 바꾸기
async function getData() {
  const response = await fetch(`http://test.api.weniv.co.kr/mall`);
  const productData = await response.json();
  console.log(productData);
  console.log(productData.map((item) => item.productName));
  console.log(
    productData.map((item) => item.price).filter((item) => item > 10000)
  );

  const main = document.createElement("main");
  productData.forEach((item) => {
    const ProductCard = document.createElement("article");
    const productName = document.createElement("h2");
    const productPrice = document.createElement("p");

    productName.textContent = `상품명 : ${item.productName}`;
    productPrice.textContent = `가격 : ${item.price}`;

    ProductCard.appendChild(productName);
    ProductCard.appendChild(productPrice);

    main.appendChild(ProductCard);
  });
  document.body.appendChild(main);
}

getData();
