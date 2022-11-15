import { useState } from "react";
import Contents from "./Contents";

export default function Navbar() {
  const [listName, setListName] = useState("one");
  const handleChangeId = (e) => {
    setListName(e.target.id);
  };
  return (
    <>
      <nav>
        <ul>
          <li
            id="one"
            style={listName === "one" ? { color: "blue" } : { color: "black" }}
            onClick={handleChangeId}
          >
            one
          </li>
          <li
            id="two"
            style={listName === "two" ? { color: "blue" } : { color: "black" }}
            onClick={handleChangeId}
          >
            two
          </li>
          <li
            id="three"
            style={
              listName === "three" ? { color: "blue" } : { color: "black" }
            }
            onClick={handleChangeId}
          >
            three
          </li>
          <li
            id="four"
            style={listName === "four" ? { color: "blue" } : { color: "black" }}
            onClick={handleChangeId}
          >
            four
          </li>
          <li
            id="five"
            style={listName === "five" ? { color: "blue" } : { color: "black" }}
            onClick={handleChangeId}
          >
            five
          </li>
        </ul>
      </nav>
      <Contents listName={listName} />
    </>
  );
}
