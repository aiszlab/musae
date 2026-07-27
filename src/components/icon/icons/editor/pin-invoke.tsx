import React from "react";
import { withIcon } from "../../hoc";

const IconPinInvoke = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 12V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H14V6H4V18H20V12H22ZM22 7C22 5.34 20.66 4 19 4C17.34 4 16 5.34 16 7C16 8.66 17.34 10 19 10C20.66 10 22 8.66 22 7ZM9.34 12H11.58L8.63 14.95L10.04 16.36L13 13.42V15.66H15V10H9.34V12Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPinInvoke;
