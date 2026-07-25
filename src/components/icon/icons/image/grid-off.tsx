import React from "react";
import { withIcon } from "../../hoc";

const GridOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.0494)">
        <path
          d="M8 2.86V3.75L10 5.75V2.86H14V6.86H11.11L13.11 8.86H14V9.75L16 11.75V8.86H20V12.86H17.11L19.11 14.86H20V15.75L22 17.75V2.86C22 1.76 21.1 0.86 20 0.86H5.11L7.11 2.86H8ZM16 2.86H20V6.86H16V2.86ZM1.41 0L0 1.41L2 3.41V18.86C2 19.96 2.9 20.86 4 20.86H19.45L21.46 22.87L22.87 21.46L1.41 0ZM10 11.41L11.45 12.86H10V11.41ZM4 5.41L5.45 6.86H4V5.41ZM8 18.86H4V14.86H8V18.86ZM8 12.86H4V8.86H7.45L8 9.41V12.86ZM14 18.86H10V14.86H13.45L14 15.41V18.86ZM16 18.86V17.41L17.45 18.86H16Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default GridOff;
