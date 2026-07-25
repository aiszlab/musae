import React from "react";
import { withIcon } from "../../hoc";

const Snowmobile = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.5) scale(1)">
        <path
          d="M22 12C22 12.55 21.55 13 21 13H20.83L18.63 10.8C20.58 10.37 22 9.4 22 8C22 7 14 0 14 0H11V2H13.25L14.05 2.72L11 5L2 4L0 8L4.54 9.36L1.05 11.24C-0.77 12.22 -0.0699999 15 2 15H8C10.21 15 12 13.21 12 11H16L18 13H15V15H21C22.66 15 24 13.66 24 12H22ZM8 13H2L7.25 10.17L10 11C10 12.1 9.11 13 8 13ZM17 9H10.3L2.85 6.77L3.16 6.15L11.6 7L15.53 4.06C15.53 4.06 19.3 7.5 19.8 8.2C19.8 8.2 18.7 9 17 9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Snowmobile;
