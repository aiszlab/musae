import React from "react";
import { withIcon } from "../../hoc";

const IconDataUsage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 2.02539V5.05539C16.39 5.54539 19 8.44539 19 11.9754C19 12.8754 18.82 13.7254 18.52 14.5154L21.12 16.0454C21.68 14.8054 22 13.4254 22 11.9754C22 6.79539 18.05 2.52539 13 2.02539ZM12 18.9754C8.13 18.9754 5 15.8454 5 11.9754C5 8.44539 7.61 5.54539 11 5.05539V2.02539C5.94 2.52539 2 6.78539 2 11.9754C2 17.4954 6.47 21.9754 11.99 21.9754C15.3 21.9754 18.23 20.3654 20.05 17.8854L17.45 16.3554C16.17 17.9554 14.21 18.9754 12 18.9754Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDataUsage;
