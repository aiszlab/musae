import React from "react";
import { withIcon } from "../../hoc";

const IconLightbulbCircle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="currentColor"
      />
      <path
        d="M12 19C12.83 19 13.5 18.33 13.5 17.5H10.5C10.5 18.33 11.17 19 12 19Z"
        fill="currentColor"
      />
      <path d="M15 15H9V16.5H15V15Z" fill="currentColor" />
      <path
        d="M12 5C9.24 5 7 7.24 7 10C7 11.64 7.8 13.09 9.03 14H14.98C16.2 13.09 17 11.64 17 10C17 7.24 14.76 5 12 5ZM14.43 12.5H9.57C8.89 11.84 8.5 10.95 8.5 10C8.5 8.07 10.07 6.5 12 6.5C13.93 6.5 15.5 8.07 15.5 10C15.5 10.95 15.11 11.84 14.43 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLightbulbCircle;
