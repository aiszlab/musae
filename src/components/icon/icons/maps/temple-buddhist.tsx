import React from "react";
import { withIcon } from "../../hoc";

const TempleBuddhist = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.5455) scale(1.0909)">
        <path
          d="M20 8.02C20 9.11 19.11 10 18.02 10H17V7.86C18.72 7.42 20 5.87 20 4.02V4L18 4.02C18 5.11 17.11 6 16.02 6H15.5L11 0L6.5 6H5.98C4.89 6 4 5.11 4 4.02H2C2 5.88 3.28 7.42 5 7.86V10H3.98C2.89 10 2 9.11 2 8.02H0C0 9.88 1.28 11.42 3 11.86V21H10V17C10 16.45 10.45 16 11 16C11.55 16 12 16.45 12 17V21H19V11.86C20.72 11.42 22 9.87 22 8.02V8L20 8.02ZM11 3.33L13 6H9L11 3.33ZM7 8H15V10H7V8ZM17 19H14V17C14 15.35 12.65 14 11 14C9.35 14 8 15.35 8 17V19H5V12H17V19Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TempleBuddhist;
