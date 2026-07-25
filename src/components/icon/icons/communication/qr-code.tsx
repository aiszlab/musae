import React from "react";
import { withIcon } from "../../hoc";

const QrCode = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.3333)">
        <path d="M0 8H8V0H0V8ZM2 2H6V6H2V2Z" fill="currentColor" />
        <path d="M0 18H8V10H0V18ZM2 12H6V16H2V12Z" fill="currentColor" />
        <path d="M10 0V8H18V0H10ZM16 6H12V2H16V6Z" fill="currentColor" />
        <path d="M18 16H16V18H18V16Z" fill="currentColor" />
        <path d="M12 10H10V12H12V10Z" fill="currentColor" />
        <path d="M14 12H12V14H14V12Z" fill="currentColor" />
        <path d="M12 14H10V16H12V14Z" fill="currentColor" />
        <path d="M14 16H12V18H14V16Z" fill="currentColor" />
        <path d="M16 14H14V16H16V14Z" fill="currentColor" />
        <path d="M16 10H14V12H16V10Z" fill="currentColor" />
        <path d="M18 12H16V14H18V12Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default QrCode;
