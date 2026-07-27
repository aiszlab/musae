import React from "react";
import { withIcon } from "../../hoc";

const IconCallSplit = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 4L16.29 6.29L13.41 9.17L14.83 10.59L17.71 7.71L20 10V4H14ZM10 4H4V10L6.29 7.71L11 12.41V20H13V11.59L7.71 6.29L10 4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCallSplit;
