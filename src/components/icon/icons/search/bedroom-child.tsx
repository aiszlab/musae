import React from "react";
import { withIcon } from "../../hoc";

const BedroomChild = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20 4 L 20 20 L 4 20 L 4 4 L 20 4 Z M 20 2 L 4 2 C 2.9 2 2 2.9 2 4 L 2 20 C 2 21.1 2.9 22 4 22 L 20 22 C 21.1 22 22 21.1 22 20 L 22 4 C 22 2.9 21.1 2 20 2 Z M 16.5 10.67 L 16.5 9 C 16.5 7.9 15.6 7 14.5 7 L 9.5 7 C 8.4 7 7.5 7.9 7.5 9 L 7.5 10.67 C 6.62 11.02 6 11.87 6 12.87 L 6 17 L 7.5 17 L 7.5 15.5 L 16.5 15.5 L 16.5 17 L 18 17 L 18 12.87 C 18 11.87 17.38 11.02 16.5 10.67 Z M 15 8.5 L 15 10.5 L 9 10.5 L 9 8.5 L 15 8.5 Z M 7.5 12.87 C 7.5 12.39 7.89 12 8.37 12 L 15.64 12 C 16.12 12 16.51 12.39 16.51 12.87 L 16.51 14 L 7.51 14 L 7.51 12.87 L 7.5 12.87 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default BedroomChild;
