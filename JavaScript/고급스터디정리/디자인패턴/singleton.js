// 싱글톤 패턴 : 오직 하나의 인스턴스만을 생성해야할 때 필요한 패턴
// 인스턴스는 각각 독립적이기 때문에 메모리도 각자 차지한다. (그래서 결과가 false)

// class Test {
//   constructor() {}
// }

// const test1 = new Test();
// const test2 = new Test();

// console.log(test1 === test2);

// 반드시 하나의 인스턴스만 생성하도록
class Singleton {
  constructor(data) {
    this.data = data;
    // this : 생성될 인스턴스
    // this.constructor : Singleton 클래스

    const instance = this.constructor.instance;

    if (instance) {
      return instance;
    }

    this.constructor.instance = this;
  }
}

// 처음에 만든 최초의 인스턴스만 가리키게 되니까 true가 뜬다.
// 인스턴스를 만들더라도 새로운걸 만드는게 아니라서 새로운 객체를 생성하지 않게 도와준다.
// const test1 = new Singleton();
// const test2 = new Singleton();

// console.log(test1 === test2);

const test1 = new Singleton(10);
const test2 = new Singleton(50);

console.log(test1.data);
console.log(test2.data);

const a = 10;
