import React from "react";
import { withIcon } from "../../hoc";

const TurnSharpRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(2, 0) scale(1.3333)">
        <path
          d="M12 3.83L13.59 5.42L15 4L11 0L7 4L8.41 5.41L10 3.83V10H2C0.9 10 0 10.9 0 12V18H2V12H10C11.1 12 12 11.1 12 10V3.83Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TurnSharpRight;
