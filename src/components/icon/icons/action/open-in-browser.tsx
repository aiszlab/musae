import React from "react";
import { withIcon } from "../../hoc";

const IconOpenInBrowser = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 3.5H5C3.89 3.5 3 4.4 3 5.5V18.5C3 19.6 3.9 20.5 5 20.5H9V18.5H5V8.5H19V18.5H15V20.5H19C20.1 20.5 21 19.6 21 18.5V5.5C21 4.4 20.11 3.5 19 3.5ZM12 11.5L8 15.5H11V20.5H13V15.5H16L12 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOpenInBrowser;
