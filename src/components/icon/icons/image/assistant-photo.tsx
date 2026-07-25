import React from "react";
import { withIcon } from "../../hoc";

const AssistantPhoto = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.4118, 0) scale(1.4118)">
        <path
          d="M7.36 2L7.44 2.39L7.76 4H13V10H9.64L9.56 9.61L9.24 8H2V2H7.36ZM9 0H0V17H2V10H7.6L8 12H15V2H9.4L9 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default AssistantPhoto;
