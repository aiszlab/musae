import React from "react";
import { withIcon } from "../../hoc";

const IconLocalSee = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H4V7H8.05L8.64 6.35L9.88 5H14.12L15.36 6.35L15.95 7H20V19ZM12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8ZM12 16.2C10.23 16.2 8.8 14.77 8.8 13C8.8 11.23 10.23 9.8 12 9.8C13.77 9.8 15.2 11.23 15.2 13C15.2 14.77 13.77 16.2 12 16.2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalSee;
