import React from "react";
import { withIcon } from "../../hoc";

const IconSafetyCheck = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 0 L 2.4 3.6 V 10.908 C 2.4 16.968 6.492 22.62 12 24 C 17.508 22.62 21.6 16.968 21.6 10.908 V 3.6 L 12 0ZM 19.2 10.908 C 19.2 15.708 16.14 20.148 12 21.504 C 7.86 20.148 4.8 15.72 4.8 10.908 V 5.268 L 12 2.568 L 19.2 5.268 V 10.908ZM 12 6 C 8.688 6 6 8.688 6 12 C 6 15.312 8.688 18 12 18 C 15.312 18 18 15.312 18 12 C 18 8.688 15.312 6 12 6ZM 13.98 14.82 L 11.4 12.24 V 8.4 H 12.6 V 11.748 L 14.82 13.968 L 13.98 14.82Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSafetyCheck;
