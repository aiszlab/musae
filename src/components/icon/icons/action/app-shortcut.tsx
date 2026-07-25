import React from "react";
import { withIcon } from "../../hoc";

const AppShortcut = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 18H5V6H15V7H17V3C17 1.9 16.1 1 15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H15C16.1 23 17 22.1 17 21V17H15V18ZM5 3H15V4H5V3ZM15 21H5V20H15V21Z"
        fill="currentColor"
      />
      <path
        d="M18.38 9.62L19 11L19.62 9.62L21 9L19.62 8.38L19 7L18.38 8.38L17 9L18.38 9.62Z"
        fill="currentColor"
      />
      <path
        d="M14 8L12.75 10.75L10 12L12.75 13.25L14 16L15.25 13.25L18 12L15.25 10.75L14 8Z"
        fill="currentColor"
      />
      <path
        d="M19 13L18.38 14.38L17 15L18.38 15.62L19 17L19.62 15.62L21 15L19.62 14.38L19 13Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default AppShortcut;
