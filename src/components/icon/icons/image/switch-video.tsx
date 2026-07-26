import React from "react";
import { withIcon } from "../../hoc";

const IconSwitchVideo = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8 10H12V12L15 9L12 6V8H8V6L5 9L8 12V10ZM18 6.5V3C18 2.45 17.55 2 17 2H3C2.45 2 2 2.45 2 3V15C2 15.55 2.45 16 3 16H17C17.55 16 18 15.55 18 15V11.5L22 15.5V2.5L18 6.5ZM16 14H4V4H16V14Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSwitchVideo;
