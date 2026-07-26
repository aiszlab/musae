import React from "react";
import { withIcon } from "../../hoc";

const IconTwoWheeler = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 4.17 11 C 4.12 11 4.06 11 4 11 H 4.17ZM 13.41 5 H 9 V 7 H 12.59 L 14.59 9 H 11 L 7 11 L 5 9 H 0 V 11 H 4 C 1.79 11 0 12.79 0 15 C 0 17.21 1.79 19 4 19 C 6.21 19 8 17.21 8 15 L 10 17 H 13 L 16.49 10.9 L 17.5 11.91 C 16.59 12.64 16 13.75 16 15 C 16 17.21 17.79 19 20 19 C 22.21 19 24 17.21 24 15 C 24 12.79 22.21 11 20 11 C 19.82 11 19.64 11.03 19.47 11.05 L 17.41 9 H 20 V 6 L 16.28 7.86 L 13.41 5ZM 20 17 C 18.9 17 18 16.1 18 15 C 18 13.9 18.9 13 20 13 C 21.1 13 22 13.9 22 15 C 22 16.1 21.1 17 20 17ZM 4 17 C 2.9 17 2 16.1 2 15 C 2 13.9 2.9 13 4 13 C 5.1 13 6 13.9 6 15 C 6 16.1 5.1 17 4 17Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTwoWheeler;
