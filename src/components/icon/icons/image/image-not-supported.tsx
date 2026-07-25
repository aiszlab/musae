import React from "react";
import { withIcon } from "../../hoc";

const ImageNotSupported = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1315)">
        <path
          d="M21.21 19.8L1.41 0L0 1.41L2.31 3.73V16.9C2.31 18 3.21 18.9 4.31 18.9H17.48L19.79 21.21L21.21 19.8ZM4.31 16.9V5.73L11.15 12.57L10.31 13.62L8.31 10.9L5.31 14.9H13.48L15.48 16.9H4.31ZM7.14 2.9L5.14 0.9H18.31C19.41 0.9 20.31 1.8 20.31 2.9V16.07L18.31 14.07V2.9H7.14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ImageNotSupported;
