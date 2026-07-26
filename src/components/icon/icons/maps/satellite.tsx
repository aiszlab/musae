import React from "react";
import { withIcon } from "../../hoc";

const IconSatellite = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.3328 0 H 2.6666 C 1.2 0 0 1.2 0 2.6666 V 21.3328 C 0 22.7994 1.2 23.9994 2.6666 23.9994 H 21.3328 C 22.7994 23.9994 23.9994 22.7994 23.9994 21.3328 V 2.6666 C 23.9994 1.2 22.7994 0 21.3328 0ZM 21.3328 21.3328 H 2.6666 V 2.6666 H 21.3328 V 21.3328ZM 7.4265 4 H 4 V 7.4398 C 5.8932 7.4398 7.4265 5.8932 7.4265 4ZM 12 4 H 9.7198 C 9.7198 7.1465 7.1598 9.7198 4 9.7198 V 12 C 8.4265 12 12 8.4131 12 4ZM 14.853 11.813 L 10.8531 16.9729 L 8 13.533 L 4 18.6662 H 19.9995 L 14.853 11.813Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSatellite;
