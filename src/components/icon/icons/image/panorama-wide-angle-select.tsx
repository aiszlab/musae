import React from "react";
import { withIcon } from "../../hoc";

const IconPanoramaWideAngleSelect = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C8.03 2 5.15 2.63 3 3C2.45 4.97 2 6.92 2 10C2 13.03 2.45 15.05 3 17C5.15 17.37 7.98 18 12 18C15.97 18 18.85 17.37 21 17C21.57 14.98 22 13.01 22 10C22 6.97 21.55 4.95 21 3C18.85 2.63 16.02 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPanoramaWideAngleSelect;
