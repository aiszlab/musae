import React from "react";
import { withIcon } from "../../hoc";

const IconHowToVote = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 13.0003H17.32L15.32 15.0003H17.23L19 17.0003H5L6.78 15.0003H8.83L6.83 13.0003H6L3 16.0003V20.0003C3 21.1003 3.89 22.0003 4.99 22.0003H19C20.1 22.0003 21 21.1103 21 20.0003V16.0003L18 13.0003ZM19 20.0003H5V19.0003H19V20.0003ZM11.34 15.0203C11.73 15.4103 12.36 15.4103 12.75 15.0203L19.11 8.66028C19.5 8.27029 19.5 7.64029 19.11 7.25029L14.16 2.30029C13.78 1.90029 13.15 1.90029 12.76 2.29029L6.39 8.66028C6 9.05028 6 9.68028 6.39 10.0703L11.34 15.0203ZM13.46 4.41029L17 7.95028L12.05 12.9003L8.51 9.36028L13.46 4.41029Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHowToVote;
