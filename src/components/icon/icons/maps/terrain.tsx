import React from "react";
import { withIcon } from "../../hoc";

const IconTerrain = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 6L9.78 11.63L11.03 13.3L14 9.33L19 16H10.54L6.53 10.63L1 18H23L14 6ZM5 16L6.52 13.97L8.04 16H5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTerrain;
