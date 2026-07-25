import React from "react";
import { withIcon } from "../../hoc";

const Note = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M14 0H2C0.9 0 0 0.9 0 2V14.01C0 15.11 0.9 16 2 16H18C19.1 16 20 15.1 20 14V6L14 0ZM2 14.01V2H13V7H18V14.01H2Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Note;
