import React from "react";
import { withIcon } from "../../hoc";

const ThermostatAuto = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.6316) scale(1.2632)">
        <path
          d="M8 9V3C8 1.34 6.66 0 5 0C3.34 0 2 1.34 2 3V9C0.79 9.91 0 11.37 0 13C0 14.12 0.38 15.14 1 15.97V16H1.02C1.93 17.21 3.37 18 5 18C6.63 18 8.06 17.21 8.98 16H9V15.97C9.62 15.14 10 14.12 10 13C10 11.37 9.21 9.91 8 9ZM2 13C2 12.06 2.45 11.16 3.2 10.6L4 10V3C4 2.45 4.45 2 5 2C5.55 2 6 2.45 6 3V10L6.8 10.6C7.55 11.17 8 12.06 8 13H2ZM15.62 1H14.01L10.63 10H12.19L13 7.7H16.63L17.43 10H19L15.62 1ZM13.47 6.39L14.78 2.67H14.86L16.17 6.39H13.47Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ThermostatAuto;
