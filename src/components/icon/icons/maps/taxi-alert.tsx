import React from "react";
import { withIcon } from "../../hoc";

const TaxiAlert = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1429)">
        <path
          d="M4.5 16C5.32843 16 6 15.3284 6 14.5C6 13.6716 5.32843 13 4.5 13C3.67157 13 3 13.6716 3 14.5C3 15.3284 3.67157 16 4.5 16Z"
          fill="currentColor"
        />
        <path
          d="M13.5 16C14.3284 16 15 15.3284 15 14.5C15 13.6716 14.3284 13 13.5 13C12.6716 13 12 13.6716 12 14.5C12 15.3284 12.6716 16 13.5 16Z"
          fill="currentColor"
        />
        <path
          d="M16 12V17H2V12H16C14.09 12 12.37 11.24 11.11 10H2.81L3.85 7H9.29C9.1 6.37 9 5.7 9 5C9 4.3 9.1 3.63 9.29 3H6V5H3.5C2.84 5 2.29 5.42 2.08 6.01L0 12V20C0 20.55 0.45 21 1 21H2C2.55 21 3 20.55 3 20V19H15V20C15 20.55 15.45 21 16 21H17C17.55 21 18 20.55 18 20V12L17.91 11.73C17.3 11.9 16.66 12 16 12Z"
          fill="currentColor"
        />
        <path
          d="M16 0C13.24 0 11 2.24 11 5C11 7.76 13.24 10 16 10C18.76 10 21 7.76 21 5C21 2.24 18.76 0 16 0ZM16.5 8H15.5V7H16.5V8ZM16.5 6H15.5V2H16.5V6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TaxiAlert;
