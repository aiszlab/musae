import React from "react";
import { withIcon } from "../../hoc";

const BroadcastOnHome = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.9535) scale(1.1163)">
        <path
          d="M20 2C20 0.9 19.1 0 18 0H2V2H18V4.59C18.73 4.88 19.4 5.28 20 5.76V2Z"
          fill="currentColor"
        />
        <path
          d="M6 5H1C0.5 5 0 5.5 0 6V15C0 15.5 0.5 16 1 16H6C6.5 16 7 15.5 7 15V6C7 5.5 6.5 5 6 5ZM5 14H2V7H5V14Z"
          fill="currentColor"
        />
        <path
          d="M15.75 12.97C16.05 12.74 16.25 12.4 16.25 12C16.25 11.31 15.69 10.75 15 10.75C14.31 10.75 13.75 11.31 13.75 12C13.75 12.4 13.95 12.75 14.25 12.97V18H15.75V12.97Z"
          fill="currentColor"
        />
        <path
          d="M15 9.5C16.38 9.5 17.5 10.62 17.5 12C17.5 12.69 17.22 13.31 16.77 13.76L17.83 14.82C18.55 14.1 19 13.1 19 12C19 9.79 17.21 8 15 8C12.79 8 11 9.79 11 12C11 13.1 11.45 14.1 12.17 14.83L13.23 13.77C12.78 13.32 12.5 12.69 12.5 12C12.5 10.62 13.62 9.5 15 9.5Z"
          fill="currentColor"
        />
        <path
          d="M15 5.5C11.41 5.5 8.5 8.41 8.5 12C8.5 13.79 9.23 15.42 10.4 16.6L11.46 15.54C10.56 14.63 10 13.38 10 12C10 9.24 12.24 7 15 7C17.76 7 20 9.24 20 12C20 13.37 19.44 14.62 18.54 15.52L19.61 16.58C20.78 15.4 21.5 13.78 21.5 12C21.5 8.41 18.59 5.5 15 5.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default BroadcastOnHome;
