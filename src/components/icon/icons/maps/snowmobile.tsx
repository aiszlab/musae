import React from "react";
import { withIcon } from "../../hoc";

const IconSnowmobile = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 16.5C22 17.05 21.55 17.5 21 17.5H20.83L18.63 15.3C20.58 14.87 22 13.9 22 12.5C22 11.5 14 4.5 14 4.5H11V6.5H13.25L14.05 7.22L11 9.5L2 8.5L0 12.5L4.54 13.86L1.05 15.74C-0.77 16.72 -0.0699999 19.5 2 19.5H8C10.21 19.5 12 17.71 12 15.5H16L18 17.5H15V19.5H21C22.66 19.5 24 18.16 24 16.5H22ZM8 17.5H2L7.25 14.67L10 15.5C10 16.6 9.11 17.5 8 17.5ZM17 13.5H10.3L2.85 11.27L3.16 10.65L11.6 11.5L15.53 8.56C15.53 8.56 19.3 12 19.8 12.7C19.8 12.7 18.7 13.5 17 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSnowmobile;
