import React from "react";
import { withIcon } from "../../hoc";

const PersonalVideo = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20.182 3.818 L 3.818 3.818 C 2.809 3.818 2 4.627 2 5.636 L 2 16.545 C 2 17.545 2.809 18.364 3.818 18.364 L 8.364 18.364 L 8.364 20.182 L 15.636 20.182 L 15.636 18.364 L 20.182 18.364 C 21.182 18.364 21.991 17.545 21.991 16.545 L 22 5.636 C 22 4.627 21.182 3.818 20.182 3.818 Z M 20.182 16.545 L 3.818 16.545 L 3.818 5.636 L 20.182 5.636 L 20.182 16.545 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default PersonalVideo;
