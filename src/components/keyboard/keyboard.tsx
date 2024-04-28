import React, { useRef, ChangeEvent, Dispatch, SetStateAction  } from "react";
import KeyboardWrapper from "./keyboardWrapper";

interface KeyboardProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  frequentlyUsed: string;
}

export default function Keyboard ( props: KeyboardProps ) {
  const keyboardRef = useRef<any>(null); 

  const onChangeInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const input = event.target.value;
    props.setInput(input);
    keyboardRef.current.setInput(input); 
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full">
        <textarea
          value={props.input}
          placeholder={"Tap on the virtual keyboard to start"}
          onChange={e => onChangeInput(e)}
          className="resize-y w-full"
        />
      </div>
      
      <KeyboardWrapper 
        keyboardRef={keyboardRef} 
        onChange={props.setInput} 
        frequentlyUsed={props.frequentlyUsed} 
      /> {/* Change here */}
    </div>
  );
};

// NOTE TO SELF: for heatmap check out https://hodgef.com/simple-keyboard/editor/?d=hodgef/react-simple-keyboard-demos/tree/uc-customization
// NOTE TO SELF: for customization check out https://hodgef.com/simple-keyboard/documentation/options/layout/
//               and honestly the link above too lol
