import React from "react";
import { withIcon } from "../../hoc";

const WrongLocation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.6713, 0) scale(1.1142)">
        <path
          d="M14 9.54C14 9.61 14 9.67 14 9.74C14 12.08 12.05 15.18 8 18.88C3.95 15.18 2 12.09 2 9.74C2 6.11 4.65 3.54 8 3.54C8.34 3.54 8.68 3.57 9 3.62V1.6C8.67 1.56 8.34 1.54 8 1.54C3.8 1.54 0 4.76 0 9.74C0 13.06 2.67 16.99 8 21.54C13.33 16.99 16 13.06 16 9.74C16 9.67 16 9.61 16 9.54H14Z"
          fill="currentColor"
        />
        <path
          d="M8 11.54C9.10457 11.54 10 10.6446 10 9.54C10 8.43543 9.10457 7.54 8 7.54C6.89543 7.54 6 8.43543 6 9.54C6 10.6446 6.89543 11.54 8 11.54Z"
          fill="currentColor"
        />
        <path
          d="M18.54 1.42L17.12 0L15 2.13L12.88 0L11.46 1.42L13.59 3.54L11.46 5.66L12.88 7.08L15 4.95L17.12 7.08L18.54 5.66L16.41 3.54L18.54 1.42Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default WrongLocation;
