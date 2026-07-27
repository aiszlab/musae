import React from "react";
import { withIcon } from "../../hoc";

const IconTrendingFlat = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M21.5 12L17.5 8V11H2.5V13H17.5V16L21.5 12Z" fill="currentColor" />
    </svg>
  );
});

export default IconTrendingFlat;
