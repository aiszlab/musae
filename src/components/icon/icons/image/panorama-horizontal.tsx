import React from "react";
import { withIcon } from "../../hoc";

const IconPanoramaHorizontal = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 4.54V15.45C17.4 14.68 14.72 14.29 12 14.29C9.28 14.29 6.6 14.68 4 15.45V4.54C6.6 5.31 9.28 5.7 12 5.7C14.72 5.71 17.4 5.32 20 4.54ZM21.43 2C21.33 2 21.23 2.02 21.12 2.06C18.18 3.16 15.09 3.7 12 3.7C8.91 3.7 5.82 3.15 2.88 2.06C2.77 2.02 2.66 2 2.57 2C2.23 2 2 2.23 2 2.63V17.38C2 17.77 2.23 18 2.57 18C2.67 18 2.77 17.98 2.88 17.94C5.82 16.84 8.91 16.3 12 16.3C15.09 16.3 18.18 16.85 21.12 17.94C21.23 17.98 21.33 18 21.43 18C21.76 18 22 17.77 22 17.37V2.63C22 2.23 21.76 2 21.43 2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPanoramaHorizontal;
