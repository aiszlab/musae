import React from "react";
import { withIcon } from "../../hoc";

const HideImage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2121)">
        <path
          d="M17.61 2.19V13.36L19.61 15.36V2.19C19.61 1.09 18.71 0.19 17.61 0.19H4.44L6.44 2.19H17.61Z"
          fill="currentColor"
        />
        <path
          d="M1.42 0L0 1.41L1.61 3.02V16.19C1.61 17.29 2.51 18.19 3.61 18.19H16.78L18.39 19.8L19.8 18.39L1.42 0ZM3.61 16.19V5.02L10.68 12.09L9.86 13.19L7.61 10.19L4.61 14.19H12.78L14.78 16.19H3.61Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default HideImage;
