import React from "react";
import { withIcon } from "../../hoc";

const TransferWithinAStation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0.8372, 0) scale(1.1163)">
        <path
          d="M14.49 14V12.25L12 14.75L14.49 17.25V15.5H20V14H14.49ZM17.51 18.25H12V19.75H17.51V21.5L20 19L17.51 16.5V18.25ZM7.5 4C8.6 4 9.5 3.1 9.5 2C9.5 0.9 8.6 0 7.5 0C6.4 0 5.5 0.9 5.5 2C5.5 3.1 6.4 4 7.5 4ZM3.75 7.4L1 21.5H3.1L4.85 13.5L7 15.5V21.5H9V13.95L6.95 11.9L7.55 8.9C8.85 10.5 10.8 11.5 13 11.5V9.5C11.15 9.5 9.55 8.5 8.65 7.05L7.7 5.45C7.35 4.85 6.7 4.5 6 4.5C5.75 4.5 5.5 4.55 5.25 4.65L0 6.8V11.5H2V8.15L3.75 7.4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default TransferWithinAStation;
