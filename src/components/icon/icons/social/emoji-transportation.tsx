import React from "react";
import { withIcon } from "../../hoc";

const EmojiTransportation = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20.57 10.66 C 20.43 10.26 20.05 10 19.6 10 L 12.41 10 C 11.95 10 11.58 10.26 11.43 10.66 L 10 14.77 L 10.01 20.28 C 10.01 20.66 10.32 21 10.7 21 L 11.32 21 C 11.7 21 12 20.62 12 20.24 L 12 19 L 20 19 L 20 20.24 C 20 20.62 20.31 21 20.69 21 L 21.3 21 C 21.68 21 21.99 20.66 21.99 20.28 L 22 18.91 L 22 14.77 L 20.57 10.66 Z M 12.41 11 L 19.6 11 L 20.63 14 L 11.38 14 L 12.41 11 Z M 12 17 C 11.45 17 11 16.55 11 16 C 11 15.45 11.45 15 12 15 C 12.55 15 13 15.45 13 16 C 13 16.55 12.55 17 12 17 Z M 20 17 C 19.45 17 19 16.55 19 16 C 19 15.45 19.45 15 20 15 C 20.55 15 21 15.45 21 16 C 21 16.55 20.55 17 20 17 Z"
        fill="currentColor"
      />
      <path
        d="M 14 9 L 15 9 L 15 3 L 7 3 L 7 8 L 2 8 L 2 21 L 3 21 L 3 9 L 8 9 L 8 4 L 14 4 L 14 9 Z"
        fill="currentColor"
      />
      <path d="M 7 11 L 5 11 L 5 13 L 7 13 L 7 11 Z" fill="currentColor" />
      <path d="M 12 5 L 10 5 L 10 7 L 12 7 L 12 5 Z" fill="currentColor" />
      <path d="M 7 15 L 5 15 L 5 17 L 7 17 L 7 15 Z" fill="currentColor" />
      <path d="M 7 19 L 5 19 L 5 21 L 7 21 L 7 19 Z" fill="currentColor" />
    </svg>
  );
});

export default EmojiTransportation;
