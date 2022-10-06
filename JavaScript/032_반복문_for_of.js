// for ~ in : 키 값 출력

// object 에서는 키를 뽑는다.
let data = {
  one: "하나",
  two: "둘",
  three: "셋",
  four: "넷",
};

for (const i in data) {
  console.log(i); // one, two, three, four -> 키 출력
}

for (const i in data) {
  console.log(data[i]); // value 값 출력
}

// 배열에서는 인덱스를 뽑는다.
let data2 = [10, 20, 30, 40];

for (const i in data2) {
  console.log(i); // 0,1,2,3 -> 인덱스 출력
}

let data3 = {
  0: 10,
  1: 20,
  2: 30,
  3: 40,
};

for (const i in data3) {
  console.log(i);
}

// for ~ of
for (const i of data2) {
  console.log(i); // 10,20,30,40 -> 값 출력
}

/* of 와 in 비교하기 */
for (const i of "hello world") {
  console.log(i); // of : 내용을 각각 하나씩 출력
}

for (const i in "hello world") {
  console.log(i); // in : 인덱스 출력
}

// 문제
let s = 0;
for (const i of "12345") {
  s += parseInt(i);
}

const seat = [
  ["피카츄", "라이츄", "파이리"],
  ["꼬부기", "버터플", "야도란"],
  ["피죤투", "또가스", "메타몽"],
];

//for 문 사용
for (let i = 0; i < seat.length; i++) {
  const row = seat[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

//for of 문 사용
for (let row of seat) {
  for (let pocketmon of row) {
    console.log(pocketmon);
  }
}

////// 질의응답

for (const i in data) {
  console.log(data[i]);
}

let data5 = {
  one: "하나",
  two: "둘",
  three: "셋",
  four: "넷",
};
for (const i in data5) {
  console.log(i);
  console.log(data5);
  console.log(data5.i); // error
}
