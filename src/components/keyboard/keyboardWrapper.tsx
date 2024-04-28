import { Rearranger } from "@/Rearranger";
import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<typeof Keyboard>;
  frequentlyUsed: string;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
  frequentlyUsed,
}) => {
  const [layoutName, setLayoutName] = useState("default");
  const layout = {
    'default': [
      '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
      '{tab} q w e r t y u i o p [ ] \\',
      '{lock} a s d f g h j k l ; \' {enter}',
      '{shift} z x c v b n m , . / {shift}',
      '.com @ {space}'
    ],
    'shift': [
      '~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}',
      '{tab} Q W E R T Y U I O P { } |',
      '{lock} A S D F G H J K L : " {enter}',
      '{shift} Z X C V B N M &lt; &gt; ? {shift}',
      '.com @ {space}'
    ],
    'custom': (frequentlyUsed ? new Rearranger(frequentlyUsed).getRearrangedLayout() : new Rearranger("frequentlyUsed").getRearrangedLayout())
  }

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
  };

  return (
    <Keyboard
      keyboardRef={r => (keyboardRef.current = r)}
      layout = {layout}
      
      // okay, it looks like we have to change this based on whether or not we're rearranging. 
      // But the above is how you'd do it with rearranging.
      layoutName={ frequentlyUsed ? 'custom' : 'default' }
      onChange={onChange}
      onKeyPress={onKeyPress}
      onRender={() => console.log("Rendered Keyboard :)")}
    />
  );
};

export default KeyboardWrapper;

// const keyboard = React.useRef<typeof Keyboard>(null)