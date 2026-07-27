import React from "react";
import { withIcon } from "../../hoc";

const IconBedroomParent = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 18.35 11.45 L 18.35 9 C 18.35 7.9 17.45 7 16.35 7 L 13 7 C 12.63 7 12.28 7.12 12 7.32 C 11.72 7.12 11.37 7 11 7 L 7.65 7 C 6.55 7 5.65 7.9 5.65 9 L 5.65 11.45 C 5.25 11.91 5 12.51 5 13.17 L 5 17 L 6.5 17 L 6.5 15.5 L 17.5 15.5 L 17.5 17 L 19 17 L 19 13.17 C 19 12.51 18.75 11.91 18.35 11.45 Z M 16.75 10.5 L 12.75 10.5 L 12.75 8.5 L 16.75 8.5 L 16.75 10.5 Z M 7.25 8.5 L 11.25 8.5 L 11.25 10.5 L 7.25 10.5 L 7.25 8.5 Z M 17.5 14 L 6.5 14 L 6.5 13 C 6.5 12.45 6.95 12 7.5 12 L 16.5 12 C 17.05 12 17.5 12.45 17.5 13 L 17.5 14 Z M 20 4 L 20 20 L 4 20 L 4 4 L 20 4 Z M 20 2 L 4 2 C 2.9 2 2 2.9 2 4 L 2 20 C 2 21.1 2.9 22 4 22 L 20 22 C 21.1 22 22 21.1 22 20 L 22 4 C 22 2.9 21.1 2 20 2 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBedroomParent;
