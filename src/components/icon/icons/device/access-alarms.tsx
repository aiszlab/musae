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
        d="M22 5.80039L17.4 1.90039L16.1 3.40039L20.7 7.30039L22 5.80039ZM7.9 3.50039L6.6 2.00039L2 5.80039L3.3 7.30039L7.9 3.50039ZM12.5 8.10039H11V14.1004L15.7 17.0004L16.5 15.8004L12.5 13.4004V8.10039ZM12 4.10039C7 4.10039 3 8.10039 3 13.1004C3 18.1004 7 22.1004 12 22.1004C17 22.1004 21 18.1004 21 13.1004C21 8.10039 17 4.10039 12 4.10039ZM12 20.1004C8.1 20.1004 5 17.0004 5 13.1004C5 9.20039 8.1 6.10039 12 6.10039C15.9 6.10039 19 9.20039 19 13.1004C19 17.0004 15.9 20.1004 12 20.1004Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAccessAlarms;
