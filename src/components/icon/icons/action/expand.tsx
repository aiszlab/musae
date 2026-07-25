import React from "react";
import { withIcon } from "../../hoc";

const Expand = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M20 20H4V22H20V20Z" fill="currentColor" />
      <path d="M20 2H4V4H20V2Z" fill="currentColor" />
      <path
        d="M9.41 13.59L8 15L12 19L16 15L14.59 13.59L13 15.17V8.83L14.59 10.41L16 9L12 5L8 9L9.41 10.41L11 8.83V15.17L9.41 13.59Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Expand;
