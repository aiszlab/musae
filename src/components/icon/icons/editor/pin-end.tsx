import React from "react";
import { withIcon } from "../../hoc";

const IconPinEnd = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 12V6H4V18H14V20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6V12H20ZM19 14C17.34 14 16 15.34 16 17C16 18.66 17.34 20 19 20C20.66 20 22 18.66 22 17C22 15.34 20.66 14 19 14ZM14.66 8H9V13.66H11V11.42L13.95 14.37L15.36 12.96L12.41 10H14.65V8H14.66Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPinEnd;
