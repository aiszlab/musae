import React from "react";
import { withIcon } from "../../hoc";

const IconSegment = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M9 18H21V16H9V18ZM3 6V8H21V6H3ZM9 13H21V11H9V13Z" fill="currentColor" />
    </svg>
  );
});

export default IconSegment;
