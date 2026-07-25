import React from "react";
import { withIcon } from "../../hoc";

const Sos = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 6.5455) scale(1.0909)">
        <path
          d="M12.5 0H9.5C8.4 0 7.5 0.9 7.5 2V8C7.5 9.1 8.4 10 9.5 10H12.5C13.6 10 14.5 9.1 14.5 8V2C14.5 0.9 13.6 0 12.5 0ZM12.5 8H9.5V2H12.5V8ZM0 8H4V6H2C0.9 6 0 5.1 0 4V2C0 0.9 0.9 0 2 0H6V2H2V4H4C5.1 4 6 4.9 6 6V8C6 9.1 5.1 10 4 10H0V8ZM16 8H20V6H18C16.9 6 16 5.1 16 4V2C16 0.9 16.9 0 18 0H22V2H18V4H20C21.1 4 22 4.9 22 6V8C22 9.1 21.1 10 20 10H16V8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Sos;
