import React from "react";
import { withIcon } from "../../hoc";

const IconRepeatOn = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 1H3C1.9 1 1 1.9 1 3V21C1 22.1 1.9 23 3 23H21C22.1 23 23 22.1 23 21V3C23 1.9 22.1 1 21 1ZM19 19H6.83L8.41 20.58L7 22L3 18L7 14L8.41 15.42L6.83 17H17V13H19V19ZM17 10L15.59 8.58L17.17 7H7V11H5V5H17.17L15.59 3.42L17 2L21 6L17 10Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRepeatOn;
