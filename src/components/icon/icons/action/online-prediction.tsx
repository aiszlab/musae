import React from "react";
import { withIcon } from "../../hoc";

const IconOnlinePrediction = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.5 11.5C15.5 13.5 13 15 13 16.5H11C11 15 8.5 13.5 8.5 11.5C8.5 9.57 10.07 8 12 8C13.93 8 15.5 9.57 15.5 11.5ZM13 17.5H11V19H13V17.5ZM22 12C22 15.31 19.31 18 16 18V16C18.21 16 20 14.21 20 12C20 9.79 18.21 8 16 8V6C19.31 6 22 8.69 22 12ZM2 12C2 8.69 4.69 6 8 6V8C5.79 8 4 9.79 4 12C4 14.21 5.79 16 8 16V18C4.69 18 2 15.31 2 12Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOnlinePrediction;
