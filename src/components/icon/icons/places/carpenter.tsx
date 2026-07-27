import React from "react";
import { withIcon } from "../../hoc";

const IconCarpenter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.87 14.493 L 7.378 2 L 3.56 5.817 L 11.539 17.27 C 10.773 18.035 10.773 19.282 11.539 20.047 L 12.922 21.431 C 13.688 22.196 14.934 22.196 15.7 21.431 L 19.861 17.27 C 20.636 16.504 20.636 15.258 19.87 14.493 Z M 6.112 6.043 L 7.378 4.777 L 15.71 13.109 L 12.952 15.867 L 6.112 6.043 Z M 14.316 20.037 L 12.932 18.654 L 17.093 14.493 L 18.477 15.876 L 14.316 20.037 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconCarpenter;
