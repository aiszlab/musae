import React from "react";
import { withIcon } from "../../hoc";

const CurrencyRuble = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2.6667, 0) scale(1.3333)">
        <path
          d="M8.5 0H2V9H0V11H2V13H0V15H2V18H4V15H8V13H4V11H8.5C11.54 11 14 8.54 14 5.5C14 2.46 11.54 0 8.5 0ZM8.5 9H4V2H8.5C10.43 2 12 3.57 12 5.5C12 7.43 10.43 9 8.5 9Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CurrencyRuble;
