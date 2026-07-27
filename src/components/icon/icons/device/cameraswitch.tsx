import React from "react";
import { withIcon } from "../../hoc";

const IconCameraswitch = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 7H15L14 6H10L9 7H8C6.9 7 6 7.9 6 9V15C6 16.1 6.9 17 8 17H16C17.1 17 18 16.1 18 15V9C18 7.9 17.1 7 16 7ZM16 15H8V9H9.83L10.83 8H13.17L14.17 9H16V15Z"
        fill="currentColor"
      />
      <path
        d="M12 14C13.105 14 14 13.105 14 12C14 10.896 13.105 10 12 10C10.895 10 10 10.896 10 12C10 13.105 10.895 14 12 14Z"
        fill="currentColor"
      />
      <path
        d="M8.57 0.52L13.05 5L14.46 3.59L12.92 2.05C17.7 2.46 21.53 6.24 22 11H24C23.36 3.3 15.79 -1.67 8.57 0.52Z"
        fill="currentColor"
      />
      <path
        d="M9.54 20.41L11.08 21.95C6.3 21.54 2.47 17.76 2 13H0C0.64 20.7 8.21 25.67 15.43 23.48L10.95 19L9.54 20.41Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCameraswitch;
