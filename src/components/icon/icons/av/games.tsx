import React from "react";
import { withIcon } from "../../hoc";

const Games = withIcon(({ size }) => {
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
          d="M11 2V4.67L10 5.67L9 4.67V2H11ZM18 9V11H15.33L14.33 10L15.33 9H18ZM4.67 9L5.67 10L4.67 11H2V9H4.67ZM10 14.33L11 15.33V18H9V15.33L10 14.33ZM13 0H7V5.5L10 8.5L13 5.5V0ZM20 7H14.5L11.5 10L14.5 13H20V7ZM5.5 7H0V13H5.5L8.5 10L5.5 7ZM10 11.5L7 14.5V20H13V14.5L10 11.5Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Games;
