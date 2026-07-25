import React from "react";
import { withIcon } from "../../hoc";

const PersonAddDisabled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.3704) scale(1.0435)">
        <path
          d="M15 4.29C16.1 4.29 17 5.19 17 6.29C17 7.28 16.27 8.11 15.33 8.26L13.02 5.95C13.19 5.01 14.01 4.29 15 4.29ZM15 2.29C12.79 2.29 11 4.08 11 6.29C11 6.47 11.03 6.64 11.05 6.81L14.48 10.24C14.65 10.26 14.82 10.29 15 10.29C17.21 10.29 19 8.5 19 6.29C19 4.08 17.21 2.29 15 2.29ZM16.69 12.45L22.53 18.29H23V16.29C23 14.15 19.44 12.79 16.69 12.45ZM13.01 14.42L14.88 16.29H9C9.08 16.05 9.88 15.28 11.91 14.72L13.01 14.42ZM1.41 0L0 1.41L4 5.41V8.29H1V10.29H4V13.29H6V10.29H8.88L11.39 12.8C9.19 13.4 7 14.59 7 16.29V18.29H16.88L20.88 22.29L22.29 20.88L1.41 0ZM6 8.29V7.41L6.88 8.29H6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PersonAddDisabled;
