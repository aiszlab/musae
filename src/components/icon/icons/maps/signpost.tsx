import React from "react";
import { withIcon } from "../../hoc";

const IconSignpost = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 13.2 9.6 H 19.2 L 22.8 6 L 19.2 2.4 H 13.2 V 0 H 10.8 V 2.4 H 2.4 V 9.6 H 10.8 V 12 H 4.8 L 1.2 15.6 L 4.8 19.2 H 10.8 V 24 H 13.2 V 19.2 H 21.6 V 12 H 13.2 V 9.6ZM 4.8 4.8 H 18.204 L 19.404 6 L 18.204 7.2 H 4.8 V 4.8ZM 19.2 16.8 H 5.796 L 4.596 15.6 L 5.796 14.4 H 19.2 V 16.8Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSignpost;
