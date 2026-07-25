import React from "react";
import { withIcon } from "../../hoc";

const Tungsten = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.6) scale(1.2)">
        <path d="M11 16H9V19H11V16Z" fill="currentColor" />
        <path d="M3 8H0V10H3V8Z" fill="currentColor" />
        <path d="M20 8H17V10H20V8Z" fill="currentColor" />
        <path
          d="M15.3012 13.3943L13.8941 14.8014L16.0154 16.9227L17.4225 15.5156L15.3012 13.3943Z"
          fill="currentColor"
        />
        <path
          d="M4.70547 13.3872L2.58417 15.5085L3.9913 16.9156L6.1126 14.7943L4.70547 13.3872Z"
          fill="currentColor"
        />
        <path
          d="M13 5.02V0H7V5.02C5.79 5.94 5 7.37 5 9C5 11.76 7.24 14 10 14C12.76 14 15 11.76 15 9C15 7.37 14.21 5.94 13 5.02ZM9 2H11V4.1C10.68 4.04 10.34 4 10 4C9.66 4 9.32 4.04 9 4.1V2ZM10 12C8.35 12 7 10.65 7 9C7 7.35 8.35 6 10 6C11.65 6 13 7.35 13 9C13 10.65 11.65 12 10 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Tungsten;
