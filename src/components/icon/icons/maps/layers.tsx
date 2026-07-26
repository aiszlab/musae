import React from "react";
import { withIcon } from "../../hoc";

const IconLayers = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 11.9872 20.8156 L 2.7121 13.6044 L 0.6733 15.1901 L 12 24 L 23.3263 15.1901 L 21.2749 13.5918 L 11.9872 20.8156ZM 12 17.619 L 21.2624 10.4078 L 23.3263 8.8095 L 12 0 L 0.6733 8.8095 L 2.7247 10.4078 L 12 17.619ZM 12 3.184 L 19.2236 8.8095 L 12 14.435 L 4.776 8.8095 L 12 3.184Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLayers;
