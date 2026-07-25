import React from "react";
import { withIcon } from "../../hoc";

const CurrencyPound = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(4.2162, 0) scale(1.2973)">
        <path
          d="M8 18.5C9.93 18.5 11.62 17.33 12 15.5L10.25 14.62C10 15.71 9.33 16.5 8 16.5H3.1C3.93 15.5 4.6 14.16 4.6 12.5C4.6 12.15 4.57 11.81 4.52 11.5H8V9.5H3.82C3 7.92 2 7.1 2 5.5C2 3.57 3.57 2 5.5 2C7 2 8.29 2.95 8.78 4.28L10.63 3.5C9.83 1.45 7.84 0 5.5 0C2.46 0 0 2.46 0 5.5C0 7.28 0.79 8.4 1.49 9.5H0V11.5H2.47C2.55 11.81 2.6 12.14 2.6 12.5C2.6 15.2 0 16.5 0 16.5V18.5H8Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CurrencyPound;
