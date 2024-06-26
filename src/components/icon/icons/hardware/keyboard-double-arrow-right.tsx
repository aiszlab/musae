import React from "react";
import { withIcon } from "../../hoc";

const KeyboardDoubleArrowRight = withIcon(({ size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M6.41 6L5 7.41L9.58 12L5 16.59L6.41 18L12.41 12L6.41 6Z" fill="currentColor" />
      <path d="M13 6L11.59 7.41L16.17 12L11.59 16.59L13 18L19 12L13 6Z" fill="currentColor" />
    </svg>
  );
});

export default KeyboardDoubleArrowRight;
