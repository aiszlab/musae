import React from "react";
import { withIcon } from "../../hoc";

const IconOpenInFull = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 11V3H13L16.29 6.29L6.29 16.29L3 13V21H11L7.71 17.71L17.71 7.71L21 11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOpenInFull;
