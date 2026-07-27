import React from "react";
import { withIcon } from "../../hoc";

const IconVoiceChat = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20 2 L 4 2 C 2.9 2 2.01 2.9 2.01 4 L 2 22 L 6 18 L 20 18 C 21.1 18 22 17.1 22 16 L 22 4 C 22 2.9 21.1 2 20 2 Z M 20 16 L 5.17 16 L 4 17.17 L 4 4 L 20 4 L 20 16 Z M 14 10.6 L 17 13 L 17 7 L 14 9.4 L 14 7 L 7 7 L 7 13 L 14 13 L 14 10.6 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVoiceChat;
