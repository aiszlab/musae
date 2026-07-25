import React from "react";
import { withIcon } from "../../hoc";

const CreateNewFolder = withIcon(({ size }) => {
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
          d="M18 2H10L8 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V4C20 2.89 19.11 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM10 10H12V12H14V10H16V8H14V6H12V8H10V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CreateNewFolder;
