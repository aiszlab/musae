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
        d="M17 10H13.39L15.67 12.28L17 10ZM17 2H7V3.61L13.13 9.74L17 2ZM3.41 2.86L2 4.27L7 9.27V13H10V22L13.58 15.85L17.73 20L19.14 18.59L3.41 2.86Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFlashOff;
