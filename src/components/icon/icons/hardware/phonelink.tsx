import React from "react";
import { withIcon } from "../../hoc";

const Phonelink = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4) scale(1)">
        <path
          d="M4 2H22V0H4C2.9 0 2 0.9 2 2V13H0V16H14V13H4V2ZM23 4H17C16.45 4 16 4.45 16 5V15C16 15.55 16.45 16 17 16H23C23.55 16 24 15.55 24 15V5C24 4.45 23.55 4 23 4ZM22 13H18V6H22V13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Phonelink;
