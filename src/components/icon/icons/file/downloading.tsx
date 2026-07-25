import React from "react";
import { withIcon } from "../../hoc";

const Downloading = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0301) scale(1.203)">
        <path
          d="M16.32 2.21C14.84 1 13.01 0.2 11 0V2.02C12.46 2.2 13.79 2.78 14.9 3.64L16.32 2.21ZM17.93 8.95H19.95C19.75 6.94 18.95 5.11 17.74 3.63L16.31 5.05C17.17 6.16 17.75 7.49 17.93 8.95ZM16.31 14.85L17.74 16.28C18.95 14.8 19.75 12.96 19.95 10.96H17.93C17.75 12.41 17.17 13.74 16.31 14.85ZM11 17.88V19.9C13.01 19.7 14.84 18.9 16.32 17.69L14.89 16.26C13.79 17.12 12.46 17.7 11 17.88ZM13.59 8.54L11 11.12V4.95H9V11.12L6.41 8.53L5 9.95L10 14.95L15 9.95L13.59 8.54ZM9 17.88V19.9C3.95 19.4 0 15.14 0 9.95C0 4.76 3.95 0.5 9 0V2.02C5.05 2.51 2 5.87 2 9.95C2 14.03 5.05 17.39 9 17.88Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Downloading;
