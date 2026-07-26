import React from "react";
import { withIcon } from "../../hoc";

const IconAirplanemodeInactive = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.805 7.365V3.195C10.805 2.365 11.475 1.695 12.305 1.695C13.135 1.695 13.805 2.365 13.805 3.195V8.695L22.305 13.695V15.695L17.815 14.375L10.805 7.365ZM20.085 22.305L21.495 20.895L3.115 2.505L1.695 3.915L8.075 10.295L2.305 13.695V15.695L10.805 13.195V18.695L8.305 20.195V21.695L12.305 20.695L16.305 21.695V20.195L13.805 18.695V16.025L20.085 22.305Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAirplanemodeInactive;
