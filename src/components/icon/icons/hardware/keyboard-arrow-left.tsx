import React from "react";
import { withIcon } from "../../hocs";

const KeyboardArrowLeft = withIcon(({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M15.705 16.59L11.125 12L15.705 7.41L14.295 6L8.29498 12L14.295 18L15.705 16.59Z" fill="currentColor" />
    </svg>
  );
});

export default KeyboardArrowLeft;
