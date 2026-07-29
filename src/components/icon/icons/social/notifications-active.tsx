import React from "react";
import { withIcon } from "../../hoc";

const IconNotificationsActive = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 21.75C13.1 21.75 14 20.85 14 19.75H10C10 20.85 10.9 21.75 12 21.75ZM18 15.75V10.75C18 7.68 16.37 5.11 13.5 4.43V3.75C13.5 2.92 12.83 2.25 12 2.25C11.17 2.25 10.5 2.92 10.5 3.75V4.43C7.64003 5.11 6.00003 7.67 6.00003 10.75V15.75L4.00003 17.75V18.75H20V17.75L18 15.75ZM16 16.75H8.00003V10.75C8.00003 8.27 9.51003 6.25 12 6.25C14.49 6.25 16 8.27 16 10.75V16.75ZM7.58003 3.83L6.15003 2.4C3.75003 4.23 2.17003 7.05 2.03003 10.25H4.03003C4.18003 7.6 5.54003 5.28 7.58003 3.83ZM19.97 10.25H21.97C21.82 7.05 20.24 4.23 17.85 2.4L16.43 3.83C18.45 5.28 19.82 7.6 19.97 10.25Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNotificationsActive;
