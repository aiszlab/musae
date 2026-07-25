import React from "react";
import { withIcon } from "../../hoc";

const FormatListNumberedRtl = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.8947) scale(1.2632)">
        <path
          d="M16 13H18V13.5H17V14.5H18V15H16V16H19V12H16V13ZM17 4H18V0H16V1H17V4ZM16 7H17.8L16 9.1V10H19V9H17.2L19 6.9V6H16V7ZM0 1H14V3H0V1ZM0 13H14V15H0V13ZM0 7H14V9H0V7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FormatListNumberedRtl;
