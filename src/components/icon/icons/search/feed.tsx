import React from "react";
import { withIcon } from "../../hoc";

const IconFeed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V8L16 3ZM19 19H5V5H15V9H19V19ZM7 17H17V15H7V17ZM12 7H7V9H12V7ZM7 13H17V11H7V13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFeed;
