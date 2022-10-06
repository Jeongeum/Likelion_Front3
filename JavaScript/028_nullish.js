let firstName = null;
let lastName = null;
let nickName = "바이올렛";
// null이나 undefined가 아닌 첫번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자");

// let a = 10;
// let b = 20;
// let c = 30;

// let a = null;
// let b = 20;
// let c = null;
// let d = a ?? b ?? c;

// let a;
// let b;
// let c;
// let d = a?? b?? c;

let 실명;
let 별명 = "licat";
let 기본값 = "프로도";

let 채팅창아이디 = 실명 ?? 별명 ?? 기본값;
console.log(채팅창아이디);

// ||와 ??의 차이점
let height = 0;

alert(height || 100); // 100 -> height에 0이 들어오면 false값이니까 뒤에도 봐야 전체 결과가 true인지 false인지 알 수 있다. 그래서 결국은 100이 출력된다.
alert(height ?? 100); // 0 -> ??는 null과 undefined 외의 모든 것을 값으로 본다. 그래서 height인 0이 출력된다.

// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
