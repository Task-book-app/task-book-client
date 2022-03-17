import React, { useState } from "react";
import { useFela } from "react-fela";
import CheckBoxFalse from "./icons/CheckBoxFalse";
import CheckBoxTrue from "./icons/CheckBoxTrue";

const rules = () => ({
  cursor: "pointer",
  display: "flex",
  '& input[type="checkbox"]': {
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
});

const CheckBox = ({ fontSize, checked }) => {
  const { css } = useFela();
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label className={css(rules)}>
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        checked={isChecked}
        name=""
        id=""
      />
      {isChecked ? (
        <CheckBoxTrue fontSize={fontSize} />
      ) : (
        <CheckBoxFalse fontSize={fontSize} />
      )}
    </label>
  );
};

export default CheckBox;
