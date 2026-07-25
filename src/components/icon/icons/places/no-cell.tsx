import React from "react";
import { withIcon } from "../../hoc";

const NoCell = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 17.191 6.545 L 17.191 13.973 L 19.009 15.791 L 19.009 3.818 C 19.009 2.818 18.191 2.009 17.191 2.009 L 8.1 2 C 7.327 2 6.664 2.5 6.4 3.182 L 9.764 6.545 L 17.191 6.545 Z M 8.1 3.818 L 17.191 3.818 L 17.191 4.727 L 8.1 4.727 L 8.1 3.818 Z M 21 20.355 L 4.291 3.645 L 3 4.927 L 6.282 8.209 L 6.282 20.182 C 6.282 21.182 7.1 22 8.1 22 L 17.191 22 C 17.964 22 18.627 21.5 18.891 20.818 L 19.718 21.645 L 21 20.355 Z M 17.191 20.182 L 8.1 20.182 L 8.1 19.273 L 17.191 19.273 L 17.191 20.182 Z M 8.1 17.455 L 8.1 10.027 L 15.527 17.455 L 8.1 17.455 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default NoCell;
