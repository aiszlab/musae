import React from "react";
import { withIcon } from "../../hoc";

const WebAssetOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0563) scale(1.1262)">
        <path
          d="M6.14 1.9H19.31C20.42 1.9 21.31 2.8 21.31 3.9V15.9C21.31 16.24 21.22 16.56 21.08 16.84L19.31 15.07V5.9H10.14L6.14 1.9ZM19.8 21.21L16.48 17.9H3.31C2.2 17.9 1.31 17 1.31 15.9V3.9C1.31 3.56 1.39 3.24 1.54 2.96L0 1.41L1.41 0L21.21 19.8L19.8 21.21ZM14.48 15.9L4.48 5.9H3.31V15.9H14.48Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WebAssetOff;
