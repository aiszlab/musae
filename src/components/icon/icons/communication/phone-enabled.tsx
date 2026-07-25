import React from "react";
import { withIcon } from "../../hoc";

const PhoneEnabled = withIcon(({ size }) => {
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
          d="M14.46 2C14.4 2.89 14.25 3.76 14.01 4.59L15.21 5.79C15.62 4.59 15.88 3.32 15.97 2H14.46ZM4.6 14.02C3.75 14.26 2.88 14.41 2 14.47V15.96C3.32 15.87 4.59 15.61 5.8 15.21L4.6 14.02ZM13.5 0H17C17.55 0 18 0.45 18 1C18 10.39 10.39 18 1 18C0.45 18 0 17.55 0 17V13.51C0 12.96 0.45 12.51 1 12.51C2.24 12.51 3.45 12.31 4.57 11.94C4.67 11.9 4.78 11.89 4.88 11.89C5.14 11.89 5.39 11.99 5.59 12.18L7.79 14.38C10.62 12.93 12.94 10.62 14.38 7.79L12.18 5.59C11.9 5.31 11.82 4.92 11.93 4.57C12.3 3.45 12.5 2.25 12.5 1C12.5 0.45 12.95 0 13.5 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PhoneEnabled;
