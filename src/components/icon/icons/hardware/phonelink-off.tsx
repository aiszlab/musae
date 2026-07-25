import React from "react";
import { withIcon } from "../../hoc";

const PhonelinkOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 1.58) scale(1)">
        <path
          d="M22 4.49V2.49H7.39L9.39 4.49H22ZM24 17.49V7.49C24 6.94 23.55 6.49 23 6.49H17C16.45 6.49 16 6.94 16 7.49V11.1L18 13.1V8.49H22V15.49H20.39L23.32 18.42C23.71 18.29 24 17.93 24 17.49ZM2.06 0L0.65 1.41L2.47 3.23C2.18 3.57 2 4.01 2 4.49V15.49H0V18.49H17.73L20.08 20.84L21.49 19.43L2.06 0ZM4 15.49V4.76L14.73 15.49H4Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default PhonelinkOff;
