import React from "react";
import { withIcon } from "../../hoc";

const IconUTurnRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 2 8 V 23.9994 H 4.6666 V 8 C 4.6666 5.0532 7.0532 2.6666 10 2.6666 C 12.9464 2.6666 15.333 5.0532 15.333 8 V 13.5597 L 13.2131 11.4397 L 11.3331 13.333 L 16.6663 18.6662 L 21.9995 13.333 L 20.1195 11.453 L 18 13.5597 V 8 C 18 3.5866 14.413 0 10 0 C 5.5866 0 2 3.5866 2 8Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconUTurnRight;
