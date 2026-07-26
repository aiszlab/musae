import React from "react";
import { withIcon } from "../../hoc";

const IconIso = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.9998 2.9998H4.9998C3.8998 2.9998 2.9998 3.8998 2.9998 4.9998V18.9998C2.9998 20.0998 3.8998 20.9998 4.9998 20.9998H18.9998C20.0998 20.9998 20.9998 20.0998 20.9998 18.9998V4.9998C20.9998 3.8998 20.0998 2.9998 18.9998 2.9998ZM5.4998 7.4998H7.4998V5.4998H8.9998V7.4998H10.9998V8.9998H8.9998V10.9998H7.4998V8.9998H5.4998V7.4998ZM18.9998 18.9998H4.9998L18.9998 4.9998V18.9998ZM16.9998 16.9998V15.4998H11.9998V16.9998H16.9998Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconIso;
