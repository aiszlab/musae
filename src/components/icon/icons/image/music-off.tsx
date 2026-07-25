import React from "react";
import { withIcon } from "../../hoc";

const MusicOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.323)">
        <path
          d="M11 4.14H15V0.14H9V4.75L11 6.75V4.14ZM9 7.58L1.41 0L0 1.41L9 10.41V10.69C8.06 10.15 6.9 9.94 5.67 10.37C4.33 10.85 3.3 12.04 3.06 13.44C2.6 16.18 4.92 18.52 7.65 18.09C9.61 17.78 11 15.98 11 13.99V12.41L16.73 18.14L18.14 16.73L9 7.58ZM7 16.14C5.9 16.14 5 15.24 5 14.14C5 13.04 5.9 12.14 7 12.14C8.1 12.14 9 13.04 9 14.14C9 15.24 8.1 16.14 7 16.14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MusicOff;
