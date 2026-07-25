import React from "react";
import { withIcon } from "../../hoc";

const RecentActors = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 4.3636) scale(1.0909)">
        <path
          d="M20 0H22V14H20V0ZM16 0H18V14H16V0ZM13 0H1C0.45 0 0 0.45 0 1V13C0 13.55 0.45 14 1 14H13C13.55 14 14 13.55 14 13V1C14 0.45 13.55 0 13 0ZM12 12H2V2H12V12Z"
          fill="currentColor"
        />
        <path
          d="M7 6.89C8.07696 6.89 8.95 6.01695 8.95 4.94C8.95 3.86304 8.07696 2.99 7 2.99C5.92304 2.99 5.05 3.86304 5.05 4.94C5.05 6.01695 5.92304 6.89 7 6.89Z"
          fill="currentColor"
        />
        <path
          d="M10.89 10.35C10.89 9.05 8.3 8.4 7 8.4C5.7 8.4 3.11 9.05 3.11 10.35V11H10.89V10.35Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default RecentActors;
