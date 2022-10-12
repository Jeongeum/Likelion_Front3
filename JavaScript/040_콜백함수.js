//callback function : 나중에 부를 함수
// 파라미터로 함수를 전달 받아, 함수 내부에서 실행하는 함수
// 함수 이름을 아규먼트로 전달해서 함수 어딘가에서 실행되게 하는 것

function sum(x, y, 콜백함수) {
  콜백함수(x + y);
  //   return x + y;
}

function documentWriter(s) {
  document.write("콜백함수", s);
}

sum(10, 20, console.log);
sum(10, 20, documentWriter); // documentWriter라는 함수가 전달됐다.

// map 에서 콜백함수 사용하기
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// arr.map(callback(currentValue[, index[, array]])[, thisArg])
function 제곱(x) {
  return x ** 2;
} // 화살표 함수로 바꾸기 : x => x**2

let arr = [10, 20, 30, 40, 50];
arr.map(제곱);
// arr.map(x => x**2);

// array의 foreach
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// https://caniuse.com/mdn-api_nodelist_foreach // 노드에서의 forEach는 IE에서 작동하지 않습니다.

function 두배(x) {
  console.log(x * 2);
}
let arrforeach = [10, 20, 30, 40, 50];
arrforeach.forEach(두배);

// 문제 : 화살표 함수를 사용해서 아래 map과 동일한 기능을 하는 forEach문 완성하기
let arrforeach = [10, 20, 30, 40, 50];
arr.map((x) => x ** 2);

let result = [];
arrforeach.forEach((x) => {
  result.push(x ** 2);
});
console.log(result);
