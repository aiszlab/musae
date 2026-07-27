import React from "react";
import { withIcon } from "../../hoc";

const IconCancelScheduleSend = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 7.5C15.58 7.5 15.17 7.54 14.76 7.61L0.51 1.5L0.5 8.5L10.56 9.84C10.14 10.28 9.78 10.77 9.47 11.3L0.5 12.5L0.51 19.5L8.58 16.04C9.09 19.69 12.21 22.5 16 22.5C20.14 22.5 23.5 19.14 23.5 15C23.5 10.86 20.14 7.5 16 7.5ZM2.5 6.75L2.51 4.53L10.02 7.75L2.5 6.75ZM8.6 13.86L2.5 16.47V14.25L8.67 13.43C8.64 13.57 8.62 13.71 8.6 13.86ZM16 20.5C12.97 20.5 10.5 18.03 10.5 15C10.5 11.97 12.97 9.5 16 9.5C19.03 9.5 21.5 11.97 21.5 15C21.5 18.03 19.03 20.5 16 20.5Z"
        fill="currentColor"
      />
      <path
        d="M17.77 12.53L16 14.29L14.23 12.53L13.53 13.23L15.29 15L13.53 16.77L14.23 17.47L16 15.71L17.77 17.47L18.47 16.77L16.71 15L18.47 13.23L17.77 12.53Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCancelScheduleSend;
