// 구조

let 조건식 = true;

if (조건식) {
  // 조건식이 참일 경우 실행될 코드
  console.log("중괄호를 사용했습니다");
}

if (조건식) console.log("중괄호를 생략했습니다."); // 가독성을 위해 중괄호 사용하길 추천!

let 조건식1 = true;
let 조건식2 = true;

if (조건식1) {
  // 조건식1이 참일 경우 실행될 코드
  console.log(1);
} else if (조건식2) {
  // 조건식1이 false이고 조건식 2가 참일 경우 실행될 코드
  console.log(2);
} else {
  console.log(3);
}

let money = 1000;
let score = 89;

if (score > 90) {
  console.log('mom : "i\'m so happy"');
  money += 1000000;
} else if (score > 80) {
  // score가 90 이하 라는 앞의 조건에 대한 의미도 담겨있음.
  console.log('mom : "i\'m happy"');
  money += 100000;
} else if (score > 70) {
  console.log('mom : "happy?"');
  money += 10000;
} else if (score > 60) {
  console.log('mom : "happy!!!"');
} else {
  console.log('mom : "..."');
  money = 0;
}

// 중첩 if문

if (score > 90) {
  if (money >= 100000000) {
    money -= 10000000;
  }
  console.log('mom : "i\'m so happy"');
  money += 1000000;
} else if (score > 80) {
  if (money >= 100000000) {
    money -= 10000000;
  }
  console.log('mom : "i\'m happy"');
  money += 100000;
} else if (score > 70) {
  if (money >= 100000000) {
    money -= 10000000;
  }
  console.log('mom : "happy?"');
  money += 10000;
} else if (score > 60) {
  if (money >= 100000000) {
    money -= 10000000;
  }
  console.log('mom : "happy!!!"');
} else {
  if (money >= 100000000) {
    money -= 10000000;
  }
  console.log('mom : "..."');
  money = 0;
}

// 중첩 if문 깔끔하게 사용하기

if (money >= 100000000) {
  money -= 10000000;
}

if (score > 90) {
  console.log('mom : "i\'m so happy"');
  money += 1000000;
} else if (score > 80) {
  console.log('mom : "i\'m so happy"');
  money += 100000;
} else if (score > 70) {
  console.log('mom : "i\'m so happy"');
  money += 10000;
} else if (score > 60) {
  console.log('mom : "i\'m so happy"');
} else {
  console.log('mom : "i\'m so happy"');
  money = 0;
}

// switch문

let value3 = "three";

switch (value3) {
  case "one":
    console.log(1);
    break;
  case "two":
    console.log(2);
    break;
  case "three":
    console.log(3);
    break;
  case "four":
    console.log(4);
    break;
}

// breack가 없을 때

switch ("two") {
  case "one":
    console.log(1);
  case "two":
    console.log(2);
  case "three":
    console.log(3);
  case "four":
    console.log(4);
}
