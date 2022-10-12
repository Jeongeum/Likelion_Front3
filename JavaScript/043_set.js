// Set
// 번역 자체가 수학의 집합 개념!
// 집합은 원소의 중복을 허용하지 않는다.
// 그래서 set으로 배열을 넣어 변수에 할당하면수학의 집합 개념이기 때문에 중복된 값을 다 지워준다.

// 집합, 합집합, 교집합, 차집합

let s = new Set("abcdeeeeeeeeee");

console.log(s);
console.log(s.size);

// 문제
// 문제 1 : 몇 명이 게시판에 게시물을 썼나요?
// Set은 중복을 허용하지 않기 때문에 Set으로 값을 넣어주고 길이 출력하면 된다.
회사게시판 = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];
let ss = new Set(회사게시판);
ss.size;

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
// 회사게시판을 순회하면서 (중복없음) i일때, 회사 게시판 내에서 i와 같은 값만 모아(필터링해서) 새로운 배열을 만들고 길이 출력
for (const i of ss) {
  console.log(i, 회사게시판.filter((e) => e === i).length);
}

// 또 다른 분들의 코드
let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1); // 순회 돌면서 해당 key값을 업데이트 해주는 식으로
}

// 서현주님 코드
map.set("이호준", (map.get("이호준") || 0) + 1);
// => map.set('이호준', 1)
map.set("이호준", (map.get("이호준") || 0) + 1);
// => map.set('이호준', 2)
map.set("이호준", (map.get("이호준") || 0) + 1);
// => map.set('이호준', 3)
map.set("김은하", (map.get("김은하") || 0) + 1);
// => map.set('김은하', 1)

///////////////

let sss = new Set("abcdeeeeeeeee");
sss.size;
sss.add("f");

// Set을 순환하기
for (var variable of sss) {
  console.log(variable);
}

// 값이 배열인 경우
let arrset = new Set("abcdeeeeeeeee".split(""));
console.log(arrset); // {'a', 'b', 'c', 'd', 'e'}

// Set의 값을 제거하기
arrset.delete("b");

// Set의 값을 확인하기
console.log(arrset.has("a"));
console.log(arrset.has("z"));

let a = new Set("abc");
let b = new Set("cde");
// 교집합
// a 배열을 순회돌면서 각 값 (a,b,c)들이 b에 포함되는 값이면 배열로 출력
let cro = [...a].filter((value) => b.has(value));

// 합집합
// concat : 배열과 배열 이어붙이기
let union = new Set([...a].concat(...b));

// 차집합
// a를 순회돌면서 b가 가지지 못한 것을 배열로 출력
let dif = new Set([...a].filter((x) => !b.has(x)));
