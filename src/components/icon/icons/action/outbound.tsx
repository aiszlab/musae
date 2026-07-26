import React from "react";
import { withIcon } from "../../hoc";

const IconOutbound = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.88 11.54L15.58 9.83L12.66 6.93V11H11.34V6.93L8.42 9.83L10.12 11.54L9.17 16.17L10.58 17.58H13.42L14.83 16.17L13.88 11.54Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOutbound;
