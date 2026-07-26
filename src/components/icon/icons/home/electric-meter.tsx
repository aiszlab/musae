import React from "react";
import { withIcon } from "../../hoc";

const IconElectricMeter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 11C21 6.03 16.97 2 12 2C7.03 2 3 6.03 3 11C3 14.92 5.51 18.24 9 19.48V22H11V19.94C11.33 19.98 11.66 20 12 20C12.34 20 12.67 19.98 13 19.94V22H15V19.48C18.49 18.24 21 14.92 21 11ZM12 18C8.14 18 5 14.86 5 11C5 7.14 8.14 4 12 4C15.86 4 19 7.14 19 11C19 14.86 15.86 18 12 18Z"
        fill="currentColor"
      />
      <path d="M16 7H8V9H16V7Z" fill="currentColor" />
      <path
        d="M12.75 10L9.75 13L11 14.25L9.75 15.5L11.25 17L14.25 14L13 12.75L14.25 11.5L12.75 10Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconElectricMeter;
