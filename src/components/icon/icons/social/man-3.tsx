import React from "react";
import { withIcon } from "../../hoc";

const Man3 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 13.975 7.184 L 10.025 7.184 C 8.938 7.184 8.049 8.073 8.049 9.16 L 8.049 15.085 L 10.025 15.085 L 10.025 21.999 L 13.975 21.999 L 13.975 15.085 L 15.951 15.085 L 15.951 9.16 C 15.951 8.073 15.062 7.184 13.975 7.184 Z"
        fill="currentColor"
      />
      <path d="M 14.22 4.221 L 12 2 L 9.779 4.221 L 12 6.441 L 14.22 4.221 Z" fill="currentColor" />
    </svg>
  );
});

export default Man3;
