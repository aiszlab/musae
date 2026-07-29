import React from "react";
import { withIcon } from "../../hoc";

const IconPanoramaPhotosphereSelect = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.95 8.15C21.66 7.99 21.34 7.84 21.02 7.69C19.4 4.33 15.98 2 12 2C8.02 2 4.6 4.33 2.99 7.68C2.66 7.83 2.35 7.98 2.06 8.14C1.41 8.5 1 9.17 1 9.91V14.09C1 14.83 1.41 15.5 2.05 15.86C2.34 16.02 2.66 16.17 2.98 16.32C4.6 19.67 8.02 22 12 22C15.98 22 19.4 19.67 21.01 16.32C21.34 16.17 21.65 16.02 21.94 15.86C22.59 15.5 23 14.83 23 14.09V9.91C23 9.17 22.59 8.5 21.95 8.15ZM12 4C14.37 4 16.49 5.04 17.95 6.68C16.17 6.25 14.15 6 12 6C9.85 6 7.83 6.25 6.05 6.68C7.51 5.04 9.63 4 12 4ZM12 20C9.63 20 7.51 18.96 6.05 17.32C7.83 17.75 9.85 18 12 18C14.15 18 16.17 17.75 17.95 17.32C16.49 18.96 14.37 20 12 20Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPanoramaPhotosphereSelect;
