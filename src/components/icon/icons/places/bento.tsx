import React from "react";
import { withIcon } from "../../hoc";

const Bento = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20 5 L 4 5 C 2.9 5 2 5.9 2 7 L 2 17 C 2 18.1 2.9 19 4 19 L 20 19 C 21.1 19 22 18.1 22 17 L 22 7 C 22 5.9 21.1 5 20 5 Z M 20 11 L 14 11 L 14 7 L 20 7 L 20 11 Z M 4 7 L 12 7 L 12 17 L 4 17 L 4 7 Z M 14 17 L 14 13 L 20 13 L 20 17 L 14 17 Z M 9.5 12 C 9.5 12.83 8.83 13.5 8 13.5 C 7.17 13.5 6.5 12.83 6.5 12 C 6.5 11.17 7.17 10.5 8 10.5 C 8.83 10.5 9.5 11.17 9.5 12 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Bento;
