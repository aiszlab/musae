import React from "react";
import { withIcon } from "../../hoc";

const IconMobileScreenShare = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.995 1H6.995C5.895 1 5.005 1.85 5.005 2.95V20.95C5.005 22.05 5.895 23 6.995 23H16.995C18.095 23 18.995 22.05 18.995 20.95V2.95C18.995 1.85 18.095 1 16.995 1ZM16.995 19H6.995V5H16.995V19ZM12.795 13.24V14.99L15.995 12L12.795 9.02V10.72C9.68501 11.15 8.445 13.28 7.995 15.42C9.105 13.92 10.575 13.24 12.795 13.24Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMobileScreenShare;
