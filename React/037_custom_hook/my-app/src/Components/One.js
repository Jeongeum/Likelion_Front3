// import React, { useState } from "react";

// function One() {
//   const [value, setValue] = useState("");
//   function onChange(e) {
//     setValue(e.target.value);
//   }
//   return (
//     <>
//       <input type="text" onChange={onChange} />
//       <div>{value}</div>
//     </>
//   );
// }

// export default One;

// 커스텀 훅으로 코드 변경
import React from "react";
import useJeongeum from "../Hook/useJeongeum";

function InputComponent() {
  const [value, onChange] = useJeongeum("");
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}</div>
    </>
  );
}
export default InputComponent;
