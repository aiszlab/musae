import React from "react";
import { withIcon } from "../../hoc";

const IconPhoneForwarded = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 16.5C17.75 16.5 16.55 16.3 15.43 15.93C15.33 15.9 15.22 15.88 15.12 15.88C14.86 15.88 14.61 15.98 14.41 16.17L12.21 18.37C9.38 16.93 7.06 14.62 5.62 11.78L7.82 9.57C8.1 9.31 8.18 8.92 8.07 8.57C7.7 7.45 7.5 6.25 7.5 5C7.5 4.45 7.05 4 6.5 4H3C2.45 4 2 4.45 2 5C2 14.39 9.61 22 19 22C19.55 22 20 21.55 20 21V17.5C20 16.95 19.55 16.5 19 16.5ZM4.03 6H5.53C5.6 6.88 5.75 7.75 5.98 8.58L4.78 9.79C4.38 8.58 4.12 7.32 4.03 6ZM18 19.97C16.68 19.88 15.4 19.62 14.2 19.21L15.4 18.01C16.25 18.25 17.12 18.4 18 18.46V19.97ZM17 12L22 7L17 2V5H13V9H17V12Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPhoneForwarded;
