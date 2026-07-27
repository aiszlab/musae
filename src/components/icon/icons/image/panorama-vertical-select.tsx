import React from "react";
import { withIcon } from "../../hoc";

const IconPanoramaVerticalSelect = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.4998 12C16.4998 8.11 17.3398 5.05 17.9298 3.31C18.1498 2.67 17.6698 2 16.9798 2H2.9998C2.3198 2 1.8398 2.66 2.0498 3.31C2.7398 5.36 3.4998 8.1 3.4998 12C3.4998 15.87 2.7398 18.66 2.0498 20.69C1.8398 21.34 2.3198 22 2.9998 22H16.9998C17.6798 22 18.1698 21.34 17.9498 20.69C17.2698 18.66 16.4998 15.86 16.4998 12Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPanoramaVerticalSelect;
