import React from "react";
import { withIcon } from "../../hoc";

const IconAssistant = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 1.5H5C3.9 1.5 3 2.4 3 3.5V17.5C3 18.6 3.9 19.5 5 19.5H9L12 22.5L15 19.5H19C20.1 19.5 21 18.6 21 17.5V3.5C21 2.4 20.1 1.5 19 1.5ZM19 17.5H14.17L12 19.67L9.83 17.5H5V3.5H19V17.5ZM12 16.5L13.88 12.38L18 10.5L13.88 8.62L12 4.5L10.12 8.62L6 10.5L10.12 12.38L12 16.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAssistant;
