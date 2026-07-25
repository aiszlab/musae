import React from "react";
import { withIcon } from "../../hoc";

const CommentsDisabled = withIcon(({ size }) => {
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
          d="M18.14 14H19.31V2H6.14L4.14 0H19.31C20.41 0 21.31 0.9 21.31 2V17.17L18.14 14ZM17.31 4H8.14L10.14 6H17.31V4ZM17.31 7H11.14L13.14 9H17.31V7ZM17.31 12V10H14.14L16.14 12H17.31ZM21.21 19.9L19.8 21.31L14.48 16H3.31C2.21 16 1.31 15.1 1.31 14V2.83L0 1.51L1.41 0.0999999L21.21 19.9ZM12.48 14L10.48 12H5.31V10H8.48L7.48 9H5.31V7H5.48L3.31 4.83V14H12.48Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default CommentsDisabled;
