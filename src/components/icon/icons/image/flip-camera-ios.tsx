import React from "react";
import { withIcon } from "../../hoc";

const IconFlipCameraIos = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 4H16.83L15 2H9L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H8.05L8.64 5.35L9.88 4H14.12L15.36 5.35L15.95 6H20V18Z"
        fill="currentColor"
      />
      <path
        d="M12 16C9.79 16 8 14.21 8 12H10L7.5 9.5L5 12H7C7 14.76 9.24 17 12 17C12.86 17 13.65 16.76 14.36 16.38L13.62 15.64C13.13 15.87 12.58 16 12 16Z"
        fill="currentColor"
      />
      <path
        d="M12 7C11.14 7 10.35 7.24 9.64 7.62L10.38 8.35C10.87 8.13 11.42 8 12 8C14.21 8 16 9.79 16 12H14L16.5 14.5L19 12H17C17 9.24 14.76 7 12 7Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFlipCameraIos;
