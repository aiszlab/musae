import React from "react";
import { withIcon } from "../../hoc";

const IconLiveTv = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 9.273 10.182 L 9.273 17.455 L 15.636 13.818 L 9.273 10.182 Z M 20.182 6.545 L 13.291 6.545 L 16.282 3.555 L 15.636 2.909 L 12 6.545 L 11.973 6.545 L 8.336 2.909 L 7.709 3.555 L 10.691 6.545 L 3.818 6.545 C 2.818 6.545 2 7.364 2 8.364 L 2 19.273 C 2 20.273 2.818 21.091 3.818 21.091 L 20.182 21.091 C 21.182 21.091 22 20.273 22 19.273 L 22 8.364 C 22 7.364 21.182 6.545 20.182 6.545 Z M 20.182 19.273 L 3.818 19.273 L 3.818 8.364 L 20.182 8.364 L 20.182 19.273 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLiveTv;
