import React from "react";
import { withIcon } from "../../hoc";

const IconNoCrash = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 18.92 9.01 C 18.72 8.42 18.16 8 17.5 8 H 6.5 C 5.84 8 5.29 8.42 5.08 9.01 L 3 15 V 23 C 3 23.55 3.45 24 4 24 H 5 C 5.55 24 6 23.55 6 23 V 22 H 18 V 23 C 18 23.55 18.45 24 19 24 H 20 C 20.55 24 21 23.55 21 23 V 15 L 18.92 9.01ZM 6.85 10 H 17.14 L 18.18 13 H 5.81 L 6.85 10ZM 19 20 H 5 V 15 H 19 V 20ZM 6 17.5 C 6 16.67 6.67 16 7.5 16 C 8.33 16 9 16.67 9 17.5 C 9 18.33 8.33 19 7.5 19 C 6.67 19 6 18.33 6 17.5ZM 15 17.5 C 15 16.67 15.67 16 16.5 16 C 17.33 16 18 16.67 18 17.5 C 18 18.33 17.33 19 16.5 19 C 15.67 19 15 18.33 15 17.5ZM 12 6.36 L 9.17 3.54 L 10.58 2.13 L 12 3.54 L 15.54 0 L 16.95 1.41 L 12 6.36Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNoCrash;
