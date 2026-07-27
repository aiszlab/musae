import React from "react";
import { withIcon } from "../../hoc";

const IconLocalPolice = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14.7271 12.6435 L 15.709 16.8762 L 12 14.6399 L 8.2908 16.8762 L 9.2726 12.6544 L 6 9.829 L 10.3199 9.4581 L 12 5.4763 L 13.6799 9.4472 L 18 9.8181 L 14.7271 12.6435ZM 12 2.3891 L 19.6362 5.7818 V 10.909 C 19.6362 15.8399 16.3853 20.3889 12 21.7416 C 7.6145 20.3889 4.3636 15.8399 4.3636 10.909 V 5.7818 L 12 2.3891ZM 12 0 L 2.1818 4.3636 V 10.909 C 2.1818 16.9635 6.3709 22.6253 12 24 C 17.6289 22.6253 21.818 16.9635 21.818 10.909 V 4.3636 L 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLocalPolice;
