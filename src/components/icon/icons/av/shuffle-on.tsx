import React from "react";
import { withIcon } from "../../hoc";

const IconShuffleOn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 1H3C1.9 1 1 1.9 1 3V21C1 22.1 1.9 23 3 23H21C22.1 23 23 22.1 23 21V3C23 1.9 22.1 1 21 1ZM5.41 4L10.59 9.17L9.18 10.59L4 5.42L5.41 4ZM20 20H14V18H16.61L13.41 14.8L14.83 13.38L18 16.55V14H20V20ZM20 10H18V7.42L5.41 20L4 18.59L16.58 6H14V4H20V10Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconShuffleOn;
