import React from "react";
import { withIcon } from "../../hocs";

const KeyboardArrowRight = withIcon(({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M8.29498 16.59L12.875 12L8.29498 7.41L9.70498 6L15.705 12L9.70498 18L8.29498 16.59Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default KeyboardArrowRight;
