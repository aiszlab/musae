import React from "react";
import { withIcon } from "../../hoc";

const IconManageSearch = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 7 8.5 L 2 8.5 L 2 6.5 L 7 6.5 L 7 8.5 Z M 7 11.5 L 2 11.5 L 2 13.5 L 7 13.5 L 7 11.5 Z M 20.59 18.5 L 16.76 14.67 C 15.96 15.19 15.02 15.5 14 15.5 C 11.24 15.5 9 13.26 9 10.5 C 9 7.74 11.24 5.5 14 5.5 C 16.76 5.5 19 7.74 19 10.5 C 19 11.52 18.69 12.46 18.17 13.25 L 22 17.09 L 20.59 18.5 Z M 17 10.5 C 17 8.85 15.65 7.5 14 7.5 C 12.35 7.5 11 8.85 11 10.5 C 11 12.15 12.35 13.5 14 13.5 C 15.65 13.5 17 12.15 17 10.5 Z M 2 18.5 L 12 18.5 L 12 16.5 L 2 16.5 L 2 18.5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconManageSearch;
