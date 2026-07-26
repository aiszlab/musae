import React from "react";
import { withIcon } from "../../hoc";

const IconBrunchDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 21.5C2 21.78 2.22 22 2.49 22H15.51C15.78 22 16 21.78 16 21.5V20H2V21.5Z"
        fill="currentColor"
      />
      <path
        d="M15.5 16H11V14H7V16H2.5C2.22 16 2 16.22 2 16.5V18H16V16.5C16 16.22 15.78 16 15.5 16Z"
        fill="currentColor"
      />
      <path
        d="M20.47 15.45C21.46 14.38 22 12.97 22 11.51V2H16V11.47C16 12.95 16.58 14.39 17.6 15.47L18 15.89V22H22V20H20V15.97L20.47 15.45ZM18 4H20V8H18V4ZM19.03 14.07C18.38 13.36 18 12.42 18 11.47V10H20V11.51C20 12.46 19.66 13.36 19.03 14.07Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBrunchDining;
