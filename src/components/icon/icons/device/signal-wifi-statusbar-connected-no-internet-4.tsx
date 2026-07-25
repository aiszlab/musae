import React from "react";
import { withIcon } from "../../hoc";

const SignalWifiStatusbarConnectedNoInternet4 = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 3.0995) scale(1.0471)">
        <path
          d="M12 0C7.31 0 3.07 1.9 0 4.98L12 17L17 11.99V4H22.92C19.97 1.51 16.16 0 12 0Z"
          fill="currentColor"
        />
        <path d="M21 14H19V16H21V14Z" fill="currentColor" />
        <path d="M21 6H19V12H21V6Z" fill="currentColor" />
      </g>
    </svg>
  );
});

export default SignalWifiStatusbarConnectedNoInternet4;
