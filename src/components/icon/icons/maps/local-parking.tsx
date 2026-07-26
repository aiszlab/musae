import React from "react";
import { withIcon } from "../../hoc";

const IconLocalParking = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12.6664 0 H 3.3333 V 23.9994 H 8.6665 V 16 H 12.6664 C 17.0796 16 20.6662 12.413 20.6662 8 C 20.6662 3.5866 17.0796 0 12.6664 0ZM 12.9331 10.6664 H 8.6665 V 5.3332 H 12.9331 C 14.3997 5.3332 15.5997 6.5332 15.5997 8 C 15.5997 9.4664 14.3997 10.6664 12.9331 10.6664Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalParking;
