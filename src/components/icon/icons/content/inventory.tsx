import React from "react";
import { withIcon } from "../../hoc";

const IconInventory = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.25 6H6.25V9H16.25V6H18.25V11H20.25V6C20.25 4.9 19.35 4 18.25 4H14.07C13.65 2.84 12.55 2 11.25 2C9.95 2 8.85 2.84 8.43 4H4.25C3.15 4 2.25 4.9 2.25 6V20C2.25 21.1 3.15 22 4.25 22H10.25V20H4.25V6ZM11.25 4C11.8 4 12.25 4.45 12.25 5C12.25 5.55 11.8 6 11.25 6C10.7 6 10.25 5.55 10.25 5C10.25 4.45 10.7 4 11.25 4Z"
        fill="currentColor"
      />
      <path
        d="M20.25 12.5L14.76 18L11.75 15L10.25 16.5L14.76 21L21.75 14L20.25 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconInventory;
