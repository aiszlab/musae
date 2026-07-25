import React from "react";
import { withIcon } from "../../hoc";

const MonochromePhotos = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M18 2H14.8L13 0H7L5.2 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM18 16H10V15C7.2 15 5 12.8 5 10C5 7.2 7.2 5 10 5V4H18V16ZM15 10C15 7.2 12.8 5 10 5V6.8C11.8 6.8 13.2 8.2 13.2 10C13.2 11.8 11.8 13.2 10 13.2V15C12.8 15 15 12.8 15 10ZM6.8 10C6.8 11.8 8.2 13.2 10 13.2V6.8C8.2 6.8 6.8 8.2 6.8 10Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MonochromePhotos;
