import React from "react";
import { withIcon } from "../../hoc";

const IconContactEmergency = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 14C10.65 14 12 12.65 12 11C12 9.35 10.65 8 9 8C7.35 8 6 9.35 6 11C6 12.65 7.35 14 9 14ZM9 10C9.54 10 10 10.46 10 11C10 11.54 9.54 12 9 12C8.46 12 8 11.54 8 11C8 10.46 8.46 10 9 10Z"
        fill="currentColor"
      />
      <path
        d="M22 3H2C0.9 3 0 3.9 0 5V19C0 20.1 0.9 21 2 21H22C23.1 21 23.99 20.1 23.99 19L24 5C24 3.9 23.1 3 22 3ZM4.54 19C5.64 17.78 7.23 17 9 17C10.77 17 12.36 17.78 13.46 19H4.54ZM22 19H15.92C14.54 16.61 11.96 15 9 15C6.04 15 3.46 16.61 2.08 19H2V5H22V19Z"
        fill="currentColor"
      />
      <path
        d="M15.78 11.15L17.25 10.3V12H18.75V10.3L20.22 11.15L20.97 9.85L19.5 9L20.97 8.15L20.22 6.85L18.75 7.7V6H17.25V7.7L15.78 6.85L15.03 8.15L16.5 9L15.03 9.85L15.78 11.15Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconContactEmergency;
