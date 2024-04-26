import { Rearranger } from "@/Rearranger";
import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<typeof Keyboard>;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef
}) => {
  const [layoutName, setLayoutName] = useState("default");

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
  };

  return (
    <Keyboard
      keyboardRef={r => (keyboardRef.current = r)}
      layout={{'custom': (new Rearranger()).getRearrangedLayout("zzzzzzzzzzzzzzzzzzzoommmmmmmmmmmmmm")}} // example, dummy string for testing
      layoutName={'custom'}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onRender={() => console.log("Rendered Keyboard :)")}
    />
  );
};

export default KeyboardWrapper;

// const keyboard = React.useRef<typeof Keyboard>(null)