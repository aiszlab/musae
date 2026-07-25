import React from "react";
import { withIcon } from "../../hoc";

const Highlight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.8036, 0) scale(1.2)">
        <path
          d="M2.498 12L5.498 15V20H11.498V15L14.498 12V7H2.498V12ZM4.498 9H12.498V11.17L9.498 14.17V18H7.498V14.17L4.498 11.17V9ZM7.498 0H9.498V3H7.498V0ZM0 3.874L1.414 2.46L3.536 4.58L2.122 5.995L0 3.874ZM13.458 4.582L15.581 2.462L16.994 3.878L14.871 5.998L13.458 4.582Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Highlight;
