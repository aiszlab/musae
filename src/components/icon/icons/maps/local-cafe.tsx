import React from "react";
import { withIcon } from "../../hoc";

const IconLocalCafe = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 16.8 3.6 V 13.2 C 16.8 14.52 15.72 15.6 14.4 15.6 H 7.2 C 5.88 15.6 4.8 14.52 4.8 13.2 V 3.6 H 16.8ZM 21.6 1.2 H 2.4 V 13.2 C 2.4 15.852 4.548 18 7.2 18 H 14.4 C 17.052 18 19.2 15.852 19.2 13.2 V 9.6 H 21.6 C 22.932 9.6 24 8.532 24 7.2 V 3.6 C 24 2.268 22.932 1.2 21.6 1.2ZM 19.2 7.2 V 3.6 H 21.6 V 7.2 H 19.2ZM 21.6 20.4 H 0 V 22.8 H 21.6 V 20.4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalCafe;
