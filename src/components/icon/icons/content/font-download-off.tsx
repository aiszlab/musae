import React from "react";
import { withIcon } from "../../hoc";

const IconFontDownloadOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.485 1.34473H20.655C21.755 1.34473 22.655 2.24473 22.655 3.34473V18.5147L20.655 16.5147V3.34473H7.485L5.485 1.34473ZM11.575 5.34473L11.005 6.86473L12.365 8.22473L12.595 7.56473H12.695L13.235 9.08473L16.275 12.1247L13.725 5.34473H11.575ZM21.145 22.6547L19.825 21.3447H4.655C3.555 21.3447 2.655 20.4447 2.655 19.3447V4.17473L1.345 2.85473L2.755 1.44473L22.555 21.2447L21.145 22.6547ZM17.825 19.3447L12.755 14.2747H10.235L9.145 17.3447H7.065L9.455 10.9747L4.655 6.17473V19.3447H17.825Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFontDownloadOff;
