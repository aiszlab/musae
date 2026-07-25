import React from "react";
import { withIcon } from "../../hoc";

const DialerSip = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M13 0H14V5H13V0ZM12 2H10V1H12V0H9V3H11V4H9V5H12V2ZM15 0V5H16V3H18V0H15ZM17 2H16V1H17V2ZM17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.33 11.9 13.22 11.88 13.12 11.88C12.86 11.88 12.61 11.98 12.42 12.17L10.22 14.37C7.39 12.93 5.07 10.62 3.63 7.78L5.83 5.57C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.5C18 12.95 17.55 12.5 17 12.5ZM2.03 2H3.53C3.6 2.88 3.75 3.75 3.99 4.59L2.79 5.8C2.38 4.59 2.12 3.32 2.03 2ZM16 15.97C14.68 15.88 13.41 15.62 12.2 15.22L13.4 14.02C14.25 14.26 15.11 14.41 15.99 14.47V15.97H16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default DialerSip;
