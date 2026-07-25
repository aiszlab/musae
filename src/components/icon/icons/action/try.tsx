import React from "react";
import { withIcon } from "../../hoc";

const TryIcon = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 2H4C2.9 2 2 2.9 2 4V18L6 14H20C21.1 14 22 13.1 22 12V4C22 2.9 21.1 2 20 2ZM20 12H5.17L4 13.17V4H20V12Z"
        fill="currentColor"
      />
      <path d="M12 9H13V10H12V9ZM12 6H13V8H12V6Z" fill="currentColor" />
    </svg>
  );
});

export default TryIcon;
