import React from "react";
import { withIcon } from "../../hoc";

const FontDownloadOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1262)">
        <path
          d="M4.14 0H19.31C20.41 0 21.31 0.9 21.31 2V17.17L19.31 15.17V2H6.14L4.14 0ZM10.23 4L9.66 5.52L11.02 6.88L11.25 6.22H11.35L11.89 7.74L14.93 10.78L12.38 4H10.23ZM19.8 21.31L18.48 20H3.31C2.21 20 1.31 19.1 1.31 18V2.83L0 1.51L1.41 0.0999999L21.21 19.9L19.8 21.31ZM16.48 18L11.41 12.93H8.89L7.8 16H5.72L8.11 9.63L3.31 4.83V18H16.48Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default FontDownloadOff;
