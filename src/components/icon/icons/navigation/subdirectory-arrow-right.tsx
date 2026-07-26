import React from "react";
import { withIcon } from "../../hoc";

const IconSubdirectoryArrowRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.5 14.5L13.5 20.5L12.08 19.08L15.67 15.5H4.5V3.5H6.5V13.5H15.67L12.08 9.92L13.5 8.5L19.5 14.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSubdirectoryArrowRight;
