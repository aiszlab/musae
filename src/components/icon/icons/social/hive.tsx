import React from "react";
import { withIcon } from "../../hoc";

const IconHive = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.5 9L19.25 5H15.94L14.25 2H9.75L8.06 5H4.75L2.5 9L4.19 12L2.5 15L4.75 19H8.06L9.75 22H14.25L15.94 19H19.25L21.5 15L19.81 12L21.5 9ZM19.21 9L18.09 11H15.95L14.83 9L15.95 7H18.09L19.21 9ZM10.94 14L9.82 12L10.94 10H13.06L14.18 12L13.06 14H10.94ZM13.08 4L14.2 5.98L13.06 8H10.94L9.8 5.98L10.92 4H13.08ZM5.92 7H8.06L9.18 9L8.06 11H5.92L4.79 9L5.92 7ZM4.79 15L5.91 13H8.05L9.17 15L8.05 17H5.92L4.79 15ZM10.92 20L9.8 18.02L10.94 16H13.06L14.19 18.02L13.08 20H10.92ZM18.08 17H15.94L14.82 15L15.94 13H18.08L19.2 15L18.08 17Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHive;
