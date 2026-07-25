import React from "react";
import { withIcon } from "../../hoc";

const TripOrigin = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM10 16C13.31 16 16 13.31 16 10C16 6.69 13.31 4 10 4C6.69 4 4 6.69 4 10C4 13.31 6.69 16 10 16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TripOrigin;
