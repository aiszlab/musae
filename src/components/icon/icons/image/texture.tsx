import React from "react";
import { withIcon } from "../../hoc";

const Texture = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path
          d="M16.51 0.0799999L0.0799999 16.51C0.17 16.85 0.35 17.16 0.59 17.41C0.84 17.65 1.15 17.83 1.49 17.92L17.93 1.49C17.74 0.8 17.2 0.26 16.51 0.0799999ZM8.88 0L0 8.88V11.71L11.71 0H8.88ZM2 0C0.9 0 0 0.9 0 2V4L4 0H2ZM16 18C16.55 18 17.05 17.78 17.41 17.41C17.78 17.05 18 16.55 18 16V14L14 18H16ZM6.29 18H9.12L18 9.12V6.29L6.29 18Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Texture;
