import React from "react";
import { withIcon } from "../../hoc";

const SwitchRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.6667) scale(1.3333)">
        <path
          d="M12.5 10.38V3.62L15.88 7L12.5 10.38ZM11 14L18 7L11 0V14ZM7 14V0L0 7L7 14Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default SwitchRight;
