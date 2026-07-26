import React from "react";
import { withIcon } from "../../hoc";

const IconPhotoFilter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.9998 9.9998V18.9998H4.9798V4.9998H13.9798V2.9998H4.9998C3.8998 2.9998 2.9998 3.8998 2.9998 4.9998V18.9998C2.9998 20.0998 3.8998 20.9998 4.9998 20.9998H18.9998C20.0998 20.9998 20.9998 20.0998 20.9998 18.9998V9.9998H18.9998ZM16.0598 7.9398L16.9998 9.9998L17.9398 7.9398L19.9998 6.9998L17.9398 6.0598L16.9998 3.9998L16.0598 6.0598L13.9998 6.9998L16.0598 7.9398ZM11.9998 7.9998L10.7498 10.7498L7.9998 11.9998L10.7498 13.2498L11.9998 15.9998L13.2498 13.2498L15.9998 11.9998L13.2498 10.7498L11.9998 7.9998Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPhotoFilter;
