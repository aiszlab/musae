import React from "react";
import { withIcon } from "../../hoc";

const AddLink = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.2) scale(1.2)">
        <path
          d="M6 4H14V6H6V4ZM18.1 5H20C20 2.24 17.76 0 15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5ZM1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM17 5H15V8H12V10H15V13H17V10H20V8H17V5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AddLink;
