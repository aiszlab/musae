import React from "react";
import { withIcon } from "../../hoc";

const Icon18UpRating = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M8.5 15H10V9H7V10.5H8.5V15Z" fill="currentColor" />
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
        fill="currentColor"
      />
      <path
        d="M12.5 15H15C15.55 15 16 14.55 16 14V10C16 9.45 15.55 9 15 9H12.5C11.95 9 11.5 9.45 11.5 10V14C11.5 14.55 11.95 15 12.5 15ZM13 10H14.5V11.5H13V10ZM13 12.5H14.5V14H13V12.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon18UpRating;
