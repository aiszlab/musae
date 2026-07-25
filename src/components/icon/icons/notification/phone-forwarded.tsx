import React from "react";
import { withIcon } from "../../hoc";

const PhoneForwarded = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19 16.5 C 17.75 16.5 16.55 16.3 15.43 15.93 C 15.33 15.9 15.22 15.88 15.12 15.88 C 14.86 15.88 14.61 15.98 14.41 16.17 L 12.21 18.37 C 9.38 16.93 7.06 14.62 5.62 11.78 L 7.82 9.57 C 8.1 9.31 8.18 8.92 8.07 8.57 C 7.7 7.45 7.5 6.25 7.5 5 C 7.5 4.45 7.05 4 6.5 4 L 3 4 C 2.45 4 2 4.45 2 5 C 2 14.39 9.61 22 19 22 C 19.55 22 20 21.55 20 21 L 20 17.5 C 20 16.95 19.55 16.5 19 16.5 Z M 4.03 6 L 5.53 6 C 5.6 6.88 5.75 7.75 5.98 8.58 L 4.78 9.79 C 4.38 8.58 4.12 7.32 4.03 6 Z M 18 19.97 C 16.68 19.88 15.4 19.62 14.2 19.21 L 15.4 18.01 C 16.25 18.25 17.12 18.4 18 18.46 L 18 19.97 Z M 17 12 L 22 7 L 17 2 L 17 5 L 13 5 L 13 9 L 17 9 L 17 12 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default PhoneForwarded;
