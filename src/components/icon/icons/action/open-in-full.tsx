import React from "react";
import { withIcon } from "../../hoc";

const OpenInFull = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 8.59V3H15.41L17.42 5.01L13.42 9.01L14.84 10.43L20.84 4.43L21 8.59ZM3 15.41V21H8.59L6.58 18.99L10.58 14.99L9.16 13.57L3.16 19.57L3 15.41Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default OpenInFull;
