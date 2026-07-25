import React from "react";
import { withIcon } from "../../hoc";

const BroadcastOnPersonal = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.3953) scale(1.1163)">
        <path
          d="M2 16V7L8 2.5L12.08 5.56C12.89 5.24 13.77 5.05 14.69 5.02L8 0L0 6V18H8.76C8.28 17.4 7.88 16.73 7.59 16H2Z"
          fill="currentColor"
        />
        <path
          d="M15 11.75C14.31 11.75 13.75 12.31 13.75 13C13.75 13.4 13.95 13.75 14.25 13.97V19H15.75V13.97C16.05 13.74 16.25 13.4 16.25 13C16.25 12.31 15.69 11.75 15 11.75Z"
          fill="currentColor"
        />
        <path
          d="M15 9C12.79 9 11 10.79 11 13C11 14.1 11.45 15.1 12.17 15.83L13.23 14.77C12.78 14.32 12.5 13.69 12.5 13C12.5 11.62 13.62 10.5 15 10.5C16.38 10.5 17.5 11.62 17.5 13C17.5 13.69 17.22 14.31 16.77 14.76L17.83 15.82C18.55 15.1 19 14.1 19 13C19 10.79 17.21 9 15 9Z"
          fill="currentColor"
        />
        <path
          d="M15 6.5C11.41 6.5 8.5 9.41 8.5 13C8.5 14.79 9.23 16.42 10.4 17.6L11.46 16.54C10.56 15.63 10 14.38 10 13C10 10.24 12.24 8 15 8C17.76 8 20 10.24 20 13C20 14.37 19.44 15.62 18.54 16.52L19.61 17.58C20.78 16.4 21.5 14.78 21.5 13C21.5 9.41 18.59 6.5 15 6.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BroadcastOnPersonal;
