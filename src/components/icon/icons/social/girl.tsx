import React from "react";
import { withIcon } from "../../hoc";

const IconGirl = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 6.375 C 13.212 6.375 14.188 5.4 14.188 4.188 C 14.188 2.975 13.212 2 12 2 C 10.788 2 9.813 2.975 9.813 4.188 C 9.813 5.4 10.788 6.375 12 6.375 Z M 14.5 17 L 14.5 22 L 9.5 22 L 9.5 17 L 7 17 L 9.975 9.025 C 10.288 8.188 11.1 7.625 12 7.625 C 12.9 7.625 13.713 8.188 14.025 9.025 L 17 17 L 14.5 17 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconGirl;
