import React from "react";
import { withIcon } from "../../hoc";

const LinearScale = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 9) scale(1.2)">
        <path
          d="M17.5 0C16.47 0 15.6 0.62 15.21 1.5H12.29C11.9 0.62 11.03 0 10 0C8.97 0 8.1 0.62 7.71 1.5H4.79C4.4 0.62 3.53 0 2.5 0C1.12 0 0 1.12 0 2.5C0 3.88 1.12 5 2.5 5C3.53 5 4.4 4.38 4.79 3.5H7.71C8.1 4.38 8.97 5 10 5C11.03 5 11.9 4.38 12.29 3.5H15.21C15.6 4.38 16.47 5 17.5 5C18.88 5 20 3.88 20 2.5C20 1.12 18.88 0 17.5 0Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LinearScale;
