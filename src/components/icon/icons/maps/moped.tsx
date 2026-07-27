import React from "react";
import { withIcon } from "../../hoc";

const IconMoped = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20.4 6 C 20.4 4.68 19.32 3.6 18 3.6 H 14.4 V 6 H 18 V 9.18 L 13.824 14.4 H 9.6 V 8.4 H 4.8 C 2.148 8.4 0 10.548 0 13.2 V 16.8 H 2.4 C 2.4 18.792 4.008 20.4 6 20.4 C 7.992 20.4 9.6 18.792 9.6 16.8 H 14.976 L 20.4 10.02 V 6ZM 2.4 14.4 V 13.2 C 2.4 11.88 3.48 10.8 4.8 10.8 H 7.2 V 14.4 H 2.4ZM 6 18 C 5.34 18 4.8 17.46 4.8 16.8 H 7.2 C 7.2 17.46 6.66 18 6 18Z"
        fill="currentColor"
      />
      <path d="M 9.6 4.8 H 3.6 V 7.2 H 9.6 V 4.8Z" fill="currentColor" />
      <path
        d="M 20.4 13.2 C 18.408 13.2 16.8 14.808 16.8 16.8 C 16.8 18.792 18.408 20.4 20.4 20.4 C 22.392 20.4 24 18.792 24 16.8 C 24 14.808 22.392 13.2 20.4 13.2ZM 20.4 18 C 19.74 18 19.2 17.46 19.2 16.8 C 19.2 16.14 19.74 15.6 20.4 15.6 C 21.06 15.6 21.6 16.14 21.6 16.8 C 21.6 17.46 21.06 18 20.4 18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMoped;
