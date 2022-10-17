function truthy(value) {
  return !!value;
}

console.log("0" == 0); // true
console.log("0" === 0); // false

console.log(1 == true); // true
console.log(1 === true); // false

console.log(0 == false); // true
console.log(0 === false); // false

console.log("true" == true); // false -> 사용할 경우
// 1. json에서 값을 가져올 때 true 문자열로 가져와서 에러가 날 수 있다.
// 2. json에서 값을 가져올 때 true가 True로 되어 있어서 에러가 날 수 있다.
console.log("true" === true); // false

console.log(false == ""); // 주의 : true
console.log(false === ""); // 주의 : false

console.log(false == null); // 주의 : false
console.log(false === null); // 주의 : false

console.log(false == undefined); // 주의 : false
console.log(false === undefined); // 주의 : false

// 아래 내용이 많아서 별도 파일로 분리하여 설명해드리겠습니다.
console.log(NaN == NaN); // 주의 : false
console.log(NaN === NaN); // 주의 : false

function truthyAndFalsy(value) {
  return !!value;
}

truthyAndFalsy([]); // 주의 : true
truthyAndFalsy({}); // 주의 : true
truthyAndFalsy(""); // 주의 : false
truthyAndFalsy(null); // 주의 : false
truthyAndFalsy(undefined); // 주의 : false
truthyAndFalsy(NaN); // 주의 : false
truthyAndFalsy(Infinity); // 주의 : true

truthyAndFalsy(-100); // true
truthyAndFalsy("hello"); // true

console.log("----------------");
console.log("드모르간 법칙");

// not (A or B) = (not A) and (not B)
// not (A and B) = (not A) or (not B)
// !(a % 3 == 0 || a % 5 == 0) // 아래 코드와 같습니다.
// !(a % 3 == 0) && !(a % 5 == 0) // 위 코드와 같습니다.

for (let i = 0; i < 100; i++) {
  if (!(i % 3 == 0 || i % 5 == 0)) {
    console.log(i);
  }
}

for (let i = 0; i < 100; i++) {
  if (!(i % 3 == 0) && !(i % 5 == 0)) {
    console.log(i);
  }
}

// or : ||
// and : &&
const x = 0;
const y = 1;
console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));

// 혼돈의 카오스..
console.log([] == ![]); // true -> 도대체 왜요..?
console.log([] == 0);
// 1. 빈 array는 비교구문이 나왔을 때 강제로 숫자로 형변환이 됩니다.
console.log(0 == ![]);

// 2. ![] == false 입니다.
console.log(0 == false);

// 3. false는 0으로 평가됩니다.
console.log(0 == 0);
