import React from "react";
import { withIcon } from "../../hoc";

const Clear = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.63 11.1C16.78 9.49 14.38 8.5 11.73 8.5C7.07999 8.5 3.14999 11.53 1.76999 15.72L4.12999 16.5C5.17999 13.31 8.17999 11 11.73 11C13.68 11 15.46 11.72 16.85 12.88L13.23 16.5H22.23V7.5L18.63 11.1Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Clear;
