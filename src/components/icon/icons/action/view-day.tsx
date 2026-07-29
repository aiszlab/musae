import React from "react";
import { withIcon } from "../../hoc";

const IconViewDay = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.5 18H2.5V20H21.5V18ZM19.5 10V14H4.5V10H19.5ZM20.5 8H3.5C2.95 8 2.5 8.45 2.5 9V15C2.5 15.55 2.95 16 3.5 16H20.5C21.05 16 21.5 15.55 21.5 15V9C21.5 8.45 21.05 8 20.5 8ZM21.5 4H2.5V6H21.5V4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconViewDay;
