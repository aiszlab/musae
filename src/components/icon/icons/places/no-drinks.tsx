import React from "react";
import { withIcon } from "../../hoc";

const NoDrinks = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 20.566 L 3.434 2 L 2 3.424 L 10.313 11.737 L 11.707 13.303 L 11.707 18.354 L 6.657 18.354 L 6.657 20.374 L 18.778 20.374 L 18.778 20.202 L 20.576 22 L 22 20.566 Z M 13.727 18.354 L 13.727 15.152 L 16.929 18.354 L 13.727 18.354 Z M 8.505 4.212 L 6.485 2.192 L 21.808 2.192 L 21.808 4.212 L 15.545 11.253 L 14.111 9.818 L 15.515 8.253 L 12.545 8.253 L 10.525 6.232 L 17.333 6.232 L 19.131 4.212 L 8.505 4.212 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default NoDrinks;
