import React from "react";
import { withIcon } from "../../hoc";

const PanoramaHorizontalSelect = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.3961) scale(1.2)">
        <path
          d="M10 1.50325C6.11 1.50325 3.05 0.663247 1.31 0.0732467C0.67 -0.146753 0 0.333247 0 1.02325V15.0032C0 15.6832 0.66 16.1732 1.31 15.9532C3.36 15.2632 6.1 14.5032 10 14.5032C13.87 14.5032 16.66 15.2632 18.69 15.9532C19.34 16.1632 20 15.6832 20 15.0032V1.00325C20 0.323247 19.34 -0.166753 18.69 0.0532467C16.66 0.733247 13.86 1.50325 10 1.50325Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PanoramaHorizontalSelect;
