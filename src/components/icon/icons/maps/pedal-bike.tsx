import React from "react";
import { withIcon } from "../../hoc";

const PedalBike = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1)">
        <path
          d="M18.18 6L16.48 1.32C16.19 0.53 15.44 0 14.6 0H12V2H14.6L16.06 6H11.25L10.89 5H12V3H7V5H8.75L10.57 10H9.9C9.46 7.77 7.59 6.12 5.25 6.01C2.45 5.87 0 8.2 0 11C0 13.8 2.2 16 5 16C7.46 16 9.45 14.31 9.9 12H14.1C14.54 14.23 16.41 15.88 18.75 15.99C21.55 16.12 24 13.8 24 10.99C24 8.19 21.8 5.99 19 5.99H18.18V6ZM7.82 12C7.42 13.17 6.33 14 5 14C3.32 14 2 12.68 2 11C2 9.32 3.32 8 5 8C6.33 8 7.42 8.83 7.82 10H5V12H7.82ZM14.1 10H12.7L11.97 8H15C14.56 8.58 14.24 9.25 14.1 10ZM19 14C17.32 14 16 12.68 16 11C16 10.07 16.41 9.27 17.05 8.72L18.01 11.36L19.89 10.68L18.92 8.01C18.95 8.01 18.98 8 19.01 8C20.69 8 22.01 9.32 22.01 11C22.01 12.68 20.68 14 19 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PedalBike;
