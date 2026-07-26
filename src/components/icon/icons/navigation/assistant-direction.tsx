import React from "react";
import { withIcon } from "../../hoc";

const IconAssistantDirection = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12C23 5.9 18.1 1 12 1ZM12 21C7.01 21 3 16.99 3 12C3 7.01 7.01 3 12 3C16.99 3 21 7.01 21 12C21 16.99 16.99 21 12 21Z"
        fill="currentColor"
      />
      <path
        d="M19.73 11.42L12.54 4.2C12.18 3.93 11.74 3.93 11.39 4.2L4.2 11.42C3.93 11.78 3.93 12.22 4.2 12.58L11.39 19.8C11.75 20.07 12.19 20.07 12.54 19.8L19.73 12.58C20.09 12.22 20.09 11.69 19.73 11.42ZM13.5 14.5L12.09 13.09L13.17 12H10V15H8V11C8 10.4 8.4 10 9 10H13.17L12.08 8.91L13.5 7.5L17 11L13.5 14.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAssistantDirection;
