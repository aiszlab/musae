import React from "react";
import { withIcon } from "../../hoc";

const PauseCircleFilled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 14H7V6H9V14ZM13 14H11V6H13V14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PauseCircleFilled;
