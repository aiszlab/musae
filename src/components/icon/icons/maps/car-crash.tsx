import React from "react";
import { withIcon } from "../../hoc";

const CarCrash = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.6) scale(1.2)">
        <path
          d="M15 0C12.24 0 10 2.24 10 5C10 7.76 12.24 10 15 10C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0ZM15.5 6H14.5V2H15.5V6ZM15.5 7V8H14.5V7H15.5ZM3 12.5C3 11.67 3.67 11 4.5 11C5.33 11 6 11.67 6 12.5C6 13.33 5.33 14 4.5 14C3.67 14 3 13.33 3 12.5ZM16 11.93C16.65 11.84 17.34 11.65 18 11.33V18C18 18.55 17.55 19 17 19H16C15.45 19 15 18.55 15 18V17H3V18C3 18.55 2.55 19 2 19H1C0.45 19 0 18.55 0 18V10L2.08 4.01C2.29 3.42 2.84 3 3.5 3H8.29C8.1 3.63 8 4.31 8 5H3.85L2.81 8H8.67C9.03 8.75 9.51 9.43 10.1 10H2V15H16V11.93ZM14.91 12C14.02 11.99 13.17 11.81 12.38 11.49C12.15 11.76 12 12.11 12 12.5C12 13.33 12.67 14 13.5 14C14.33 14 15 13.33 15 12.5C15 12.32 14.97 12.16 14.91 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CarCrash;
