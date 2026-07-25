import React from "react";
import { withIcon } from "../../hoc";

const Gite = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 18 6.5 L 9 6.5 L 9 4.5 L 7 4.5 L 7 6.5 L 6 6.5 L 2 10.5 L 2 19.5 L 22 19.5 L 22 10.5 L 18 6.5 Z M 4 12.5 L 14 12.5 L 14 17.5 L 4 17.5 L 4 12.5 Z M 20 17.5 L 16 17.5 L 16 11.33 L 18 9.33 L 20 11.33 L 20 17.5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Gite;
