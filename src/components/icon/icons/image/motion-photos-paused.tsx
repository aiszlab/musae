import React from "react";
import { withIcon } from "../../hoc";

const MotionPhotosPaused = withIcon(({ size }) => {
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
          d="M20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 8.81 0.22 7.68 0.6 6.62L2.48 7.3C2.17 8.14 2 9.05 2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2C9.05 2 8.15 2.17 7.31 2.48L6.63 0.59C7.69 0.22 8.82 0 10 0C15.52 0 20 4.48 20 10ZM3.5 2C2.67 2 2 2.67 2 3.5C2 4.33 2.67 5 3.5 5C4.33 5 5 4.33 5 3.5C5 2.67 4.33 2 3.5 2ZM9 14V6H7V14H9ZM13 14V6H11V14H13Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default MotionPhotosPaused;
