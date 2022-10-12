function a() {
  console.log(this); // 함수를 호출해준 애 (window)가 this가 된다.
}
a(); // === window.a()

function b() {
  console.log("hello world");
}
b();
window.b();

let test = {
  one: 1,
  two: 2,
  three: function () {
    console.log(this); // test 함수를 호출하는건 window, three 를 호출하는건 test
  },
};

test.three();

let test2 = test.three; // test2를 호출하는건 window

// 추가 예제 (핵심예제!) //
function sayName() {
  console.log(this.name);
}

var name = "Hero"; // let과 const는 window에 등록되지 않는다. -> error 발생
// var만 등록되는 이유?

let peter = {
  name: "Peter Parker",
  sayName: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  sayName: sayName,
};

sayName(); // Hero가 나옴
peter.sayName(); // Peter Parker
bruce.sayName(); // Bruce Wayne

// 함수 안의 함수에서 this를 쓰면 함수를 가리키나요?
function a() {
  console.log(this.name);
  function b() {
    console.log(this.name);
  }
  b();
}
a(); // 둘다 빈공간 나옴

function a() {
  console.log(this);
  function b() {
    console.log(this);
  }
  b();
}
a(); // 둘다 window 나옴
// b의 경우 함수의 내부 함수는 전역객체를 바인딩하기 때문에 window를 가리킨다.

function sayName() {
  console.log(this);
}

var c = {
  hello: "world",
  say: sayName,
};

var b = {
  c: c,
};

var a = {
  b: b,
};

a.b.c.say(); // c 나옴
