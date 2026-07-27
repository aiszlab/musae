import React from "react";
import { withIcon } from "../../hoc";

const IconWarehouse = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.6 7.62 V 20.4 H 19.2 V 10.8 H 4.8 V 20.4 H 2.4 V 7.62 L 12 3.78 L 21.6 7.62ZM 24 22.8 V 6 L 12 1.2 L 0 6 V 22.8 H 7.2 V 13.2 H 16.8 V 22.8 H 24ZM 10.8 20.4 H 8.4 V 22.8 H 10.8 V 20.4ZM 13.2 16.8 H 10.8 V 19.2 H 13.2 V 16.8ZM 15.6 20.4 H 13.2 V 22.8 H 15.6 V 20.4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWarehouse;
