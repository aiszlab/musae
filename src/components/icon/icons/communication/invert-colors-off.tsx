import React from "react";
import { withIcon } from "../../hoc";

const InvertColorsOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.466, 0) scale(1.165)">
        <path
          d="M19.8 19.19L1.42 0.81L0 2.22L4.2 6.42C3.2 7.73 2.6 9.36 2.6 11.12C2.61 15.48 6.19 19 10.61 19C12.36 19 13.97 18.44 15.28 17.5L18.38 20.6L19.8 19.19ZM10.61 17C7.3 17 4.61 14.37 4.61 11.13C4.61 9.94 4.97 8.81 5.63 7.85L10.61 12.83V17ZM6.99 3.56L10.61 0L16.26 5.56C17.71 6.99 18.61 8.96 18.61 11.13C18.61 12.31 18.34 13.42 17.87 14.43L10.61 7.17V2.81L8.41 4.97L6.99 3.56Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default InvertColorsOff;
