import React from "react";
import { withIcon } from "../../hoc";

const IconSentimentVerySatisfied = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 11.99 2 C 6.47 2 2 6.47 2 12 C 2 17.53 6.47 22 11.99 22 C 17.51 22 22 17.53 22 12 C 22 6.47 17.52 2 11.99 2 Z M 12 20 C 7.58 20 4 16.42 4 12 C 4 7.58 7.58 4 12 4 C 16.42 4 20 7.58 20 12 C 20 16.42 16.42 20 12 20 Z M 13 9.94 L 14.06 11 L 15.12 9.94 L 16.18 11 L 17.24 9.94 L 15.12 7.82 L 13 9.94 Z M 8.88 9.94 L 9.94 11 L 11 9.94 L 8.88 7.82 L 6.76 9.94 L 7.82 11 L 8.88 9.94 Z M 12 17.5 C 14.33 17.5 16.31 16.04 17.11 14 L 6.89 14 C 7.69 16.04 9.67 17.5 12 17.5 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSentimentVerySatisfied;
