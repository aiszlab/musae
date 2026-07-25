import React from "react";
import { withIcon } from "../../hoc";

const AddBusiness = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.6364) scale(1.0909)">
        <path d="M16 0H1V2H16V0Z" fill="currentColor" />
        <path
          d="M14 13H16V10H17V8L16 3H1L0 8V10H1V16H10V10H14V13ZM8 14H3V10H8V14ZM2.04 8L2.64 5H14.36L14.96 8H2.04Z"
          fill="currentColor"
        />
        <path d="M22 14H19V11H17V14H14V16H17V19H19V16H22V14Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default AddBusiness;
