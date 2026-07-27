import React from "react";
import { withIcon } from "../../hoc";

const IconRateReview = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.6 0 H 2.4 C 1.08 0 0.012 1.08 0.012 2.4 L 0 24 L 4.8 19.2 H 21.6 C 22.92 19.2 24 18.12 24 16.8 V 2.4 C 24 1.08 22.92 0 21.6 0ZM 21.6 16.8 H 3.804 L 2.4 18.204 V 2.4 H 21.6 V 16.8ZM 10.2 14.4 H 19.2 V 12 H 12.6 L 10.2 14.4ZM 14.832 7.356 C 15.072 7.116 15.072 6.744 14.832 6.504 L 12.708 4.38 C 12.468 4.14 12.096 4.14 11.856 4.38 L 4.8 11.436 V 14.4 H 7.764 L 14.832 7.356Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRateReview;
