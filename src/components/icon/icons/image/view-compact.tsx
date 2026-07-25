import React from "react";
import { withIcon } from "../../hoc";

const ViewCompact = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 2.4) scale(1.2)">
        <path
          d="M0 0V16H20V0H0ZM4.5 14H2V11.5H4.5V14ZM4.5 9.25H2V6.75H4.5V9.25ZM4.5 4.5H2V2H4.5V4.5ZM9 14H6.5V11.5H9V14ZM9 9.25H6.5V6.75H9V9.25ZM9 4.5H6.5V2H9V4.5ZM13.5 14H11V11.5H13.5V14ZM13.5 9.25H11V6.75H13.5V9.25ZM13.5 4.5H11V2H13.5V4.5ZM18 14H15.5V11.5H18V14ZM18 9.25H15.5V6.75H18V9.25ZM18 4.5H15.5V2H18V4.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default ViewCompact;
