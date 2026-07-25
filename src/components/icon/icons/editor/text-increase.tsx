import React from "react";
import { withIcon } from "../../hoc";

const TextIncrease = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.3671) scale(1.0904)">
        <path
          d="M0 14H2.42L3.69 10.42H9.34L10.6 14H13.02L7.76 0H5.26L0 14ZM4.42 8.39L6.45 2.6H6.57L8.6 8.39H4.42ZM19.01 6H22.01V8H19.01V11H17.01V8H14.01V6H17.01V3H19.01V6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TextIncrease;
