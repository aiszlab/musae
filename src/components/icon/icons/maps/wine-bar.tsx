import React from "react";
import { withIcon } from "../../hoc";

const IconWineBar = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 4 0 V 8 C 4 11.9597 6.8799 15.2396 10.6665 15.8796 V 21.3328 H 6.6666 V 23.9994 H 17.333 V 21.3328 H 13.3331 V 15.8796 C 17.1197 15.2396 20 11.9597 20 8 V 0 H 4ZM 12 13.333 C 9.5199 13.333 7.4532 11.6264 6.8533 9.3331 H 17.1463 C 16.5464 11.6264 14.4797 13.333 12 13.333ZM 17.333 6.6665 H 6.6666 V 2.6666 H 17.333 V 6.6665Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWineBar;
