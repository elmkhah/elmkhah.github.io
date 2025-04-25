import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState("");

  function clickHandler() {
    if (inputText.trim() !== "") {
      setList([...list, inputText]);
      setInputText(""); // پاک کردن input بعد از اضافه شدن
    }
  }

  function removeHandler(indexToRemove) {
    const newList = list.filter((val, index) => index != indexToRemove);
    setList(newList);
  }

  return (
    <div id="main">
      <h1>Hello World</h1>
      <div className="inp">
      <input
        type="text"
        placeholder="Enter your work"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={clickHandler}>Add</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <div>
              <button id="removeBut" onClick={() => removeHandler(index)}>remove</button>
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
