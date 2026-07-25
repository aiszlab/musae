import React from "react";
import { withIcon } from "../../hoc";

const Cottage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 4.727 L 6.545 8.891 L 6.545 7.455 L 4.727 7.455 L 4.727 10.282 L 2 12.364 L 3.1 13.809 L 4.727 12.564 L 4.727 21.091 L 19.273 21.091 L 19.273 12.564 L 20.9 13.8 L 22 12.364 L 12 4.727 Z M 17.455 19.273 L 12.909 19.273 L 12.909 15.636 L 11.091 15.636 L 11.091 19.273 L 6.545 19.273 L 6.545 11.182 L 12 7.018 L 17.455 11.182 L 17.455 19.273 Z M 10.182 2.909 C 10.182 4.418 8.964 5.636 7.455 5.636 C 6.955 5.636 6.545 6.045 6.545 6.545 L 4.727 6.545 C 4.727 5.036 5.945 3.818 7.455 3.818 C 7.955 3.818 8.364 3.409 8.364 2.909 L 10.182 2.909 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Cottage;
