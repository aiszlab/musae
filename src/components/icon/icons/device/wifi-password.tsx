import React from "react";
import { withIcon } from "../../hoc";

const IconWifiPassword = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M24 6.98L21.88 9.11C19.35 6.57 15.85 5 12 5C8.15 5 4.65 6.57 2.12 9.11L0 6.98C3.07 3.9 7.31 2 12 2C16.69 2 20.93 3.9 24 6.98ZM4.24 11.22L6.36 13.34C7.8 11.9 9.8 11 12 11C14.2 11 16.2 11.9 17.64 13.35L19.76 11.23C17.78 9.23 15.03 8 12 8C8.97 8 6.22 9.23 4.24 11.22ZM24 18V21C24 21.55 23.55 22 23 22H19C18.45 22 18 21.55 18 21V18C18 17.45 18.45 17 19 17V16C19 14.9 19.9 14 21 14C22.1 14 23 14.9 23 16V17C23.55 17 24 17.45 24 18ZM22 16C22 15.45 21.55 15 21 15C20.45 15 20 15.45 20 16V17H22V16ZM12 14C10.62 14 9.37 14.56 8.47 15.46L12 19L15.53 15.46C14.63 14.56 13.38 14 12 14Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWifiPassword;
