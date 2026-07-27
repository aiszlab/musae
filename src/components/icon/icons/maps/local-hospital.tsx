import React from "react";
import { withIcon } from "../../hoc";

const IconLocalHospital = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.3328 0 H 2.6666 C 1.2 0 0.0133 1.2 0.0133 2.6666 L 0 21.3328 C 0 22.7994 1.2 23.9994 2.6666 23.9994 H 21.3328 C 22.7994 23.9994 23.9994 22.7994 23.9994 21.3328 V 2.6666 C 23.9994 1.2 22.7994 0 21.3328 0ZM 21.3328 21.3328 H 2.6666 V 2.6666 H 21.3328 V 21.3328ZM 10 18.6662 H 14 V 14 H 18.6662 V 10 H 14 V 5.3332 H 10 V 10 H 5.3332 V 14 H 10 V 18.6662Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalHospital;
