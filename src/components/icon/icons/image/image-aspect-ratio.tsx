import React from "react";
import { withIcon } from "../../hoc";

const ImageAspectRatio = withIcon(({ size }) => {
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
          d="M14 6H12V8H14V6ZM14 10H12V12H14V10ZM6 6H4V8H6V6ZM10 6H8V8H10V6ZM18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H2V2H18V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ImageAspectRatio;
