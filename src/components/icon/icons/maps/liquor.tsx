import React from "react";
import { withIcon } from "../../hoc";

const Liquor = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.6, 0) scale(1.2)">
        <path
          d="M0 12C0 13.3 0.84 14.4 2 14.82V18H0V20H6V18H4V14.82C5.16 14.4 6 13.3 6 12V4H0V12ZM2 6H4V9H2V6ZM2 11H4V12C4 12.55 3.55 13 3 13C2.45 13 2 12.55 2 12V11Z"
          fill="currentColor"
        />
        <path
          d="M17.64 6.54L16.68 6.22C16.27 6.08 16 5.7 16 5.27V1C16 0.45 15.55 0 15 0H12C11.45 0 11 0.45 11 1V5.28C11 5.71 10.73 6.09 10.32 6.23L9.36 6.55C8.55 6.83 8 7.59 8 8.45V18C8 19.1 8.9 20 10 20H17C18.1 20 19 19.1 19 18V8.44C19 7.58 18.45 6.82 17.64 6.54ZM13 2H14V3H13V2ZM17 18H10V16H17V18ZM17 14H10V12H17V14ZM17 10H10V8.44L10.95 8.12C12.18 7.72 13 6.57 13 5.28V5H14V5.28C14 6.57 14.82 7.72 16.05 8.13L17 8.44V10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Liquor;
