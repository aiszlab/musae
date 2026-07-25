import React from "react";
import { withIcon } from "../../hoc";

const VolunteerActivism = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.2857) scale(1.1429)">
        <path
          d="M15 11C18.09 8.19 21 5.56 21 3.3C21 1.45 19.55 0 17.7 0C16.66 0 15.65 0.49 15 1.25C14.34 0.49 13.34 0 12.3 0C10.45 0 9 1.45 9 3.3C9 5.56 11.91 8.19 15 11ZM12.3 2C12.74 2 13.19 2.21 13.48 2.55L15 4.34L16.52 2.55C16.81 2.21 17.26 2 17.7 2C18.44 2 19 2.56 19 3.3C19 4.42 16.96 6.47 15 8.29C13.04 6.47 11 4.41 11 3.3C11 2.56 11.56 2 12.3 2Z"
          fill="currentColor"
        />
        <path
          d="M18 14H16C16 12.8 15.25 11.72 14.13 11.3L7.97 9H0V20H6V18.56L13 20.5L21 18V17C21 15.34 19.66 14 18 14ZM2 18V11H4V18H2ZM12.97 18.41L6 16.48V11H7.61L13.43 13.17C13.77 13.3 14 13.63 14 14C14 14 12.01 13.95 11.7 13.85L9.32 13.06L8.69 14.96L11.07 15.75C11.58 15.92 12.11 16.01 12.65 16.01H18C18.39 16.01 18.74 16.24 18.9 16.57L12.97 18.41Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default VolunteerActivism;
