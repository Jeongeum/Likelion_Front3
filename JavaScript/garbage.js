let me = { age: 30 };
let you = me;
// me와 you가 객체를 참조하고 있기 때문에 객체의 참조 카운트는 2

me = null; // 참조 카운트 : 1
you = null; // 참조 카운트 : 0

// 참조 카운트가 0이 된 것이 가비지 컬렉션의 대상이 된다. (메모리에서 삭제)

let x = {
  y: {
    z: 1,
  },
};

// x가 참조하는 객체를 obj1이라 하고, y가 참조하고 있는 객체를 obj2라 하자.

let a = x; // obj1의 참조 카운트 : 2 (x와 a)
x = 1; // obj1의 참조 카운트 : 1 (x가 참조하는 대상이 바뀌어 버려서 a만 남음)

let b = a.y; // obj2의 참조 카운트 : 2 (a.y와 b)
a = 2; // obj1의 참조 카운트 : 0 ( ) -> 가비지컬렉션의 대상인데 obj2는 아직 참조하는 애들이 존재함.
// 이 경우 obj1은 가비지컬렉션의 대상이 되더라도 제거되지 않는다.
// 이렇게 불필요하게 남아있는 obj1 객체가 존재하는 경우, 메모리 누수(memory leak)가 발생했다고 표현한다.

// 클로저
function outer() {
  let privateval = ["test"];

  function getPrivate() {
    return privateval;
  }

  return getPrivate;
}

const getPrivateData = outer();
const secretVal = getPrivateData();

console.log(secretVal);

// 클로저를 이용했을 때에는 사용한 변수를 비워줘야한다. 그러지 않으면 이 변수들을 계속 남아있게 된다.
// null과 undefined를 구분하지 않는다.
// secretVal = null;
// secretVal = undefined;

// 실습
const aespa = ["카리나", "윈터", "지젤", "닝닝"];
// 결과 : ['카리나💖', '윈터💖', '지젤💖', '닝닝💖']

const result = aespa.map((member) => member + "💖");
console.log(result);
