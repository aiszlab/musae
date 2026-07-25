import React from "react";
import { withIcon } from "../../hoc";

const VolumeOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0066) scale(1.323)">
        <path
          d="M1.41 0L0 1.41L4.36 5.77L4.07 6.07H0.0699999V12.07H4.07L9.07 17.07V10.48L13.25 14.66C12.6 15.15 11.87 15.54 11.07 15.77V17.83C12.41 17.53 13.64 16.91 14.68 16.08L16.73 18.13L18.14 16.72L1.41 0ZM7.07 12.24L4.9 10.07H2.07V8.07H4.9L5.78 7.19L7.07 8.48V12.24ZM16.07 9.07C16.07 9.89 15.92 10.68 15.66 11.41L17.19 12.94C17.75 11.77 18.07 10.46 18.07 9.07C18.07 4.79 15.08 1.21 11.07 0.3V2.36C13.96 3.22 16.07 5.9 16.07 9.07ZM9.07 1.07L7.19 2.95L9.07 4.83V1.07ZM13.57 9.07C13.57 7.3 12.55 5.78 11.07 5.04V6.83L13.55 9.31C13.56 9.23 13.57 9.15 13.57 9.07Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VolumeOff;
