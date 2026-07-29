import React from "react";
import { withIcon } from "../../hoc";

const IconRailwayAlert = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.5 17.5C10.3284 17.5 11 16.8284 11 16C11 15.1716 10.3284 14.5 9.5 14.5C8.67157 14.5 8 15.1716 8 16C8 16.8284 8.67157 17.5 9.5 17.5Z"
        fill="currentColor"
      />
      <path
        d="M3.5 11.5V8.5H10.79C10.6 7.87 10.5 7.2 10.5 6.5H3.93C4.83 5.73 7.21 5.42 10.58 5.52C10.68 4.82 10.88 4.15 11.17 3.53C2.47 3.17 1.5 5.52 1.5 7.5V17C1.5 18.93 3.07 20.5 5 20.5L3.5 21.5V22.5H15.5V21.5L14 20.5C15.93 20.5 17.5 18.93 17.5 17V13.5C15.59 13.5 13.87 12.74 12.61 11.5H3.5ZM15.5 17C15.5 17.83 14.83 18.5 14 18.5H5C4.17 18.5 3.5 17.83 3.5 17V13.5H15.5V17Z"
        fill="currentColor"
      />
      <path
        d="M17.5 1.5C14.74 1.5 12.5 3.74 12.5 6.5C12.5 9.26 14.74 11.5 17.5 11.5C20.26 11.5 22.5 9.26 22.5 6.5C22.5 3.74 20.26 1.5 17.5 1.5ZM18 9.5H17V8.5H18V9.5ZM18 7.5H17V3.5H18V7.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRailwayAlert;
