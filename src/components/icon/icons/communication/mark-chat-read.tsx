import React from "react";
import { withIcon } from "../../hoc";

const IconMarkChatRead = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.5 18H5.5L1.5 22V4C1.5 2.9 2.4 2 3.5 2H19.5C20.6 2 21.5 2.9 21.5 4V11H19.5V4H3.5V16H11.5V18ZM22.5 14.34L21.09 12.93L16.85 17.17L14.73 15.05L13.32 16.46L16.84 20L22.5 14.34Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMarkChatRead;
