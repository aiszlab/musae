import React from "react";
import { withIcon } from "../../hocs";

const KeyboardDoubleArrowLeft = withIcon((props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none">
      <path d="M17.59 18L19 16.59L14.42 12L19 7.41L17.59 6L11.59 12L17.59 18Z" fill={props.color} />
      <path d="M11 18L12.41 16.59L7.83 12L12.41 7.41L11 6L5 12L11 18Z" fill={props.color} />
    </svg>
  );
});

export default KeyboardDoubleArrowLeft;
