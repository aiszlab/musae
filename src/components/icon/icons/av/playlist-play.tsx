import React from "react";
import { withIcon } from "../../hoc";

const IconPlaylistPlay = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M13.5 8.5H2.5V10.5H13.5V8.5Z" fill="currentColor" />
      <path d="M13.5 4.5H2.5V6.5H13.5V4.5Z" fill="currentColor" />
      <path d="M9.5 12.5H2.5V14.5H9.5V12.5Z" fill="currentColor" />
      <path d="M15.5 11.5V19.5L21.5 15.5L15.5 11.5Z" fill="currentColor" />
    </svg>
  );
});

export default IconPlaylistPlay;
