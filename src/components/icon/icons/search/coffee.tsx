import React from "react";
import { withIcon } from "../../hoc";

const IconCoffee = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.5 3H5C3.9 3 3 3.9 3 5V10.71C3 14.54 5.95 17.89 9.78 18C13.74 18.12 17 14.94 17 11V10H17.5C19.43 10 21 8.43 21 6.5C21 4.57 19.43 3 17.5 3ZM15 5V8H5V5H15ZM15 10V11C15 13.76 12.76 16 10 16C7.24 16 5 13.76 5 11V10M17.5 8H17V5H17.5C18.33 5 19 5.67 19 6.5C19 7.33 18.33 8 17.5 8ZM3 19H19V21H3V19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCoffee;
