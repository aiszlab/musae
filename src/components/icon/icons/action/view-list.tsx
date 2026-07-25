import React from "react";
import { withIcon } from "../../hoc";

const ViewList = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 17H7V13H3V17ZM3 21H7V19H3V21ZM3 9H7V5H3V9ZM9 17H21V13H9V17ZM9 21H21V19H9V21ZM9 5V9H21V5H9Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default ViewList;
