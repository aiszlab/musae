import React from "react";
import { withIcon } from "../../hoc";

const IconUsb = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.1 7.4V11.4H16.1V13.4H13.1V5.4H15.1L12.1 1.4L9.1 5.4H11.1V13.4H8.1V11.33C8.8 10.96 9.3 10.25 9.3 9.4C9.3 8.19 8.31 7.2 7.1 7.2C5.89 7.2 4.9 8.19 4.9 9.4C4.9 10.25 5.4 10.96 6.1 11.33V13.4C6.1 14.51 6.99 15.4 8.1 15.4H11.1V18.45C10.39 18.82 9.9 19.55 9.9 20.4C9.9 21.62 10.89 22.6 12.1 22.6C13.31 22.6 14.3 21.62 14.3 20.4C14.3 19.55 13.81 18.82 13.1 18.45V15.4H16.1C17.21 15.4 18.1 14.51 18.1 13.4V11.4H19.1V7.4H15.1Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconUsb;
