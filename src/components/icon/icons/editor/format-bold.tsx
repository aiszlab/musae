import React from "react";
import { withIcon } from "../../hoc";

const FormatBold = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.225 11.79C16.195 11.12 16.875 10.02 16.875 9C16.875 6.74 15.125 5 12.875 5H6.625V19H13.665C15.755 19 17.375 17.3 17.375 15.21C17.375 13.69 16.515 12.39 15.225 11.79ZM9.625 7.5H12.625C13.455 7.5 14.125 8.17 14.125 9C14.125 9.83 13.455 10.5 12.625 10.5H9.625V7.5ZM13.125 16.5H9.625V13.5H13.125C13.955 13.5 14.625 14.17 14.625 15C14.625 15.83 13.955 16.5 13.125 16.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default FormatBold;
