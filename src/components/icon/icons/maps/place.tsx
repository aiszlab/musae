import React from "react";
import { withIcon } from "../../hoc";

const IconPlace = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 12 C 10.68 12 9.6 10.92 9.6 9.6 C 9.6 8.28 10.68 7.2 12 7.2 C 13.32 7.2 14.4 8.28 14.4 9.6 C 14.4 10.92 13.32 12 12 12ZM 19.2 9.84 C 19.2 5.484 16.02 2.4 12 2.4 C 7.98 2.4 4.8 5.484 4.8 9.84 C 4.8 12.648 7.14 16.368 12 20.808 C 16.86 16.368 19.2 12.648 19.2 9.84ZM 12 0 C 17.04 0 21.6 3.864 21.6 9.84 C 21.6 13.824 18.396 18.54 12 24 C 5.604 18.54 2.4 13.824 2.4 9.84 C 2.4 3.864 6.96 0 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPlace;
