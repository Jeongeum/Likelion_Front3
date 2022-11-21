// import React, { useState } from "react";

// function Two() {
//   const [value, setValue] = useState("");
//   function onChange(e) {
//     setValue(e.target.value);
//   }
//   return (
//     <>
//       <input type="text" onChange={onChange} />
//       <div>{value}가 강해졌다 돌격해!</div>
//     </>
//   );
// }

// export default Two;

// 커스텀 훅으로 코드 변경
import React from "react";
import useJeongeum from "../Hook/useJeongeum";

function SomethingComponent() {
  const [value, onChange] = useJeongeum("");
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}가 강해졌다 돌격해!</div>
    </>
  );
}
export default SomethingComponent;
