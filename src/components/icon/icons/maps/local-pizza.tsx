import React from "react";
import { withIcon } from "../../hoc";

const LocalPizza = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(1.212, 0) scale(1.2)">
        <path
          d="M8.99 0C5.42 0 2.22 1.54 0 4L8.99 20L17.98 4C15.77 1.55 12.56 0 8.99 0ZM8.99 15.92L2.5 4.36C4.31 2.85 6.61 2 8.99 2C11.37 2 13.67 2.85 15.48 4.36L8.99 15.92ZM5.99 3.5C5.16 3.5 4.49 4.17 4.49 5C4.49 5.83 5.16 6.5 5.99 6.5C6.82 6.5 7.49 5.83 7.49 5C7.49 4.17 6.81 3.5 5.99 3.5ZM7.49 11C7.49 11.83 8.16 12.5 8.99 12.5C9.81 12.5 10.49 11.83 10.49 11C10.49 10.17 9.81 9.5 8.99 9.5C8.17 9.5 7.49 10.17 7.49 11Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default LocalPizza;
