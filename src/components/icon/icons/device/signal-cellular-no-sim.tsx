import React from "react";
import { withIcon } from "../../hoc";

const IconSignalCellularNoSim = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.01 4.19H17.18V13.3L19.18 15.3V4.19C19.18 3.09 18.28 2.19 17.18 2.19H10.18L8.12 4.25L9.54 5.67L11.01 4.19ZM21.44 20.4L3.97 2.93L2.56 4.34L5.18 6.96V18.19C5.18 19.3 6.08 20.19 7.18 20.19H18.41L20.03 21.81L21.44 20.4ZM7.18 18.19V8.98L16.41 18.19H7.18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSignalCellularNoSim;
