import React from "react";
import { withIcon } from "../../hoc";

const Dangerous = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3ZM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5H14.9L19 9.1V14.9ZM14.83 7.76L12 10.59L9.17 7.76L7.76 9.17L10.59 12L7.76 14.83L9.17 16.24L12 13.41L14.83 16.24L16.24 14.83L13.41 12L16.24 9.17L14.83 7.76Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Dangerous;
