import React from "react";
import { withIcon } from "../../hoc";

const IconDehaze = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M2 12V14H22V12H2ZM2 7V9H22V7H2ZM2 2V4H22V2H2Z" fill="currentColor" />
    </svg>
  );
});

export default IconDehaze;
