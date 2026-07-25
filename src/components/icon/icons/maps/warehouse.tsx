import React from "react";
import { withIcon } from "../../hoc";

const Warehouse = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.2) scale(1.2)">
        <path
          d="M18 5.35V16H16V8H4V16H2V5.35L10 2.15L18 5.35ZM20 18V4L10 0L0 4V18H6V10H14V18H20ZM9 16H7V18H9V16ZM11 13H9V15H11V13ZM13 16H11V18H13V16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Warehouse;
