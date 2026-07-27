import React from "react";
import { withIcon } from "../../hoc";

const IconLocalAtm = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 10.8 18 H 13.2 V 16.8 H 14.4 C 15.06 16.8 15.6 16.26 15.6 15.6 V 12 C 15.6 11.34 15.06 10.8 14.4 10.8 H 10.8 V 9.6 H 15.6 V 7.2 H 13.2 V 6 H 10.8 V 7.2 H 9.6 C 8.94 7.2 8.4 7.74 8.4 8.4 V 12 C 8.4 12.66 8.94 13.2 9.6 13.2 H 13.2 V 14.4 H 8.4 V 16.8 H 10.8 V 18ZM 21.6 2.4 H 2.4 C 1.068 2.4 0.012 3.468 0.012 4.8 L 0 19.2 C 0 20.532 1.068 21.6 2.4 21.6 H 21.6 C 22.932 21.6 24 20.532 24 19.2 V 4.8 C 24 3.468 22.932 2.4 21.6 2.4ZM 21.6 19.2 H 2.4 V 4.8 H 21.6 V 19.2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalAtm;
