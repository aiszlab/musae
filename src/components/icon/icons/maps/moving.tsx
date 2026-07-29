import React from "react";
import { withIcon } from "../../hoc";

const IconMoving = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 9.42V12H22V6H16V8H18.58L14.12 12.46C13.73 12.85 13.1 12.85 12.71 12.46L11.54 11.29C10.37 10.12 8.47 10.12 7.3 11.29L2 16.59L3.41 18L8.7 12.71C9.09 12.32 9.72 12.32 10.11 12.71L11.28 13.88C12.45 15.05 14.35 15.05 15.52 13.88L20 9.42Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMoving;
