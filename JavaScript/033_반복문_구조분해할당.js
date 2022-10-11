let value = [10, 1, 100, 200, 300, 10];

let value2 = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

Object.keys(value)(); // 배열의 경우 인덱스가 출력;
Object.keys(value2)(); // 객체의 경우 키가 출력

for (i in value2) {
  console.log(i); // for of로 순회를 돌 수가 없음
}

for (i of value2) {
  console.log(i); // of로 순회를 돌아야 key와 value를 한꺼번에 출력하고 싶은데 error가 난다.
}

Object.entries(value); // key와 value가 [key, value] 형태로 출력
Object.entries(value2);

for (i of Object.entries(value2)) {
  console.log(i);
}

for (i of Object.entries(value2)) {
  console.log(`key는 ${i[0]}고 value는 ${i[1]}입니다.`);
}

for ([i, j] of Object.entries(value2)) {
  console.log(`key는 ${i}이고 value는 ${j} 입니다.`);
}

for ([i, j] of [
  [10, 20],
  [30, 40],
]) {
  console.log(i, j);
} // 형태 유지

for ([i, j] of [
  [10, 20, 30],
  [40, 50, 60],
]) {
  console.log(i, j);
} // 30과 60을 받지 못했습니다.

for ([i, j, ...k] of [
  [10, 20, 30, 1, 2],
  [40, 50, 60, 1],
]) {
  console.log(i, j, k);
} // 몇 개의 데이터가 들어올 지 모르는 경우 전개 구문 사용 (스프레드 연산자) -> 하지만 거의 사용하는 일은 없긴 함..!

for ([[i, j], k] of [
  [[10, 20], 30],
  [[40, 50], 60],
]) {
  console.log(i, j, k);
}

for ([i, j] of [
  [[10, 20], 30],
  [[40, 50], 60],
]) {
  console.log(i, j);
} // i 는 [10,20] , j 는 30

// 일반 변수 선언의 구조분해할당

let a, b, c;
[a, b] = [10, 20];

let one, two, three;
[one, two, three] = "010-1234-5678".split("-");

let one1, two1, three1, four1;
[one1, two1, three1, four1] = "010-1234-5678-9000".split("-");
[one1, two1, three1, ...four1] = "010-1234-5678-90-12-34".split("-");

console.log("------문제-------");

data = [10, 20, 30, 40, 50];
// 문제 1
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20, 30, 40, c에는 50을 할당해보세요.
let a1, b1, c1;
// [a1, ...b1, c1] = [data]; 스프레드 연산자는 마지막에만 작성할 수 있다.
[a1, b1, c1] = [10, [20, 30, 40], 50]; // 이렇게 데이터 모양을 바꿔주면 된다.
[a1, b1, c1] = [data[0], [data[1], data[2], data[3]], data[4]]; // 혹은 이런식으로!

// 문제 2
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, 20, 30, b에는 40, c에는 50을 할당해보세요.
let a2, b2, c2;
// [...a2, b2, c2] = [data]; 스프레드 연산자는 마지막에만 작성할 수 있다.
[a2, b2, c2] = [[10, 20, 30], 40, 50]; // 이렇게 데이터 모양을 바꿔주면 된다.
[a2, b2, c2] = [[data[0], data[1], data[2]], data[3], data[4]]; // 혹은 이런식으로!

// 문제 3
// a, b, c로 각각을 분해할 것입니다.
// a에는 10, b에는 20 c에는 30, 40, 50을 할당해보세요.
let a3, b3, c3;
[a3, b3, ...c3] = data;

// Object 구조분해할당
let data = {
  name: "hojun",
  age: 10,
  money: 100,
};

let { name, age } = data;
let { name1, age1 } = { name: "hojun", age: 10 };

let data2 = {
  name: "hojun",
  age: 10,
  money: 100,
  company: "weniv",
};

let { name, age, ...rest } = data2;

// 순서를 뒤바꿔보면?
let data3 = {
  name: "hojun",
  money: 100,
  company: "weniv",
  age: 10,
};

let { name, age, ...rest } = data3; // 변수가 같은 이름이 매핑되기 때문에 순서를 바꿔도 age 변수에 10이 들어간다.

let a = [10, 20, 30];
a.push(100); // 배열의 맨 뒤에 넣기
a.unshift(1000); // 배열의 맨 앞에 넣기

let a = [10, 20, 30];
a = [1000, ...a, 100]; // 스프레드 연산자니까 배열의 어디서든 사용 가능 (스프레드는 이어붙이기)

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [...a, ...b]; // 이렇게 합쳐진 값을 다시 구조 분해 할당

let str = "hello world";
console.log([str]);
console.log([...str]);

"!".repeat(10);
[..."!".repeat(10)];
