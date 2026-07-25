import React from "react";
import { withIcon } from "../../hoc";

const SettingsVoice = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 21.5H9V23.5H7V21.5ZM12 12.5C13.66 12.5 15 11.16 15 9.5V3.5C15 1.84 13.66 0.5 12 0.5C10.34 0.5 9 1.84 9 3.5V9.5C9 11.16 10.34 12.5 12 12.5ZM11 3.5C11 2.95 11.45 2.5 12 2.5C12.55 2.5 13 2.95 13 3.5V9.5C13 10.06 12.56 10.5 12 10.5C11.45 10.5 11 10.05 11 9.5V3.5ZM11 21.5H13V23.5H11V21.5ZM15 21.5H17V23.5H15V21.5ZM19 9.5H17.3C17.3 12.5 14.76 14.6 12 14.6C9.24 14.6 6.7 12.5 6.7 9.5H5C5 12.91 7.72 15.73 11 16.22V19.5H13V16.22C16.28 15.73 19 12.91 19 9.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default SettingsVoice;
