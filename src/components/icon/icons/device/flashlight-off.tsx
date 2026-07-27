import React from "react";
import { withIcon } from "../../hoc";

const IconFlashlightOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.52 2.505L2.1 3.915L8.71 10.525V21.695H16.71V18.525L20.49 22.305L21.9 20.895L3.52 2.505ZM14.71 19.695H10.71V12.525L14.71 16.525V19.695Z"
        fill="currentColor"
      />
      <path
        d="M16.71 3.695V4.695H8.54L10.54 6.695H16.71V7.085L14.71 10.095V10.865L16.71 12.865V10.695L18.71 7.695V1.695H6.71V2.865L7.54 3.695H16.71Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFlashlightOff;
