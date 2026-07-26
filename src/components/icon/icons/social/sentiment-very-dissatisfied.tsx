import React from "react";
import { withIcon } from "../../hoc";

const IconSentimentVeryDissatisfied = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 13.5 C 9.67 13.5 7.69 14.96 6.89 17 L 17.11 17 C 16.31 14.96 14.33 13.5 12 13.5 Z M 7.82 12 L 8.88 10.94 L 9.94 12 L 11 10.94 L 9.94 9.88 L 11 8.82 L 9.94 7.76 L 8.88 8.82 L 7.82 7.76 L 6.76 8.82 L 7.82 9.88 L 6.76 10.94 L 7.82 12 Z M 11.99 2 C 6.47 2 2 6.47 2 12 C 2 17.53 6.47 22 11.99 22 C 17.51 22 22 17.53 22 12 C 22 6.47 17.52 2 11.99 2 Z M 12 20 C 7.58 20 4 16.42 4 12 C 4 7.58 7.58 4 12 4 C 16.42 4 20 7.58 20 12 C 20 16.42 16.42 20 12 20 Z M 16.18 7.76 L 15.12 8.82 L 14.06 7.76 L 13 8.82 L 14.06 9.88 L 13 10.94 L 14.06 12 L 15.12 10.94 L 16.18 12 L 17.24 10.94 L 16.18 9.88 L 17.24 8.82 L 16.18 7.76 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSentimentVeryDissatisfied;
