import React from "react";
import { withIcon } from "../../hoc";

const VideocamOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2539)">
        <path
          d="M7.56 6.14L5.56 4.14L1.41 0L0 1.41L2.73 4.14H2C1.45 4.14 1 4.59 1 5.14V15.14C1 15.69 1.45 16.14 2 16.14H14C14.21 16.14 14.39 16.06 14.55 15.96L17.73 19.14L19.14 17.73L10.28 8.87L7.56 6.14ZM3 14.14V6.14H4.73L12.73 14.14H3ZM13 6.14V8.75L19 14.75V4.64L15 8.64V5.14C15 4.59 14.55 4.14 14 4.14H8.39L10.39 6.14H13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VideocamOff;
