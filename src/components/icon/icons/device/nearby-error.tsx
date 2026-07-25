import React from "react";
import { withIcon } from "../../hoc";

const NearbyError = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.1997)">
        <path
          d="M10.005 5.575L14.425 9.995L10.005 14.415L5.585 9.995L10.005 5.575ZM10.005 17.195L2.805 9.995L10.005 2.795L16.005 8.795V5.165L11.425 0.585C10.645 -0.195 9.375 -0.195 8.595 0.585L0.585 8.585C-0.195 9.365 -0.195 10.635 0.585 11.415L8.595 19.415C9.375 20.195 10.645 20.195 11.425 19.415L16.005 14.825V11.195L10.005 17.195ZM18.005 18.005H20.005V20.005H18.005V18.005ZM20.005 8.005H18.005V16.005H20.005V8.005Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default NearbyError;
