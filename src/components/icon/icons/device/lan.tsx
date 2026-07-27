import React from "react";
import { withIcon } from "../../hoc";

const IconLan = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 22H21V15H18V11H13V9H16V2H8V9H11V11H6V15H3V22H11V15H8V13H16V15H13V22ZM10 7V4H14V7H10ZM9 17V20H5V17H9ZM19 17V20H15V17H19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLan;
