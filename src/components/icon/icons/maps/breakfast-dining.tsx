import React from "react";
import { withIcon } from "../../hoc";

const IconBreakfastDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 3H6C3.79 3 2 4.79 2 7C2 8.48 2.81 9.75 4 10.45V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V10.45C21.19 9.76 22 8.48 22 7C22 4.79 20.21 3 18 3ZM19 8.72L18 9.3V19H6V9.31L5.01 8.73C4.38 8.35 4 7.71 4 7C4 5.9 4.9 5 6 5H18C19.1 5 20 5.9 20 7C20 7.71 19.62 8.36 19 8.72Z"
        fill="currentColor"
      />
      <path
        d="M12.71 9.29C12.51 9.1 12.26 9 12 9C11.74 9 11.49 9.1 11.29 9.29L8.29 12.29C7.9 12.68 7.9 13.31 8.29 13.7L11.29 16.7C11.49 16.9 11.74 17 12 17C12.26 17 12.51 16.9 12.71 16.71L15.71 13.71C16.1 13.32 16.1 12.69 15.71 12.3L12.71 9.29ZM12 14.58L10.41 13L12 11.41L13.59 13L12 14.58Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBreakfastDining;
