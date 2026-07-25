import React from "react";
import { withIcon } from "../../hoc";

const Maximize = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M3 11H21V13H3V11Z" fill="currentColor" />
    </svg>
  );
});

export default Maximize;
