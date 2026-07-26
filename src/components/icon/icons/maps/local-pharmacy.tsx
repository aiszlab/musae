import React from "react";
import { withIcon } from "../../hoc";

const IconLocalPharmacy = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22.8 4.8 H 19.632 L 21 1.032 L 18.18 0 L 16.428 4.8 H 1.2 V 7.2 L 3.6 14.4 L 1.2 21.6 V 24 H 22.8 V 21.6 L 20.4 14.4 L 22.8 7.2 V 4.8ZM 20.268 21.6 H 3.732 L 6.132 14.4 L 3.732 7.2 H 20.268 L 17.868 14.4 L 20.268 21.6ZM 13.2 9.6 H 10.8 V 13.2 H 7.2 V 15.6 H 10.8 V 19.2 H 13.2 V 15.6 H 16.8 V 13.2 H 13.2 V 9.6Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalPharmacy;
