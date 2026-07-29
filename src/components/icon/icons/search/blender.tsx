import React from "react";
import { withIcon } from "../../hoc";

const IconBlender = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.63 15.13L19.5 3H15.5V2H11.5V3H6.5C5.4 3 4.5 3.9 4.5 5V9C4.5 10.1 5.4 11 6.5 11H8.73L9.37 15.13C8.24 16.05 7.5 17.43 7.5 19V20C7.5 21.1 8.4 22 9.5 22H17.5C18.6 22 19.5 21.1 19.5 20V19C19.5 17.43 18.76 16.05 17.63 15.13ZM6.5 9V5H7.81L8.43 9H6.5ZM17.17 5L15.79 14H11.22L9.83 5H17.17ZM17.5 20H9.5V19C9.5 17.35 10.85 16 12.5 16H14.5C16.15 16 17.5 17.35 17.5 19V20Z"
        fill="currentColor"
      />
      <path
        d="M13.5 19C14.0523 19 14.5 18.5523 14.5 18C14.5 17.4477 14.0523 17 13.5 17C12.9477 17 12.5 17.4477 12.5 18C12.5 18.5523 12.9477 19 13.5 19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBlender;
