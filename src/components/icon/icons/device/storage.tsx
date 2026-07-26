import React from "react";
import { withIcon } from "../../hoc";

const IconStorage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 20H22V16H2V20ZM4 17H6V19H4V17ZM2 4V8H22V4H2ZM6 7H4V5H6V7ZM2 14H22V10H2V14ZM4 11H6V13H4V11Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStorage;
