import React from "react";
import { withIcon } from "../../hoc";

const ContactPhone = withIcon(({ size }) => {
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
          d="M22 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H22C23.1 18 23.99 17.1 23.99 16L24 2C24 0.9 23.1 0 22 0ZM22 16H2V2H22V16ZM19.01 14.99L21 13L19.49 11H17.85C17.63 10.37 17.5 9.7 17.5 9C17.5 8.3 17.63 7.63 17.85 7H19.49L21 5L19.01 3.01C17.7 3.99 16.73 5.38 16.28 7C16.1 7.64 16 8.31 16 9C16 9.69 16.1 10.36 16.28 11C16.73 12.61 17.7 14.01 19.01 14.99ZM9 9C10.65 9 12 7.65 12 6C12 4.35 10.65 3 9 3C7.35 3 6 4.35 6 6C6 7.65 7.35 9 9 9ZM9 5C9.55 5 10 5.45 10 6C10 6.55 9.55 7 9 7C8.45 7 8 6.55 8 6C8 5.45 8.45 5 9 5ZM15 13.59C15 11.09 11.03 10.01 9 10.01C6.97 10.01 3 11.09 3 13.59V15H15V13.59ZM5.48 13C6.22 12.5 7.7 12 9 12C10.3 12 11.77 12.49 12.52 13H5.48Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ContactPhone;
