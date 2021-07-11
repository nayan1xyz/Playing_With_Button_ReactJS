import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const state = useState();
  const initialcolor = "#8e44ad";
  const [bg, setbg] = useState(initialcolor);
  const [txt, setTxt] = useState("Click Me");
  const [btnclr, setbtnclr] = useState(initialcolor);
  const changeColor = () => {
    setbg("#34568B");
    var emoji = String.fromCodePoint(0x1f605);
    setbtnclr("#34568B");
    setTxt("Hey!! YOU CHANGED ME" + emoji);
  };
  const doublePress = () => {
    setbg("#955251");
    var emoji = String.fromCodePoint(0x1f621);
    setbtnclr("#955251");
    setTxt("STOP DISTURBING ME!! " + emoji);
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <p style={{ backgroundColor: "gray" }}>Play With Button</p>
        <button
          style={{ backgroundColor: btnclr }}
          onClick={changeColor}
          onDoubleClick={doublePress}
        >
          {txt}
        </button>
      </div>
    </>
  );
};
export default App;
