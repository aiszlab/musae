import React from "react";
import { withIcon } from "../../hoc";

const CurrencyFranc = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(3.3333, 0) scale(1.3333)">
        <path d="M13 2V0H2V13H0V15H2V18H4V15H8V13H4V10H12V8H4V2H13Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default CurrencyFranc;
