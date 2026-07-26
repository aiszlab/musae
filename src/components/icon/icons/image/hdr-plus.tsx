import React from "react";
import { withIcon } from "../../hoc";

const IconHdrPlus = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.13 19C9.28 19.64 10.6 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12C4 14.52 5.17 16.77 7 18.24V13H10.5C11.3 13 12 13.7 12 14.5V15.5C12 16.1 11.6 16.6 11.1 16.9L12 19H10.5L9.6 17H8.5V19H8.13ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM17.5 16H16V17.5H14.5V16H13V14.5H14.5V13H16V14.49H17.5V16ZM10.5 15.5V14.5H8.5V15.5H10.5ZM10.5 8V6H12V12H10.5V9.5H8.5V12H7V6H8.5V8H10.5ZM16 6C16.8 6 17.5 6.7 17.5 7.5V10.5C17.5 11.3 16.8 12 16 12H13V6H16ZM16 10.5V7.5H14.5V10.5H16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHdrPlus;
