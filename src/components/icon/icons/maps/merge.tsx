import React from "react";
import { withIcon } from "../../hoc";

const IconMerge = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 4.5467 23.9994 L 2.6667 22.1194 L 9.1065 15.6796 C 10.1065 14.6796 10.6665 13.3197 10.6665 11.9064 V 5.1065 L 8.5466 7.2132 L 6.6666 5.3332 L 12 0 L 17.333 5.3332 L 15.453 7.2132 L 13.3331 5.1065 V 11.9064 C 13.3331 13.3197 13.8931 14.6796 14.8931 15.6796 L 21.3329 22.1194 L 19.4529 23.9994 L 12 16.5463 L 4.5467 23.9994Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconMerge;
