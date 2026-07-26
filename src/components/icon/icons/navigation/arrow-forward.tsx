import React from "react";
import { withIcon } from "../../hoc";

const IconArrowForward = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconArrowForward;
