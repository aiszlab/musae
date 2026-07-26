import React from "react";
import { withIcon } from "../../hoc";

const IconHighlight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.001 14L9.001 17V22H15.001V17L18.001 14V9H6.001V14ZM8.001 11H16.001V13.17L13.001 16.17V20H11.001V16.17L8.001 13.17V11ZM11.001 2H13.001V5H11.001V2ZM3.503 5.874L4.917 4.46L7.039 6.58L5.625 7.995L3.503 5.874ZM16.961 6.582L19.084 4.462L20.497 5.878L18.374 7.998L16.961 6.582Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHighlight;
