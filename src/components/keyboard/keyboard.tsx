import React, { FunctionComponent, useState, useRef, ChangeEvent } from "react";
import KeyboardWrapper from "./keyboardWrapper";

const Keyboard: FunctionComponent = () => {
  const [input, setInput] = useState("");
  const keyboardRef = useRef<any>(null); 

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    setInput(input);
    keyboardRef.current.setInput(input); 
  };

  return (
    <div>
      <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={e => onChangeInput(e)}
      />
      <KeyboardWrapper keyboardRef={keyboardRef} onChange={setInput} /> {/* Change here */}
    </div>
  );
};

export default Keyboard;

// NOTE TO SELF: for heatmap check out https://hodgef.com/simple-keyboard/editor/?d=hodgef/react-simple-keyboard-demos/tree/uc-customization
// NOTE TO SELF: for customization check out https://hodgef.com/simple-keyboard/documentation/options/layout/
//               and honestly the link above too lol
