import React from "react";
import { withIcon } from "../../hoc";

const IconStoreMallDirectory = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20.4795 8 L 21.2795 12 H 2.7199 L 3.5199 8 H 20.4795ZM 22.6661 1.3333 H 1.3333 V 4 H 22.6661 V 1.3333ZM 22.6661 5.3332 H 1.3333 L 0 12 V 14.6663 H 1.3333 V 22.6661 H 14.6663 V 14.6663 H 19.9995 V 22.6661 H 22.6661 V 14.6663 H 23.9994 V 12 L 22.6661 5.3332ZM 4 20 V 14.6663 H 12 V 20 H 4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStoreMallDirectory;
