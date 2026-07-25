import React from "react";
import { withIcon } from "../../hoc";

const IosShare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 15.636 5.636 L 14.345 6.927 L 12.9 5.482 L 12.9 15.636 L 11.1 15.636 L 11.1 5.482 L 9.655 6.927 L 8.364 5.636 L 12 2 L 15.636 5.636 Z M 19.273 10.182 L 19.273 20.182 C 19.273 21.182 18.455 22 17.455 22 L 6.545 22 C 5.536 22 4.727 21.182 4.727 20.182 L 4.727 10.182 C 4.727 9.173 5.536 8.364 6.545 8.364 L 9.273 8.364 L 9.273 10.182 L 6.545 10.182 L 6.545 20.182 L 17.455 20.182 L 17.455 10.182 L 14.727 10.182 L 14.727 8.364 L 17.455 8.364 C 18.455 8.364 19.273 9.173 19.273 10.182 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IosShare;
