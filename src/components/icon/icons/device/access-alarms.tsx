import React from "react";
import { withIcon } from "../../hoc";

const IconAccessAlarms = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 5.8004L17.4 1.9004L16.1 3.4004L20.7 7.3004L22 5.8004ZM7.9 3.5004L6.6 2.0004L2 5.8004L3.3 7.3004L7.9 3.5004ZM12.5 8.1004H11V14.1004L15.7 17.0004L16.5 15.8004L12.5 13.4004V8.1004ZM12 4.1004C7 4.1004 3 8.1004 3 13.1004C3 18.1004 7 22.1004 12 22.1004C17 22.1004 21 18.1004 21 13.1004C21 8.1004 17 4.1004 12 4.1004ZM12 20.1004C8.1 20.1004 5 17.0004 5 13.1004C5 9.2004 8.1 6.1004 12 6.1004C15.9 6.1004 19 9.2004 19 13.1004C19 17.0004 15.9 20.1004 12 20.1004Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAccessAlarms;
