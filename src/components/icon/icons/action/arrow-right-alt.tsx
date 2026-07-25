import React from "react";
import { withIcon } from "../../hoc";

const ArrowRightAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="currentColor" />
    </svg>
  );
});

export default ArrowRightAlt;
