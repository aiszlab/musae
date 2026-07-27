import React from "react";
import { withIcon } from "../../hoc";

const IconCurrencyPound = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.75 21.25C12.68 21.25 14.37 20.08 14.75 18.25L13 17.37C12.75 18.46 12.08 19.25 10.75 19.25H5.85C6.68 18.25 7.35 16.91 7.35 15.25C7.35 14.9 7.32 14.56 7.27 14.25H10.75V12.25H6.57C5.75 10.67 4.75 9.85 4.75 8.25C4.75 6.32 6.32 4.75 8.25 4.75C9.75 4.75 11.04 5.7 11.53 7.03L13.38 6.25C12.58 4.2 10.59 2.75 8.25 2.75C5.21 2.75 2.75 5.21 2.75 8.25C2.75 10.03 3.54 11.15 4.24 12.25H2.75V14.25H5.22C5.3 14.56 5.35 14.89 5.35 15.25C5.35 17.95 2.75 19.25 2.75 19.25V21.25H10.75Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCurrencyPound;
