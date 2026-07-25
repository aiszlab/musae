import React from "react";
import { withIcon } from "../../hoc";

const Feed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 16.444 2 L 4.222 2 C 3 2 2 3 2 4.222 L 2 19.778 C 2 21 3 22 4.222 22 L 19.778 22 C 21 22 22 21 22 19.778 L 22 7.556 L 16.444 2 Z M 19.778 19.778 L 4.222 19.778 L 4.222 4.222 L 15.333 4.222 L 15.333 8.667 L 19.778 8.667 L 19.778 19.778 Z M 6.444 17.556 L 17.556 17.556 L 17.556 15.333 L 6.444 15.333 L 6.444 17.556 Z M 12 6.444 L 6.444 6.444 L 6.444 8.667 L 12 8.667 L 12 6.444 Z M 6.444 13.111 L 17.556 13.111 L 17.556 10.889 L 6.444 10.889 L 6.444 13.111 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Feed;
