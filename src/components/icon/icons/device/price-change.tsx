import React from "react";
import { withIcon } from "../../hoc";

const IconPriceChange = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8 17H10V16H11C11.55 16 12 15.55 12 15V12C12 11.45 11.55 11 11 11H8V10H12V8H10V7H8V8H7C6.45 8 6 8.45 6 9V12C6 12.55 6.45 13 7 13H10V14H6V16H8V17ZM20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V6H20V18ZM14 10L16 8L18 10M18 14.25L16 16.25L14 14.25"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPriceChange;
