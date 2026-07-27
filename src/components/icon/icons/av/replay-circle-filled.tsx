import React from "react";
import { withIcon } from "../../hoc";

const IconReplayCircleFilled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.5C8.69 18.5 6 15.81 6 12.5H8C8 14.71 9.79 16.5 12 16.5C14.21 16.5 16 14.71 16 12.5C16 10.26 14.15 8.41 11.84 8.51L13.41 10.08L12 11.5L8 7.5L12 3.5L13.41 4.91L11.81 6.51C15.28 6.4 18 9.18 18 12.5C18 15.81 15.31 18.5 12 18.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconReplayCircleFilled;
