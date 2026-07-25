import React from "react";
import { withIcon } from "../../hoc";

const ContactEmergency = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3) scale(1)">
        <path
          d="M9 11C10.65 11 12 9.65 12 8C12 6.35 10.65 5 9 5C7.35 5 6 6.35 6 8C6 9.65 7.35 11 9 11ZM9 7C9.54 7 10 7.46 10 8C10 8.54 9.54 9 9 9C8.46 9 8 8.54 8 8C8 7.46 8.46 7 9 7Z"
          fill="currentColor"
        />
        <path
          d="M22 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H22C23.1 18 23.99 17.1 23.99 16L24 2C24 0.9 23.1 0 22 0ZM4.54 16C5.64 14.78 7.23 14 9 14C10.77 14 12.36 14.78 13.46 16H4.54ZM22 16H15.92C14.54 13.61 11.96 12 9 12C6.04 12 3.46 13.61 2.08 16H2V2H22V16Z"
          fill="currentColor"
        />
        <path
          d="M15.78 8.15L17.25 7.3V9H18.75V7.3L20.22 8.15L20.97 6.85L19.5 6L20.97 5.15L20.22 3.85L18.75 4.7V3H17.25V4.7L15.78 3.85L15.03 5.15L16.5 6L15.03 6.85L15.78 8.15Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ContactEmergency;
