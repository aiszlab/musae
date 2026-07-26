import React from "react";
import { withIcon } from "../../hoc";

const IconTerrain = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14.1817 5.4545 L 9.5781 11.5963 L 10.9417 13.4181 L 14.1817 9.0872 L 19.6362 16.3635 H 10.4072 L 6.0327 10.5054 L 0 18.5453 H 24 L 14.1817 5.4545ZM 4.3636 16.3635 L 6.0218 14.149 L 7.6799 16.3635 H 4.3636Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconTerrain;
