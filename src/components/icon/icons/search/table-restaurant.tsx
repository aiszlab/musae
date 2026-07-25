import React from "react";
import { withIcon } from "../../hoc";

const TableRestaurant = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.962 9.73 L 20.532 4.729 C 20.412 4.298 20.022 3.998 19.572 3.998 L 4.428 3.998 C 3.978 3.998 3.588 4.298 3.468 4.729 L 2.038 9.73 C 1.858 10.36 2.338 11 2.998 11 L 5.199 11 L 3.998 20.002 L 5.999 20.002 L 6.669 15.001 L 17.341 15.001 L 18.001 20.002 L 20.002 20.002 L 18.801 11 L 21.002 11 C 21.662 11 22.142 10.36 21.962 9.73 Z M 6.929 13 L 7.199 11 L 16.801 11 L 17.071 13 L 6.929 13 Z M 4.328 8.999 L 5.189 5.999 L 18.821 5.999 L 19.682 8.999 L 4.328 8.999 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default TableRestaurant;
