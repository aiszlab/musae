import React from "react";
import { withIcon } from "../../hoc";

const LabelOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 7.18957L19.55 12.1896L17.92 14.4796L19.35 15.9096L22 12.1896L17.63 6.02957C17.27 5.51957 16.67 5.18957 16 5.18957L8.63 5.19957L10.63 7.18957H16ZM2 4.21957L3.58 5.79957C3.22 6.14957 3 6.64957 3 7.18957V17.1896C3 18.2896 3.9 19.1796 5 19.1796L16 19.1896C16.28 19.1896 16.55 19.1196 16.79 19.0096L18.97 21.1896L20.38 19.7796L3.41 2.80957L2 4.21957ZM14.97 17.1896H5V7.21957L14.97 17.1896Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default LabelOff;
