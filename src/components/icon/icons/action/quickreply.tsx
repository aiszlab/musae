import React from "react";
import { withIcon } from "../../hoc";

const IconQuickreply = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.75 16.67V3.5H19.75V9.5H21.75V3.5C21.75 2.4 20.85 1.5 19.75 1.5H3.75C2.65 1.5 1.76 2.4 1.76 3.5L1.75 21.5L5.75 17.5H14.75V15.5H4.92L3.75 16.67Z"
        fill="currentColor"
      />
      <path
        d="M22.25 15.5H20.05L21.75 11.5H16.75V17.5H18.75V22.5L22.25 15.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconQuickreply;
