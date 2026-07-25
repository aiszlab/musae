import React from "react";
import { withIcon } from "../../hoc";

const ImageSearch = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.2468) scale(1.1753)">
        <path
          d="M16 11V18H2V4H7.02C7.07 3.29 7.24 2.62 7.5 2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V13L16 11ZM14.5 16H3.5L6.25 12.47L8.21 14.83L10.96 11.29L14.5 16ZM17.3 6.89C17.74 6.19 18 5.38 18 4.5C18 2.01 15.99 0 13.5 0C11.01 0 9 2.01 9 4.5C9 6.99 11.01 9 13.49 9C14.37 9 15.19 8.74 15.88 8.3L19 11.42L20.42 10L17.3 6.89ZM13.5 7C12.12 7 11 5.88 11 4.5C11 3.12 12.12 2 13.5 2C14.88 2 16 3.12 16 4.5C16 5.88 14.88 7 13.5 7Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ImageSearch;
