import React from "react";
import { withIcon } from "../../hoc";

const IconBedroomParent = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.35 11.45V9C18.35 7.9 17.45 7 16.35 7H13C12.63 7 12.28 7.12 12 7.32C11.72 7.12 11.37 7 11 7H7.65C6.55 7 5.65 7.9 5.65 9V11.45C5.25 11.91 5 12.51 5 13.17V17H6.5V15.5H17.5V17H19V13.17C19 12.51 18.75 11.91 18.35 11.45ZM16.75 10.5H12.75V8.5H16.75V10.5ZM7.25 8.5H11.25V10.5H7.25V8.5ZM17.5 14H6.5V13C6.5 12.45 6.95 12 7.5 12H16.5C17.05 12 17.5 12.45 17.5 13V14ZM20 4V20H4V4H20ZM20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBedroomParent;
