import React from "react";
import { withIcon } from "../../hoc";

const IconScreenRotationAlt = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 2.4 6.708 L 8.4 0.708 C 9.336 -0.228 10.86 -0.228 11.796 0.708 L 21.888 10.8 H 18.492 L 10.08 2.4 L 4.092 8.4 H 7.2 V 10.8 H 0 V 3.6 H 2.4 V 6.708ZM 21.6 20.4 H 24 V 13.2 H 16.8 V 15.6 H 19.908 L 13.92 21.6 L 5.508 13.2 H 2.112 L 12.204 23.292 C 13.14 24.228 14.664 24.228 15.6 23.292 L 21.6 17.292 V 20.4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconScreenRotationAlt;
