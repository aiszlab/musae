import React from "react";
import { withIcon } from "../../hoc";

const IconBoy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 6.375 C 13.213 6.375 14.188 5.4 14.188 4.188 C 14.188 2.975 13.213 2 12 2 C 10.788 2 9.813 2.975 9.813 4.188 C 9.813 5.4 10.788 6.375 12 6.375 Z M 14.5 22 L 14.5 15.75 L 15.75 15.75 L 15.75 10.125 C 15.75 8.75 14.625 7.625 13.25 7.625 L 10.75 7.625 C 9.375 7.625 8.25 8.75 8.25 10.125 L 8.25 15.75 L 9.5 15.75 L 9.5 22 L 14.5 22 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBoy;
