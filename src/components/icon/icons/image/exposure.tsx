import React from "react";
import { withIcon } from "../../hoc";

const IconExposure = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.9998 2.9998H4.9998C3.8998 2.9998 2.9998 3.8998 2.9998 4.9998V18.9998C2.9998 20.0998 3.8998 20.9998 4.9998 20.9998H18.9998C20.0998 20.9998 20.9998 20.0998 20.9998 18.9998V4.9998C20.9998 3.8998 20.0998 2.9998 18.9998 2.9998ZM17.5898 4.9998L4.9998 17.5898V4.9998H17.5898ZM6.4098 18.9998L18.9998 6.4098V18.9998H6.4098ZM5.9998 6.9998H10.9998V8.4998H5.9998V6.9998ZM15.9998 12.4998H14.4998V14.4998H12.4998V15.9998H14.4998V17.9998H15.9998V15.9998H17.9998V14.4998H15.9998V12.4998Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconExposure;
