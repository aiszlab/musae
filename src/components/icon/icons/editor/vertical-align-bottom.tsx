import React from "react";
import { withIcon } from "../../hoc";

const VerticalAlignBottom = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.3333, 0) scale(1.3333)">
        <path d="M12 10H9V0H7V10H4L8 14L12 10ZM0 16V18H16V16H0Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default VerticalAlignBottom;
