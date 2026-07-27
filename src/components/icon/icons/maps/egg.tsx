import React from "react";
import { withIcon } from "../../hoc";

const IconEgg = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 3C8.5 3 5 9.33 5 14C5 17.87 8.13 21 12 21C15.87 21 19 17.87 19 14C19 9.33 15.5 3 12 3ZM12 19C9.24 19 7 16.76 7 14C7 9.91 10.07 5 12 5C13.93 5 17 9.91 17 14C17 16.76 14.76 19 12 19Z"
        fill="currentColor"
      />
      <path
        d="M13 16C12.42 16 10 15.92 10 13C10 12.45 9.55 12 9 12C8.45 12 8 12.45 8 13C8 16 9.99 18 13 18C13.55 18 14 17.55 14 17C14 16.45 13.55 16 13 16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEgg;
