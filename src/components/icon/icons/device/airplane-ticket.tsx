import React from "react";
import { withIcon } from "../../hoc";

const AirplaneTicket = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M18.19 0H2C0.9 0 0.00999999 0.9 0.00999999 2V6C1.11 6 2 6.9 2 8C2 9.1 1.11 10 0 10V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.19 0 18.19 0ZM18 14H2V11.46C3.19 10.77 4 9.47 4 8C4 6.52 3.2 5.23 2.01 4.54L2 2H18V14ZM6.87 11.66L5.21 8.78L6.14 8.53L7.4 9.52L9.79 8.88L7.39 4.72L8.79 4.34L12.8 8.08L15.24 7.43C15.75 7.29 16.28 7.6 16.42 8.11C16.55 8.62 16.25 9.15 15.73 9.3L6.87 11.66Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AirplaneTicket;
