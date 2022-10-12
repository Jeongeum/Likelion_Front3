// 키-값 쌍을 가지는 객체 자료형의 한 종류

let m = new Map();
m.set("하나", 1)
  .set("둘", 2)
  .set("셋", 3)
  .set("넷", 4)
  .set(true, "트루")
  .set([1, 2], "리얼리?"); // .붙이는 것 -> 메소드 체이닝

console.log(m);

console.log(m.get("하나"));
console.log(m.get(true)); // object에서는 불가능한 것
console.log(m.get([1, 2])); // 이렇게는 호출되지 않는다.
// 왜? -> 메모리 주소가 같지 않아서!

// 1. 파이썬에서 아래 값은 메모리 값이 서로 다르게 나온다. (주소 값이 다름)
// x = [1, 2]
// id(x)

// y = [1, 2]
// id(y)

// x == y // python에서는 true
// x is y // python에서는 false

// 2. 자바스크립트에서도 똑같다.
let x = [1, 2]; // 메모리 값 : 1000
let y = [1, 2]; // 메모리 값 : 1004
console.log(x == y); // false
console.log(x === y); // false
console.log([1, 2] == [1, 2]); // false
console.log([1, 2] === [1, 2]); // false

// let m = new Map();
// let test = [1, 2];

// m.set(test, "리얼리?"); // 이렇게는 호출된다.

// console.log(m.get(test));

// Map에 해당 key 값이 있는지 확인하기
m.has("하나");

// Map에서 값 제거하기
m.delete("하나");

// 크기 구하기
m.size;

let data = new Map([
  ["one", 1],
  ["two", 2],
]); // O (이런형태로 만들어야 한다.)
let data = new Map(Object.entries({ one: 1, two: 2 })); // O
let data = new Map({ one: 1, two: 2 }); // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X

// 가장 큰 장점 : 직접 순회가 가능하다!
let data = { one: 1, two: 2 };

for (const i of data) {
  console.log(i);
}

let m = new Map();

m.set("하나", 1) // 메서드 체이닝
  .set("둘", 2)
  .set("셋", 3)
  .set("넷", 4);

for (const i of m) {
  console.log(i);
}

for (const [i, j] of m) {
  console.log(i, j);
}

m.keys();
m.values();
m.entries();

// Map - Object 간의 형변환
// 맵에서 다시 오브젝트로 바꾸지 않는 이유 : 오브젝트가 할 수 있는 것을 맵이 모두 할 수 있기 때문에!
let 맵 = new Map(Object.entries({ one: 1, two: 2 }));
let 오브젝트 = Object.fromEntries(m);
