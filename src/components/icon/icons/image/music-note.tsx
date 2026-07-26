import React from "react";
import { withIcon } from "../../hoc";

const IconMusicNote = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.9998 2.9998L9.0098 13.5498C8.4198 13.2098 7.7398 12.9998 7.0098 12.9998C4.7898 12.9998 2.9998 14.7898 2.9998 16.9998C2.9998 19.2098 4.7898 20.9998 7.0098 20.9998C9.2298 20.9998 10.9998 19.2098 10.9998 16.9998V6.9998H14.9998V2.9998H8.9998ZM7.0098 18.9998C5.9098 18.9998 5.0098 18.0998 5.0098 16.9998C5.0098 15.8998 5.9098 14.9998 7.0098 14.9998C8.1098 14.9998 9.0098 15.8998 9.0098 16.9998C9.0098 18.0998 8.1098 18.9998 7.0098 18.9998Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMusicNote;
