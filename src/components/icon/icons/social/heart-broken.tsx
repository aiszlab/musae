import React from "react";
import { withIcon } from "../../hoc";

const IconHeartBroken = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.5 3C15.54 3 14.6 3.25 13.77 3.69L12 9H15L12 19L13 10H10L11.54 4.61C10.47 3.61 9.01 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.63 6.16 15.68 12 21C17.47 16.06 22 12.74 22 8.5C22 5.42 19.58 3 16.5 3ZM10.24 16.73C6.45 13.34 4 11 4 8.5C4 6.54 5.54 5 7.5 5C8.09 5 8.69 5.15 9.23 5.42L7.35 12H10.77L10.24 16.73ZM15.13 15.53L17.69 7H14.78L15.39 5.18C15.75 5.06 16.13 5 16.5 5C18.46 5 20 6.54 20 8.5C20 10.71 17.98 12.93 15.13 15.53Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHeartBroken;
