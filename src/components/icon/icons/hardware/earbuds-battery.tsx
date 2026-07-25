import React from "react";
import { withIcon } from "../../hoc";

const EarbudsBattery = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.8) scale(1.2)">
        <path
          d="M19 1H18V0H16V1H15C14.45 1 14 1.45 14 2V11C14 11.55 14.45 12 15 12H19C19.55 12 20 11.55 20 11V2C20 1.45 19.55 1 19 1ZM18 10H16V3H18V10ZM12 3.38C12 1.51 10.49 0 8.62 0C6.75 0 5.25 1.51 5.25 3.38V8.63C5.25 9.67 4.41 10.51 3.37 10.51C2.33 10.51 1.5 9.66 1.5 8.62V3.92C1.66 3.97 1.83 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 2.04 0 8.62 0 8.62C0 10.49 1.51 12 3.38 12C5.25 12 6.76 10.49 6.76 8.62V3.38C6.76 2.34 7.6 1.5 8.64 1.5C9.68 1.5 10.52 2.34 10.52 3.38V8.08C10.34 8.03 10.17 8 10 8C8.9 8 8 8.9 8 10C8 11.1 8.9 12 10 12C11.1 12 12 11.1 12 10C12 9.96 12 3.38 12 3.38Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default EarbudsBattery;
