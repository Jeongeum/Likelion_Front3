let book = {
  책이름: "JavaScript",
  책가격: 1000,
  저자: "홍길동",
  출판일: "22.10.12",
};

let newBook = {};
newBook["책이름"] = "JavaScript"; // 예를 들어 form에서 입력 받은 값이라면?
newBook["책가격"] = 1000000;
newBook["저자"] = "세원, 석규, 슬기";
newBook["출판일"] = "22.10.30";

// 코드를 깔끔하게 하기 위해 생성자함수를 사용한다.
// 객체 생성을 위해 사용!

function Book(책이름, 책가격, 저자, 출판일) {
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
}

// let data = Book("CSS", 10, "유진", "22.12.30");
// console.log(data); // undefined

// let data1 = new Book("CSS", 10, "유진", "22.12.30");
// console.log(data1); // new를 붙여주면? Object 처럼 나온다. (객체를 찍어내는 용도로 사용하기도 한다. 메모리 상으로 더 효율적이기도 하다.)

let book1 = new Book("HTML", 10, "유진", "22.12.30");
let book2 = Book("CSS", 20, "유진", "22.12.30");
let book3 = new Book("JS", 30, "유진", "22.12.30");

// new 키워드를 사용했을 경우
function Book(책이름, 책가격, 저자, 출판일) {
  // this = {}
  this.책이름 = 책이름;
  this.책가격 = 책가격;
  this.저자 = 저자;
  this.출판일 = 출판일;
  // return this;
}
