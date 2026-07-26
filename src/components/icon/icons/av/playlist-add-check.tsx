import React from "react";
import { withIcon } from "../../hoc";

const IconPlaylistAddCheck = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M13.5 9.5H2.5V11.5H13.5V9.5Z" fill="currentColor" />
      <path d="M13.5 5.5H2.5V7.5H13.5V5.5Z" fill="currentColor" />
      <path d="M9.5 13.5H2.5V15.5H9.5V13.5Z" fill="currentColor" />
      <path
        d="M20.09 11.43L15.84 15.67L13.72 13.55L12.31 14.96L15.84 18.5L21.5 12.84L20.09 11.43Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPlaylistAddCheck;
