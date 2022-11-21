// props로 전달
// import React from "react";

// const App = () => {
//   return (
//     <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
//   );
// };

// const HelloLicat = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h2>{props.value.id}</h2>
//       <strong>{props.value.name}</strong>
//       <HelloLicatTwo value={{name:props.value.name, id: props.value.id}}/>
//     </div>
//   );
// };

// const HelloLicatTwo = (props) => {
//   return (
//     <div>
//       <h2>Two : {props.value.id}</h2>
//       <strong>Two : {props.value.name}</strong>
//     </div>
//   );
// };

// export default App;

// 구조분해할당으로 변경

// const App = () => {
//   return (
//     <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
//   );
// };

// const HelloLicat = ({value}) => {
//   return (
//     <div>
//       <h2>{value.id}</h2>
//       <strong>{value.name}</strong>
//       <HelloLicatTwo value={{name:value.name, id: value.id}}/>
//     </div>
//   );
// };

// const HelloLicatTwo = ({value}) => {
//   return (
//     <div>
//       <h2>Two : {value.id}</h2>
//       <strong>Two : {value.name}</strong>
//     </div>
//   );
// };

// export default App;

// 한번 더 변경

const App = () => {
  return <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />;
};

const HelloLicat = ({ value: { name, id } }) => {
  return (
    <div>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloLicatTwo value={{ name, id }} />
    </div>
  );
};

const HelloLicatTwo = ({ value: { name, id } }) => {
  return (
    <div>
      <h2>Two : {id}</h2>
      <strong>Two : {name}</strong>
    </div>
  );
};

export default App;
