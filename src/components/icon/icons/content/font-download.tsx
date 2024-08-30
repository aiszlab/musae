import React from "react";
import { withIcon } from "../../hoc";

const FontDownload = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.17 15.5H14.81L15.95 18.5H18.04L12.93 5.5H11.07L5.96 18.5H8.05L9.17 15.5ZM12 7.98L14.07 13.5H9.93L12 7.98ZM20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM20 20H4V4H20V20Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default FontDownload;
