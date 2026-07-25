import React from "react";
import { withIcon } from "../../hoc";

const SolarPower = withIcon(({ size }) => {
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
          d="M18 10H2L0 20H20L18 10ZM16.36 12L16.76 14H11V12H16.36ZM9 12V14H3.24L3.64 12H9ZM2.84 16H9V18H2.44L2.84 16ZM11 18V16H17.16L17.56 18H11Z"
          fill="currentColor"
        />
        <path d="M11 6H9V9H11V6Z" fill="currentColor" />
        <path
          d="M15.1787 3.79096L13.7645 5.20516L15.8858 7.32646L17.3 5.91226L15.1787 3.79096Z"
          fill="currentColor"
        />
        <path
          d="M4.82616 3.79149L2.70486 5.91279L4.11906 7.32699L6.24036 5.20569L4.82616 3.79149Z"
          fill="currentColor"
        />
        <path d="M4 0H1V2H4V0Z" fill="currentColor" />
        <path d="M19 0H16V2H19V0Z" fill="currentColor" />
        <path
          d="M10 5C12.76 5 15 2.76 15 0H13C13 1.65 11.65 3 10 3C8.35 3 7 1.65 7 0H5C5 2.76 7.24 5 10 5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SolarPower;
