import React from "react";
import { withIcon } from "../../hoc";

const IconStadium = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 5L3 7V3L7 5ZM18 3V7L22 5L18 3ZM11 2V6L15 4L11 2ZM13 18H11V22C5.95 21.85 2 20.56 2 19V10C2 8.34 6.48 7 12 7C17.52 7 22 8.34 22 10V19C22 20.56 18.05 21.85 13 22V18ZM5 10.04C6.38 10.53 8.77 11 12 11C15.23 11 17.62 10.53 19 10.04C19 9.86 16.22 9 12 9C7.78 9 5 9.86 5 10.04ZM20 11.8C18.18 12.53 15.27 13 12 13C8.73 13 5.82 12.53 4 11.8V18.58C4.61 18.99 6.36 19.59 9 19.86V16H15V19.86C17.64 19.59 19.39 18.99 20 18.58V11.8Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStadium;
