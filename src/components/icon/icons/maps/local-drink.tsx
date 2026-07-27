import React from "react";
import { withIcon } from "../../hoc";

const IconLocalDrink = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 1.2 0 L 3.612 21.876 C 3.756 23.076 4.764 24 6 24 H 18 C 19.236 24 20.244 23.076 20.388 21.876 L 22.8 0 H 1.2ZM 18 21.6 L 6 21.612 L 4.668 9.6 H 19.32 L 18 21.6ZM 19.596 7.2 H 4.404 L 3.876 2.4 H 20.112 L 19.596 7.2ZM 12 20.4 C 13.992 20.4 15.6 18.792 15.6 16.8 C 15.6 14.4 12 10.32 12 10.32 C 12 10.32 8.4 14.4 8.4 16.8 C 8.4 18.792 10.008 20.4 12 20.4ZM 12 14.292 C 12.708 15.384 13.2 16.368 13.2 16.8 C 13.2 17.46 12.66 18 12 18 C 11.34 18 10.8 17.46 10.8 16.8 C 10.8 16.356 11.292 15.372 12 14.292Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalDrink;
