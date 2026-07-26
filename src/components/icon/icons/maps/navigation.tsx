import React from "react";
import { withIcon } from "../../hoc";

const IconNavigation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 6.6571 L 17.4068 19.8322 L 13.0235 17.8995 L 12 17.4448 L 10.9771 17.8995 L 6.5938 19.8322 L 12 6.6571ZM 12 0 L 2.5263 23.1039 L 3.4232 24.0008 L 12 20.2112 L 20.5774 24.0008 L 21.4743 23.1039 L 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNavigation;
