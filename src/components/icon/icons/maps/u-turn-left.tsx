import React from "react";
import { withIcon } from "../../hoc";

const IconUTurnLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.9995 8 V 23.9994 H 19.3329 V 8 C 19.3329 5.0532 16.9463 2.6666 14 2.6666 C 11.0531 2.6666 8.6665 5.0532 8.6665 8 V 13.5597 L 10.7864 11.4397 L 12.6664 13.333 L 7.3332 18.6662 L 2 13.333 L 3.88 11.453 L 6 13.5597 V 8 C 6 3.5866 9.5865 0 14 0 C 18.4129 0 21.9995 3.5866 21.9995 8Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconUTurnLeft;
