import React from "react";
import { withIcon } from "../../hoc";

const LocalTaxi = withIcon(({ size }) => {
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
          d="M15.92 3.01C15.72 2.42 15.16 2 14.5 2H12V0H6V2H3.5C2.84 2 2.29 2.42 2.08 3.01L0 9V17C0 17.55 0.45 18 1 18H2C2.55 18 3 17.55 3 17V16H15V17C15 17.55 15.45 18 16 18H17C17.55 18 18 17.55 18 17V9L15.92 3.01ZM3.85 4H14.14L15.18 7H2.81L3.85 4ZM16 14H2V9.34L2.12 9H15.89L16 9.34V14Z"
          fill="currentColor"
        />
        <path
          d="M4.5 13C5.32843 13 6 12.3284 6 11.5C6 10.6716 5.32843 10 4.5 10C3.67157 10 3 10.6716 3 11.5C3 12.3284 3.67157 13 4.5 13Z"
          fill="currentColor"
        />
        <path
          d="M13.5 13C14.3284 13 15 12.3284 15 11.5C15 10.6716 14.3284 10 13.5 10C12.6716 10 12 10.6716 12 11.5C12 12.3284 12.6716 13 13.5 13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalTaxi;
