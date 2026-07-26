import React from "react";
import { withIcon } from "../../hoc";

const IconRestaurant = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 16.8 4.8 V 14.4 H 20.4 V 24 H 22.8 V 0 C 19.488 0 16.8 2.688 16.8 4.8ZM 10.8 8.4 H 8.4 V 0 H 6 V 8.4 H 3.6 V 0 H 1.2 V 8.4 C 1.2 11.052 3.348 13.2 6 13.2 V 24 H 8.4 V 13.2 C 11.052 13.2 13.2 11.052 13.2 8.4 V 0 H 10.8 V 8.4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRestaurant;
