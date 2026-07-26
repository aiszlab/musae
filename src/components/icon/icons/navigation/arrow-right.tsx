import React from "react";
import { withIcon } from "../../hoc";

const IconArrowRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M9.5 17L14.5 12L9.5 7V17Z" fill="currentColor" />
    </svg>
  );
});

export default IconArrowRight;
