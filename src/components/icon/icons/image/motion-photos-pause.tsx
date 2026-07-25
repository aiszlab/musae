import React from "react";
import { withIcon } from "../../hoc";

const MotionPhotosPause = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0) scale(1.2)">
        <path
          d="M0.88 5.88L2.42 7.42C2.15 8.23 2 9.1 2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2C9.1 2 8.23 2.15 7.42 2.42L5.89 0.89C7.15 0.32 8.54 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 8.53 0.32 7.14 0.88 5.88ZM5 3.5C5 4.33 4.33 5 3.5 5C2.67 5 2 4.33 2 3.5C2 2.67 2.67 2 3.5 2C4.33 2 5 2.67 5 3.5ZM9 13H7V7H9V13ZM13 13H11V7H13V13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MotionPhotosPause;
