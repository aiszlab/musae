import React from "react";
import { withIcon } from "../../hoc";

const MeetingRoom = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.778 19.778 L 19.778 3.111 L 15.333 3.111 L 15.333 2 L 4.222 2 L 4.222 19.778 L 2 19.778 L 2 22 L 15.333 22 L 15.333 5.333 L 17.556 5.333 L 17.556 22 L 22 22 L 22 19.778 L 19.778 19.778 Z M 13.111 19.778 L 6.444 19.778 L 6.444 4.222 L 13.111 4.222 L 13.111 19.778 Z M 9.778 10.889 L 12 10.889 L 12 13.111 L 9.778 13.111 L 9.778 10.889 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default MeetingRoom;
