import React from "react";
import { withIcon } from "../../hoc";

const LineWeight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 17H21V15H3V17ZM3 20H21V19H3V20ZM3 13H21V10H3V13ZM3 4V8H21V4H3Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default LineWeight;
