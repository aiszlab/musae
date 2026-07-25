import React from "react";
import { withIcon } from "../../hoc";

const WaterDrop = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 2 C 6.67 6.55 4 10.48 4 13.8 C 4 18.78 7.8 22 12 22 C 16.2 22 20 18.78 20 13.8 C 20 10.48 17.33 6.55 12 2 Z M 12 20 C 8.65 20 6 17.43 6 13.8 C 6 11.46 7.95 8.36 12 4.66 C 16.05 8.36 18 11.45 18 13.8 C 18 17.43 15.35 20 12 20 Z M 7.83 14 C 8.2 14 8.5 14.26 8.57 14.62 C 8.98 16.84 10.85 17.6 12.21 17.49 C 12.64 17.47 13 17.81 13 18.24 C 13 18.64 12.68 18.97 12.28 18.99 C 10.15 19.12 7.66 17.9 7.09 14.87 C 7.01 14.42 7.37 14 7.83 14 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default WaterDrop;
