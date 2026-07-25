import React from "react";
import { withIcon } from "../../hoc";

const DataExploration = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22H20C21.1 22 22 21.1 22 20V12C22 6.48 17.52 2 12 2ZM12 20C9.11 20 6.57 18.46 5.17 16.16L8.12 13.21L11.41 16L16 11.42V13H18V8H13V10H14.58L11.3 13.28L8 10.5L4.31 14.2C4.11 13.5 4 12.76 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM19.5 20.5C18.95 20.5 18.5 20.05 18.5 19.5C18.5 18.95 18.95 18.5 19.5 18.5C20.05 18.5 20.5 18.95 20.5 19.5C20.5 20.05 20.05 20.5 19.5 20.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default DataExploration;
