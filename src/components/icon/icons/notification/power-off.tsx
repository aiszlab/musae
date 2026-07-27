import React from "react";
import { withIcon } from "../../hoc";

const IconPowerOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 10.12 2 L 8.014 2 L 8.014 3.98 L 10.12 6.086 L 10.12 2 Z M 16.439 8.319 L 16.439 12.405 L 18.335 14.301 L 18.546 14.091 L 18.546 8.319 C 18.546 7.161 17.598 6.213 16.439 6.213 L 16.439 2 L 14.333 2 L 14.333 6.213 L 10.246 6.213 L 12.353 8.319 L 16.439 8.319 Z M 3.927 2.885 L 2.442 4.37 L 5.907 7.835 L 5.907 14.112 L 9.593 17.798 L 9.593 20.957 L 14.859 20.957 L 14.859 17.798 L 15.365 17.292 L 20.073 22 L 21.558 20.515 L 3.927 2.885 Z M 12.753 16.924 L 12.753 18.851 L 11.7 18.851 L 11.7 16.924 L 8.014 13.216 L 8.014 9.941 L 13.88 15.807 L 12.753 16.924 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPowerOff;
