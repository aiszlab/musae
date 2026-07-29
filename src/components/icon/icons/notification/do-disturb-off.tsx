import React from "react";
import { withIcon } from "../../hoc";

const IconDoDisturbOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.5 3.5C16.91 3.5 20.5 7.09 20.5 11.5C20.5 12.91 20.13 14.23 19.49 15.38L20.95 16.84C21.93 15.29 22.5 13.46 22.5 11.5C22.5 5.98 18.02 1.5 12.5 1.5C10.54 1.5 8.71 2.07 7.17 3.05L8.63 4.51C9.77 3.87 11.09 3.5 12.5 3.5ZM17.5 10.5H14.62L16.62 12.5H17.5V10.5ZM2.91 1.63L1.5 3.04L4.28 5.82C3.16 7.43 2.5 9.39 2.5 11.5C2.5 17.02 6.98 21.5 12.5 21.5C14.61 21.5 16.57 20.84 18.18 19.72L20.96 22.5L22.37 21.09L2.91 1.63ZM12.5 19.5C8.09 19.5 4.5 15.91 4.5 11.5C4.5 9.94 4.95 8.5 5.73 7.27L8.96 10.5H7.5V12.5H10.96L16.73 18.27C15.5 19.05 14.06 19.5 12.5 19.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDoDisturbOff;
