import React from "react";
import { withIcon } from "../../hoc";

const IconRamenDining = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.192 14.4 C 20.4 16.704 18.504 18.648 15.912 19.668 L 14.4 20.268 V 21.6 H 9.6 V 20.268 L 8.076 19.668 C 5.484 18.648 3.588 16.704 2.796 14.4 H 21.192ZM 24 0 L 2.4 2.388 V 12 H 0 C 0 16.428 2.964 20.232 7.2 21.9 V 24 H 16.8 V 21.9 C 21.036 20.232 24 16.428 24 12 H 10.2 V 7.2 H 24 V 5.4 H 10.2 V 3.336 L 24 1.812 V 0ZM 7.2 5.4 V 3.672 L 8.4 3.54 V 5.4 H 7.2ZM 4.2 5.4 V 4.008 L 5.4 3.876 V 5.4 H 4.2ZM 7.2 12 V 7.2 H 8.4 V 12 H 7.2ZM 4.2 12 V 7.2 H 5.4 V 12 H 4.2Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRamenDining;
