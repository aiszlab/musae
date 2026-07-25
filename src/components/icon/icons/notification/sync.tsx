import React from "react";
import { withIcon } from "../../hoc";

const Sync = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 4.727 L 12 2 L 8.364 5.636 L 12 9.273 L 12 6.545 C 15.009 6.545 17.455 8.991 17.455 12 C 17.455 12.918 17.227 13.791 16.818 14.545 L 18.145 15.873 C 18.855 14.755 19.273 13.427 19.273 12 C 19.273 7.982 16.018 4.727 12 4.727 Z M 12 17.455 C 8.991 17.455 6.545 15.009 6.545 12 C 6.545 11.082 6.773 10.209 7.182 9.455 L 5.855 8.127 C 5.145 9.245 4.727 10.573 4.727 12 C 4.727 16.018 7.982 19.273 12 19.273 L 12 22 L 15.636 18.364 L 12 14.727 L 12 17.455 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Sync;
