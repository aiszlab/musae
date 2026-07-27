import React from "react";
import { withIcon } from "../../hoc";

const IconCropOriginal = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.9998 2.9998H4.9998C3.8998 2.9998 2.9998 3.8998 2.9998 4.9998V18.9998C2.9998 20.0998 3.8998 20.9998 4.9998 20.9998H18.9998C20.0998 20.9998 20.9998 20.0998 20.9998 18.9998V4.9998C20.9998 3.8998 20.0998 2.9998 18.9998 2.9998ZM18.9998 18.9998H4.9998V4.9998H18.9998V18.9998ZM13.9598 12.2898L11.2098 15.8298L9.2498 13.4698L6.4998 16.9998H17.4998L13.9598 12.2898Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCropOriginal;
