import React from "react";
import { withIcon } from "../../hoc";

const IconCurrencyFranc = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.9998 4.9998V2.9998H4.9998V15.9998H2.9998V17.9998H4.9998V20.9998H6.9998V17.9998H10.9998V15.9998H6.9998V12.9998H14.9998V10.9998H6.9998V4.9998H15.9998Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCurrencyFranc;
