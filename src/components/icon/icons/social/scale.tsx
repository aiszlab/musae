import React from "react";
import { withIcon } from "../../hoc";

const IconScale = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14 11 L 14 8 C 18.56 7.42 22 4.9 22 2 L 2 2 C 2 4.9 5.44 7.42 10 8 L 10 11 C 6.32 11.73 2 14.61 2 22 L 8 22 L 8 20 L 4.13 20 C 5.06 13.17 10.78 12.8 12 12.8 C 13.22 12.8 18.94 13.17 19.87 20 L 16 20 L 16 22 L 22 22 C 22 14.61 17.68 11.73 14 11 Z M 18.87 4 C 17.5 5.19 15 6.12 12 6.12 C 9 6.12 6.5 5.19 5.13 4 L 18.87 4 Z M 12 22 C 10.9 22 10 21.1 10 20 C 10 19.45 10.22 18.95 10.59 18.59 C 11.39 17.79 16 16 16 16 C 16 16 14.21 20.61 13.41 21.41 C 13.05 21.78 12.55 22 12 22 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconScale;
