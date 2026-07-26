import React from "react";
import { withIcon } from "../../hoc";

const IconOpacity = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.66 7.93L12 2.27L6.34 7.93C3.22 11.05 3.22 16.12 6.34 19.24C7.9 20.8 9.95 21.58 12 21.58C14.05 21.58 16.1 20.8 17.66 19.24C20.78 16.12 20.78 11.05 17.66 7.93ZM12 19.59C10.45 19.59 8.92 18.99 7.76 17.83C5.97 16.04 5.54 13.35 6.49 11.18L12 5.61L17.51 11.19C18.46 13.36 18.03 16.05 16.24 17.83C15.08 18.99 13.56 19.59 12 19.59Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOpacity;
