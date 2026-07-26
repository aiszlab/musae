import React from "react";
import { withIcon } from "../../hoc";

const IconTune = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.9998 16.9998V18.9998H8.9998V16.9998H2.9998ZM2.9998 4.9998V6.9998H12.9998V4.9998H2.9998ZM12.9998 20.9998V18.9998H20.9998V16.9998H12.9998V14.9998H10.9998V20.9998H12.9998ZM6.9998 8.9998V10.9998H2.9998V12.9998H6.9998V14.9998H8.9998V8.9998H6.9998ZM20.9998 12.9998V10.9998H10.9998V12.9998H20.9998ZM14.9998 8.9998H16.9998V6.9998H20.9998V4.9998H16.9998V2.9998H14.9998V8.9998Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTune;
