import React from "react";
import { withIcon } from "../../hoc";

const IconHail = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.5 6C11.4 6 10.5 5.1 10.5 4C10.5 2.9 11.4 2 12.5 2C13.6 2 14.5 2.9 14.5 4C14.5 5.1 13.6 6 12.5 6ZM17.5 2H19.5C19.5 4.7 18.57 6.41 17.2 7.5C16.7 7.9 16.1 8.2 15.5 8.4V22H13.5V16H11.5V22H9.5V10.1C9.2 10.2 9 10.3 8.9 10.4C8.37 10.81 7.5 11.43 7.5 14H5.5C5.5 11.94 5.85 10.22 7.61 8.71C8.71 7.81 10.5 7 12.5 7C14.5 7 15.18 6.54 15.98 5.94C16.46 5.55 17.5 4.76 17.5 2ZM4.5 16H7.5V22H4.5V16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHail;
