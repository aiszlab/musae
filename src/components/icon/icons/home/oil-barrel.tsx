import React from "react";
import { withIcon } from "../../hoc";

const IconOilBarrel = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 13.05C9 14.68 10.34 16 12 16C13.66 16 15 14.68 15 13.05C15 11.74 14.47 11.36 12 8.5C9.52 11.38 9 11.75 9 13.05Z"
        fill="currentColor"
      />
      <path
        d="M20 13C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H19V5H20C20.55 5 21 4.55 21 4C21 3.45 20.55 3 20 3H4C3.45 3 3 3.45 3 4C3 4.55 3.45 5 4 5H5V11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13H5V19H4C3.45 19 3 19.45 3 20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20C21 19.45 20.55 19 20 19H19V13H20ZM17 19H7V13C7.55 13 8 12.55 8 12C8 11.45 7.55 11 7 11V5H17V11C16.45 11 16 11.45 16 12C16 12.55 16.45 13 17 13V19Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOilBarrel;
