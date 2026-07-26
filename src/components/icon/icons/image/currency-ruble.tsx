import React from "react";
import { withIcon } from "../../hoc";

const IconCurrencyRuble = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.4998 2.9998H4.9998V11.9998H2.9998V13.9998H4.9998V15.9998H2.9998V17.9998H4.9998V20.9998H6.9998V17.9998H10.9998V15.9998H6.9998V13.9998H11.4998C14.5398 13.9998 16.9998 11.5398 16.9998 8.4998C16.9998 5.4598 14.5398 2.9998 11.4998 2.9998ZM11.4998 11.9998H6.9998V4.9998H11.4998C13.4298 4.9998 14.9998 6.5698 14.9998 8.4998C14.9998 10.4298 13.4298 11.9998 11.4998 11.9998Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCurrencyRuble;
