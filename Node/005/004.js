// 003에서 export 된 것들을 모두(*) 가져옴. 그것의 이름을 개인프로필로 하겠다!
// 개인프로필 = {
//     이름: '호준',
//     나이: 10
// }
// as 형태를 잘 안쓰고 006번 같은 형태를 사용
import * as 개인프로필 from "./003.js";

console.log(개인프로필.이름);
console.log(개인프로필.나이);