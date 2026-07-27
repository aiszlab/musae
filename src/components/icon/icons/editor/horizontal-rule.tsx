import React from "react";
import { withIcon } from "../../hoc";

const IconHorizontalRule = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M20 11H4V13H20V11Z" fill="currentColor" />
    </svg>
  );
});

export default IconHorizontalRule;
