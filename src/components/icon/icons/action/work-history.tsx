import React from "react";
import { withIcon } from "../../hoc";

const IconWorkHistory = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.5 18.5V7.5H19.5V10.79C20.22 11.01 20.9 11.33 21.5 11.76V7.5C21.5 6.39 20.61 5.5 19.5 5.5H15.5V3.5C15.5 2.39 14.61 1.5 13.5 1.5H9.5C8.39 1.5 7.5 2.39 7.5 3.5V5.5H3.5C2.39 5.5 1.51 6.39 1.51 7.5L1.5 18.5C1.5 19.61 2.39 20.5 3.5 20.5H11.18C10.88 19.88 10.68 19.21 10.58 18.5H3.5ZM9.5 3.5H13.5V5.5H9.5V3.5Z"
        fill="currentColor"
      />
      <path
        d="M17.5 12.5C14.74 12.5 12.5 14.74 12.5 17.5C12.5 20.26 14.74 22.5 17.5 22.5C20.26 22.5 22.5 20.26 22.5 17.5C22.5 14.74 20.26 12.5 17.5 12.5ZM19.15 19.85L17 17.7V14.5H18V17.29L19.85 19.14L19.15 19.85Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWorkHistory;
