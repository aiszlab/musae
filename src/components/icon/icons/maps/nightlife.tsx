import React from "react";
import { withIcon } from "../../hoc";

const IconNightlife = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 0 3.4286 H 16.0006 L 9.1432 13.7147 V 18.2863 H 11.429 V 20.5721 H 4.5716 V 18.2863 H 6.8574 V 13.7147 L 0 3.4286ZM 10.4004 8 L 12 5.7144 H 3.9887 L 5.5888 8 H 10.4004ZM 18.2864 3.4286 H 24.0009 V 6.8573 H 20.5722 V 17.1434 C 20.5722 19.0406 19.0407 20.5721 17.1435 20.5721 C 15.2463 20.5721 13.7148 19.0406 13.7148 17.1434 C 13.7148 15.2462 15.2463 13.7147 17.1435 13.7147 C 17.5435 13.7147 17.9321 13.7833 18.2864 13.909 V 3.4286Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNightlife;
