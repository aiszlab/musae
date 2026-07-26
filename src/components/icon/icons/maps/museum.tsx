import React from "react";
import { withIcon } from "../../hoc";

const IconMuseum = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 24 10.8 V 8.4 L 12 0 L 0 8.4 V 10.8 H 2.4 V 21.6 H 0 V 24 H 24 V 21.6 H 21.6 V 10.8 H 24ZM 19.2 21.6 H 4.8 V 8.4 H 19.2 V 21.6Z"
        fill="currentColor"
      />
      <path
        d="M 9.6 14.4 L 12 18 L 14.4 14.4 V 19.2 H 16.8 V 10.8 H 14.4 L 12 14.4 L 9.6 10.8 H 7.2 V 19.2 H 9.6 V 14.4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMuseum;
