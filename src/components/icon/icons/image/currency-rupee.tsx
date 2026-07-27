import React from "react";
import { withIcon } from "../../hoc";

const IconCurrencyRupee = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.6598 6.9998C10.0998 5.8198 8.8998 4.9998 7.4998 4.9998H2.9998V2.9998H14.9998V4.9998H11.7398C12.2198 5.5798 12.5798 6.2598 12.7898 6.9998H14.9998V8.9998H12.9798C12.7298 11.7998 10.3698 13.9998 7.4998 13.9998H6.7698L13.4998 20.9998H10.7298L3.9998 13.9998V11.9998H7.4998C9.2598 11.9998 10.7198 10.6998 10.9598 8.9998H2.9998V6.9998H10.6598Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCurrencyRupee;
