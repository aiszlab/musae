import React from "react";
import { withIcon } from "../../hoc";

const IconCurrencyLira = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.9998 8.7598V2.9998H7.9998V7.5098L11.9998 4.9998V7.3598L7.9998 9.8698L8.0098 12.2198L11.9998 9.7198V12.0798L7.9998 14.5898V18.9998C10.7598 18.9998 12.9998 16.7598 12.9998 13.9998H14.9998C14.9998 17.8698 11.8698 20.9998 7.9998 20.9998H5.9998V15.8398L2.9998 17.7198V15.3598L5.9998 13.4798V11.1198L2.9998 12.9998V10.6398L5.9998 8.7598Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCurrencyLira;
