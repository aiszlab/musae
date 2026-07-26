import React from "react";
import { withIcon } from "../../hoc";

const IconRoundaboutLeft = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 9.696 7.2 C 10.272 3.792 13.224 1.2 16.8 1.2 C 20.772 1.2 24 4.428 24 8.4 C 24 11.964 21.408 14.928 18 15.504 V 22.8 H 15.6 V 15.492 C 15.6 14.316 16.452 13.332 17.604 13.128 C 19.872 12.756 21.6 10.776 21.6 8.4 C 21.6 5.748 19.452 3.6 16.8 3.6 C 14.424 3.6 12.444 5.328 12.072 7.596 C 11.868 8.748 10.884 9.6 9.708 9.6 H 4.596 L 6.504 11.508 L 4.8 13.2 L 0 8.4 L 4.8 3.6 L 6.492 5.292 L 4.596 7.2 H 9.696Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRoundaboutLeft;
