import React from "react";
import { withIcon } from "../../hoc";

const IconOtherHouses = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 3L1 11.4L2.21 12.99L4 11.62V21H20V11.62L21.79 12.98L23 11.4L12 3ZM18 19H6V10.1L12 5.52L18 10.1V19ZM9 14C9 14.55 8.55 15 8 15C7.45 15 7 14.55 7 14C7 13.45 7.45 13 8 13C8.55 13 9 13.45 9 14ZM12 13C12.55 13 13 13.45 13 14C13 14.55 12.55 15 12 15C11.45 15 11 14.55 11 14C11 13.45 11.45 13 12 13ZM15 14C15 13.45 15.45 13 16 13C16.55 13 17 13.45 17 14C17 14.55 16.55 15 16 15C15.45 15 15 14.55 15 14Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOtherHouses;
