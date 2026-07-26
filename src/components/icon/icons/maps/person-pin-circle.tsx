import React from "react";
import { withIcon } from "../../hoc";

const IconPersonPinCircle = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 10.8 C 13.596 10.8 16.8 11.604 16.8 13.2 V 13.392 C 15.636 14.736 13.92 15.6 12 15.6 C 10.08 15.6 8.364 14.736 7.2 13.392 V 13.2 C 7.2 11.604 10.404 10.8 12 10.8ZM 12 9.6 C 10.68 9.6 9.6 8.52 9.6 7.2 C 9.6 5.88 10.68 4.8 12 4.8 C 13.32 4.8 14.4 5.88 14.4 7.2 C 14.4 8.52 13.32 9.6 12 9.6ZM 19.2 9.84 C 19.2 5.484 16.02 2.4 12 2.4 C 7.98 2.4 4.8 5.484 4.8 9.84 C 4.8 12.648 7.14 16.368 12 20.808 C 16.86 16.368 19.2 12.648 19.2 9.84ZM 12 0 C 17.04 0 21.6 3.864 21.6 9.84 C 21.6 13.824 18.396 18.54 12 24 C 5.604 18.54 2.4 13.824 2.4 9.84 C 2.4 3.864 6.96 0 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPersonPinCircle;
