import React from "react";
import { withIcon } from "../../hoc";

const IconDownloadForOffline = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM14.59 8.59L16 10L12 14L8 10L9.41 8.59L11 10.17V6H13V10.17L14.59 8.59ZM17 17H7V15H17V17Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDownloadForOffline;
