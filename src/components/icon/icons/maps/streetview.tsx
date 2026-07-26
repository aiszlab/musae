import React from "react";
import { withIcon } from "../../hoc";

const IconStreetview = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 11.472 15.996 C 11.064 16.32 10.8 16.836 10.8 17.4 V 24 H 19.2 C 20.52 24 21.6 22.92 21.6 21.6 V 14.424 C 20.472 14.028 19.26 13.8 18 13.8 C 15.564 13.8 13.284 14.64 11.472 15.996Z"
        fill="currentColor"
      />
      <path
        d="M 18 12 C 21.3137 12 24 9.3137 24 6 C 24 2.6863 21.3137 0 18 0 C 14.6863 0 12 2.6863 12 6 C 12 9.3137 14.6863 12 18 12Z"
        fill="currentColor"
      />
      <path
        d="M 10.2 6 C 10.2 4.704 10.524 3.48 11.088 2.4 H 2.4 C 1.08 2.4 0 3.48 0 4.8 V 21.6 C 0 22.26 0.276 22.86 0.708 23.292 L 12.492 11.508 C 11.076 10.104 10.2 8.16 10.2 6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStreetview;
