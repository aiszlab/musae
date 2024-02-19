import React from "react";
import { withIcon } from "../../hoc";

const KeyboardArrowDown = withIcon((props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none">
      <path
        d="M7.41 8.29492L12 12.8749L16.59 8.29492L18 9.70492L12 15.7049L6 9.70492L7.41 8.29492Z"
        fill="currentcolor"
      />
    </svg>
  );
});

export default KeyboardArrowDown;
