import React from "react";
import { withIcon } from "../../hoc";

const IconTakeoutDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 6.948 19.8 L 6.336 11.4 H 17.688 L 17.076 19.8 H 6.948ZM 9.396 4.2 H 14.592 L 17.952 7.476 L 17.844 9 H 6.144 L 6.036 7.476 L 9.396 4.2ZM 24 7.152 L 22.308 5.46 L 20.4 7.356 L 20.436 6.684 L 15.576 1.8 H 8.424 L 3.564 6.684 L 3.6 7.284 L 1.692 5.412 L 0 7.128 L 3.876 10.86 L 4.716 22.2 H 19.284 L 20.124 10.872 L 24 7.152Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTakeoutDining;
