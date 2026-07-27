import React from "react";
import { withIcon } from "../../hoc";

const IconPerson = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 4.5 C 13.375 4.5 14.5 5.625 14.5 7 C 14.5 8.375 13.375 9.5 12 9.5 C 10.625 9.5 9.5 8.375 9.5 7 C 9.5 5.625 10.625 4.5 12 4.5 Z M 12 17 C 15.375 17 19.25 18.612 19.5 19.5 L 4.5 19.5 C 4.788 18.6 8.638 17 12 17 Z M 12 2 C 9.238 2 7 4.238 7 7 C 7 9.763 9.238 12 12 12 C 14.763 12 17 9.763 17 7 C 17 4.238 14.763 2 12 2 Z M 12 14.5 C 8.663 14.5 2 16.175 2 19.5 L 2 22 L 22 22 L 22 19.5 C 22 16.175 15.338 14.5 12 14.5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPerson;
