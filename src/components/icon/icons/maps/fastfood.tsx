import React from "react";
import { withIcon } from "../../hoc";

const Fastfood = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0909)">
        <path
          d="M0 20.98C0 21.54 0.45 21.99 1.01 21.99H14C14.56 21.99 15.01 21.54 15.01 20.98V20H0V20.98ZM7.5 7.99C3.75 7.99 0 10 0 14H15C15 10 11.25 7.99 7.5 7.99ZM2.62 12C3.73 10.45 6.09 9.99 7.5 9.99C8.91 9.99 11.27 10.45 12.38 12H2.62ZM0 16H15V18H0V16ZM17 4V0H15V4H10L10.23 6H19.79L18.39 20H17V22H18.72C19.56 22 20.25 21.35 20.35 20.53L22 4H17Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Fastfood;
