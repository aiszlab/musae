import React from "react";
import { withIcon } from "../../hoc";

const EditNote = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.0731) scale(1.3236)">
        <path
          d="M0 4H11V6H0V4ZM0 2H11V0H0V2ZM0 10H7V8H0V10ZM15.01 6.87L15.72 6.16C16.11 5.77 16.74 5.77 17.13 6.16L17.84 6.87C18.23 7.26 18.23 7.89 17.84 8.28L17.13 8.99L15.01 6.87ZM14.3 7.58L9 12.88V15H11.12L16.42 9.7L14.3 7.58Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default EditNote;
