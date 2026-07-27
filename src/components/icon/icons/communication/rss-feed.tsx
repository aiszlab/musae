import React from "react";
import { withIcon } from "../../hoc";

const IconRssFeed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.4 19.7797C7.60398 19.7797 8.58 18.8037 8.58 17.5997C8.58 16.3957 7.60398 15.4197 6.4 15.4197C5.19602 15.4197 4.22 16.3957 4.22 17.5997C4.22 18.8037 5.19602 19.7797 6.4 19.7797Z"
        fill="currentColor"
      />
      <path
        d="M4.22 4.21973V7.04973C11.25 7.04973 16.95 12.7497 16.95 19.7797H19.78C19.78 11.1897 12.81 4.21973 4.22 4.21973ZM4.22 9.87973V12.7097C8.12 12.7097 11.29 15.8797 11.29 19.7797H14.12C14.12 14.3097 9.69 9.87973 4.22 9.87973Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRssFeed;
