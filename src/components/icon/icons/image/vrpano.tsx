import React from "react";
import { withIcon } from "../../hoc";

const Vrpano = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M19.01 0C18.45 0 15.4 1.5 10 1.5C4.69 1.5 1.51 0.0100002 0.99 0.0100002C0.46 0.0100002 0 0.45 0 1.02V15C0 15.57 0.46 16 0.99 16C1.56 16 4.54 14.5 10 14.5C15.42 14.5 18.44 16 19.01 16C19.54 16 20 15.57 20 15V1C20 0.43 19.54 0 19.01 0ZM18 13.63C15.99 13.04 13.38 12.5 10 12.5C6.61 12.5 4.01 13.04 2 13.63V2.38C4.58 3.11 7.32 3.5 10 3.5C13.38 3.5 15.99 2.96 18 2.37V13.63Z"
          fill="currentColor"
        />
        <path
          d="M7.17 6.99L3.48 11.41C5.48 11.15 7.66 11 10 11C12.3 11 14.52 11.15 16.51 11.4L12 6L9.17 9.39L7.17 6.99Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Vrpano;
