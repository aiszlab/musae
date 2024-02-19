import React from "react";
import { withIcon } from "../../hoc";

const KeyboardArrowUp = withIcon(({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M7.41 15.7049L12 11.1249L16.59 15.7049L18 14.2949L12 8.29492L6 14.2949L7.41 15.7049Z"
        fill="currentcolor"
      />
    </svg>
  );
});

export default KeyboardArrowUp;
