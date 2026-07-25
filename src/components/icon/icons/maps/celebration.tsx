import React from "react";
import { withIcon } from "../../hoc";

const Celebration = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.5571) scale(1.1142)">
        <path
          d="M0 20.54L14 15.54L5 6.54L0 20.54ZM10.35 14.72L3.3 17.24L5.82 10.19L10.35 14.72Z"
          fill="currentColor"
        />
        <path
          d="M12.53 11.07L18.12 5.48C18.61 4.99 19.4 4.99 19.89 5.48L20.48 6.07L21.54 5.01L20.95 4.42C19.88 3.35 18.13 3.35 17.06 4.42L11.47 10.01L12.53 11.07Z"
          fill="currentColor"
        />
        <path
          d="M8.06 5.42L7.47 6.01L8.53 7.07L9.12 6.48C10.19 5.41 10.19 3.66 9.12 2.59L8.53 2L7.47 3.07L8.06 3.66C8.54 4.14 8.54 4.94 8.06 5.42Z"
          fill="currentColor"
        />
        <path
          d="M15.06 10.42L13.47 12.01L14.53 13.07L16.12 11.48C16.61 10.99 17.4 10.99 17.89 11.48L19.5 13.09L20.56 12.03L18.95 10.42C17.87 9.35 16.13 9.35 15.06 10.42Z"
          fill="currentColor"
        />
        <path
          d="M13.06 4.42L9.47 8.01L10.53 9.07L14.12 5.48C15.19 4.41 15.19 2.66 14.12 1.59L12.53 0L11.47 1.06L13.06 2.65C13.54 3.14 13.54 3.94 13.06 4.42Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Celebration;
