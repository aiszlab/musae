import React from "react";
import { withIcon } from "../../hoc";

const IconSevereCold = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12.5 10.41 L 16.5 6.41 L 15.09 5 L 12.5 7.59 L 12.5 4 L 10.5 4 L 10.5 7.59 L 7.91 5 L 6.5 6.41 L 10.5 10.41 L 10.5 12 L 8.91 12 L 4.91 8 L 3.5 9.41 L 6.09 12 L 2.5 12 L 2.5 14 L 6.09 14 L 3.5 16.59 L 4.91 18 L 8.91 14 L 10.5 14 L 10.5 15.59 L 6.5 19.59 L 7.91 21 L 10.5 18.41 L 10.5 22 L 12.5 22 L 12.5 18.41 L 15.09 21 L 16.5 19.59 L 12.5 15.59 L 12.5 14 L 14.09 14 L 18.09 18 L 19.5 16.59 L 16.91 14 L 20.5 14 L 20.5 12 L 12.5 12 L 12.5 10.41 Z"
        fill="currentColor"
      />
      <path d="M 21.5 2 L 19.5 2 L 19.5 7 L 21.5 7 L 21.5 2 Z" fill="currentColor" />
      <path d="M 21.5 8 L 19.5 8 L 19.5 10 L 21.5 10 L 21.5 8 Z" fill="currentColor" />
    </svg>
  );
});

export default IconSevereCold;
