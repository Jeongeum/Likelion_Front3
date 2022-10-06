for (let i = 0; i < 10; i++) {
  console.log(i);
}

// airbnb 컨벤션에서 권장하는 것
// IE 전부 사용 가능
for (const i in ["one", "two", "three"]) {
  console.log(i);
}

// airbnb 컨벤션에서 권장하는 것
// IE 전부 사용 불가
for (const i of ["one", "two", "three"]) {
  console.log(i);
}

// 스코프
// let과 const는 블록레벨 스코프이기 때문에 if문 밖에서 출력이 안된다.
if (true) {
  var a = "1";
  let b = "2"; // if 밖에서 쓸 수 없음
  const c = "3"; // if 밖에서 쓸 수 없음
}
console.log(a);
console.log(b);
console.log(c);

for (let i = 0; i < 10; i++) {
  // i라는 변수를 스코프마다 잠군다.
  var a = "1";
  let b = "2"; // if 밖에서 쓸 수 없음
  const c = "3"; // if 밖에서 쓸 수 없음
  console.log(i);
}

console.log(a);

//
let data1 = ["a", "b", "c", "d", "e"];
for (let i = 0; i < data1.length; i++) {
  console.log(data1[i]);
}

let data2 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data2.length; i++) {
  console.log(data2[i + 1] - data2[i]);
}

let data3 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data3.length - 1; i++) {
  console.log(data3[i + 1] - data3[i]);
}

let data4 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < data4.length; i++) {
  console.log(data4[i] - data4[i - 1]);
}

let i = 0;
for (;;) {
  i++;
  console.log(i);
  if (i > 5) {
    break;
  }
}

for (let i = 0; ; ) {
  i++;
  console.log(i);
  if (i > 5) {
    break;
  }
}

for (let i = 0; ; i++) {
  console.log(i);
  if (i > 5) {
    break;
  }
}

// 문제 ) 다음 수학점수의 평균을 구하세요.
// 내가 푼 방법 1
let 수학점수 = [10, 99, 88, 85, 21, 35];
let result = 0;
for (let i = 0; i < 수학점수.length; i++) {
  result += 수학점수[i];
}

console.log(result / 수학점수.length);

// 내가 푼 방법 2
let avg = 수학점수.reduce((acc, cur) => acc + cur, 0) / 수학점수.length;

console.log(avg);

// 다른 방법 (리듀스는 누적한다는 걸 알고 코드를 볼 수 있으니 리듀스가 더 좋음. forEach 같은건 순회할때 좋음)
let s = 0;
수학점수.forEach((value) => (s += value));
console.log(s / 수학점수.length);

let user = [
  {
    _id: "633e5b1711926cc42d1fbb4b",
    index: 0,
    guid: "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
    age: 28,
    name: "Mai Montoya",
    gender: "female",
  },
  {
    _id: "633e5b1718d6c001d2f771c7",
    index: 1,
    guid: "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
    age: 22,
    name: "Shelley Potts",
    gender: "female",
  },
  {
    _id: "633e5b17fecc26a897aa2283",
    index: 2,
    guid: "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
    age: 22,
    name: "Hensley Flores",
    gender: "male",
  },
  {
    _id: "633e5b17267fe16c24f00591",
    index: 3,
    guid: "6e189d90-0981-4086-9ee2-12242fda76d1",
    age: 20,
    name: "Holmes Morrow",
    gender: "male",
  },
  {
    _id: "633e5b17b30766b9c38594f5",
    index: 4,
    guid: "f1505113-9383-4249-bbb3-0e5f8ea634b2",
    age: 25,
    name: "Elisa Miller",
    gender: "female",
  },
];

for (let i = 0; i < user.length; i++) {
  console.log(user[i]);
}

let 여성 = 0;
for (let i = 0; i < user.length; i++) {
  // console.log(user[i]);
  if (user[i]["gender"] === "female") {
    여성 += 1;
  }
}
console.log(여성);

// X
// let 남성 = 0;
// for (let i = 0; i < user.length; i++) {
//     // console.log(user[i]);
//     if (user[i]['gender'] === 'female'){
//         남성 += 1;
//     }
// }
// console.log(남성);

console.log(user.length - 여성);

// let 여성 = 0;
// for (let i = 0; i < user.length; i++) {
//     // console.log(user[i]);
//     if (user[i]['gender'] === 'female'){
//         여성 += 1;
//     } else if (user[i]['gender'] === 'male'){
//         남성 += 1;
//     }
// }
// console.log(여성);

user.filter((i) => i["gender"] === "female").length;

for (let dan = 2; dan < 10; dan++) {
  for (let i = 1; i < 10; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}

// 암기를 부탁드립니다. (재귀함수 할 때 비교할 for문) + 구구단

// 1. 구구단
for (let 단 = 2; 단 < 10; 단++) {
  for (let 곱 = 1; 곱 < 10; 곱++) {
    console.log(`${단} X ${곱} = ${단 * 곱}`);
  }
}

// 2. 문자열 뒤집기
let txt = "hello world";
let result1 = "";
for (let i = txt.length - 1; i >= 0; i--) {
  result1 += txt[i];
}

result = "";
for (let i = 0; i < txt.length; i++) {
  result = txt[i] + result;
}

// 3. 시그마 (시그마 5 = 1부터 5까지 더한다.)
let ss = 0;
for (let i = 1; i < 101; i++) {
  ss += i;
}

// 4. 팩토리얼 (팩토리얼 5 = 1부터 5까지 곱한다.)
let ss2 = 1;
for (let i = 1; i < 6; i++) {
  ss2 *= i;
}

let x10 = "12345";
let result10 = 0;

for (let i = 0; i < x10.length; i++) {
  result10 += parseInt(x10[i]);
}

console.log(result10);

/* 
코딩도장 문제풀기 : https://codingdojang.com/scode/393?answer_mode=hide

1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)
*/
let x20 = Array(10000)
  .fill(0)
  .map((_, index) => index + 1)
  .join();

let result20 = 0;

for (let i = 0; i < x20.length; i++) {
  if (x20[i] === "8") {
    result20 += 1;
  }
}

console.log(result20);
