// // 1. 연습문제

// // 1.1 다음 값의 평균을 구하세요.
let 점수 = [10, 20, 30, 10, 20, 30, 40, 10];
let avg = 점수.reduce((acc, cur) => acc + cur, 0) / 점수.length;
console.log(avg);
let 분산 = 0;
for (const num of 점수) {
  분산 += (num - avg) ** 2;
}
console.log(분산 / 점수.length);

// 2. 연습문제
// 다음 string의 평균 값을 구하세요
const s = "5, 4, 10, 2, 5";
const str = s.split(", ").map((x) => parseInt(x));
let avg = str.reduce((acc, cur) => acc + cur, 0) / str.length;
console.log(avg);

// 3. 연습문제
// 다음 array의 각 자리수의 합을 구하세요.
const arr = [11, 22, 33, 111, 2];
const result = arr
  .join("")
  .split("")
  .map((x) => parseInt(x))
  .reduce((acc, cur) => acc + cur, 0);
console.log(result);

// 4. 연습문제 3

// 4-1 반복문만 사용하여 숫자단위 콤마 찍기
// 반복문 쓴거
function comma(won) {
  for (let i = won.length - 3; i > 0; i -= 3) {
    won = won.slice(0, i) + "," + won.slice(i);
  }
  return won;
}

comma("1234567");

// 반복문 안쓴거
function comma(num) {
  if (num.length <= 3) {
    return num;
  } else {
    return (
      comma(num.slice(0, num.length - 3)) + "," + num.slice(num.length - 3)
    );
  }
}
comma("1234567");

// 4-2 반복문만 사용하여 숫자단위 콤마 없애기
// 반복문 쓴거
function commaDelete(won) {
  for (let i = won.length - 4; i > 0; i -= 4) {
    won = won.slice(0, i) + won.slice(i + 1);
  }
  return won;
}

commaDelete("1,234,567");

// 반복문 안쓴거
function comma(num) {
  if (num.length <= 3) {
    return num;
  } else {
    return comma(num.slice(0, num.length - 4)) + num.slice(num.length - 3);
  }
}

comma("1,234,567");

// 4-3 문자열 뒤집기
let str = "I love javascript";
let strArr = str.split("");
let result = "";
for (let i = strArr.length - 1; i >= 0; i--) {
  result += strArr[i];
}
console.log(result);

// 5. 로또 만들기

// - 로또번호를 추첨하는 코드를 작성해주세요.
let lotto = [];
while (lotto.length < 6) {
  let num = Math.floor(Math.random() * 45) + 1;
  if (lotto.indexOf(num) === -1)
    // lotto 배열에 해당 번호가 없으면 (중복제거를 위해)
    lotto.push(num);
}

console.log(lotto);

// 6. JSON 데이터 가공

// - 다음 데이터를 가지고 table을 생성해주세요.
// - 버튼을 눌렀을 때 나이의 평균을 구하는 기능을 구현해주세요.
