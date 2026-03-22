import React from "react";
import { withIcon } from "../../hoc";

const Remove = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M19 13H5V11H19V13Z" fill="currentColor" />
    </svg>
  );
});

export default Remove;
