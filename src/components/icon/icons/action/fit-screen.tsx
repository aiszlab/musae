import React from "react";
import { withIcon } from "../../hoc";

const FitScreen = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 16H18V8H6V16ZM8 10H16V14H8V10ZM4 15H2V18C2 19.1 2.9 20 4 20H7V18H4V15ZM4 6H7V4H4C2.9 4 2 4.9 2 6V9H4V6ZM20 4H17V6H20V9H22V6C22 4.9 21.1 4 20 4ZM20 18H17V20H20C21.1 20 22 19.1 22 18V15H20V18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default FitScreen;
