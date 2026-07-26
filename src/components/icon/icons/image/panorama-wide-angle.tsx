import React from "react";
import { withIcon } from "../../hoc";

const IconPanoramaWideAngle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 4C14.45 4 16.71 4.2 19.29 4.64C19.76 6.42 20 8.22 20 10C20 11.78 19.76 13.58 19.29 15.36C16.71 15.8 14.45 16 12 16C9.55 16 7.29 15.8 4.71 15.36C4.24 13.58 4 11.78 4 10C4 8.22 4.24 6.42 4.71 4.64C7.29 4.2 9.55 4 12 4ZM12 2C9.27 2 6.78 2.24 4.05 2.72L3.12 2.88L2.87 3.78C2.29 5.85 2 7.93 2 10C2 12.07 2.29 14.15 2.87 16.22L3.12 17.11L4.05 17.27C6.78 17.76 9.27 18 12 18C14.73 18 17.22 17.76 19.95 17.28L20.88 17.12L21.13 16.23C21.71 14.15 22 12.07 22 10C22 7.93 21.71 5.85 21.13 3.78L20.88 2.89L19.95 2.73C17.22 2.24 14.73 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPanoramaWideAngle;
