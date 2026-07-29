import React from "react";
import { withIcon } from "../../hoc";

const IconFlashOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.43 10H14.82L17.1 12.28L18.43 10ZM18.43 2H8.42999V3.61L14.56 9.74L18.43 2ZM4.83999 2.86L3.42999 4.27L8.42999 9.27V13H11.43V22L15.01 15.85L19.16 20L20.57 18.59L4.83999 2.86Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFlashOff;
