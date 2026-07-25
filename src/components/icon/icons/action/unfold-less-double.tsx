import React from "react";
import { withIcon } from "../../hoc";

const UnfoldLessDouble = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 17.59L15.29 14.3L16.71 15.71L12 20.41L7.29 15.71L8.71 14.3L12 17.59ZM12 6.41L8.71 9.7L7.29 8.29L12 3.59L16.71 8.29L15.29 9.7L12 6.41Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default UnfoldLessDouble;
