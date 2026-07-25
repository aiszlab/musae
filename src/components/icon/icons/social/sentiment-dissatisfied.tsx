import React from "react";
import { withIcon } from "../../hoc";

const SentimentDissatisfied = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 15.5 11 C 16.328 11 17 10.328 17 9.5 C 17 8.672 16.328 8 15.5 8 C 14.672 8 14 8.672 14 9.5 C 14 10.328 14.672 11 15.5 11 Z"
        fill="currentColor"
      />
      <path
        d="M 8.5 11 C 9.328 11 10 10.328 10 9.5 C 10 8.672 9.328 8 8.5 8 C 7.672 8 7 8.672 7 9.5 C 7 10.328 7.672 11 8.5 11 Z"
        fill="currentColor"
      />
      <path
        d="M 12 14 C 9.67 14 7.68 15.45 6.88 17.5 L 8.55 17.5 C 9.24 16.31 10.52 15.5 12 15.5 C 13.48 15.5 14.75 16.31 15.45 17.5 L 17.12 17.5 C 16.32 15.45 14.33 14 12 14 Z M 11.99 2 C 6.47 2 2 6.48 2 12 C 2 17.52 6.47 22 11.99 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 11.99 2 Z M 12 20 C 7.58 20 4 16.42 4 12 C 4 7.58 7.58 4 12 4 C 16.42 4 20 7.58 20 12 C 20 16.42 16.42 20 12 20 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default SentimentDissatisfied;
