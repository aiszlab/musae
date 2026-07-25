import React from "react";
import { withIcon } from "../../hoc";

const DensityMedium = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M21 3H3V5H21V3Z" fill="currentColor" />
      <path d="M21 19H3V21H21V19Z" fill="currentColor" />
      <path d="M21 11H3V13H21V11Z" fill="currentColor" />
    </svg>
  );
});

export default DensityMedium;
