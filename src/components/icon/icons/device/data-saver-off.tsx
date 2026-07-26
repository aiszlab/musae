import React from "react";
import { withIcon } from "../../hoc";

const IconDataSaverOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13 2.025V5.055C16.39 5.545 19 8.445 19 11.975C19 12.875 18.82 13.725 18.52 14.515L21.12 16.045C21.68 14.805 22 13.425 22 11.975C22 6.795 18.05 2.525 13 2.025ZM12 18.975C8.13 18.975 5 15.845 5 11.975C5 8.445 7.61 5.545 11 5.055V2.025C5.94 2.525 2 6.785 2 11.975C2 17.495 6.47 21.975 11.99 21.975C15.3 21.975 18.23 20.365 20.05 17.885L17.45 16.355C16.17 17.955 14.21 18.975 12 18.975Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDataSaverOff;
