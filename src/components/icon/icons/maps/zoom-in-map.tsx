import React from "react";
import { withIcon } from "../../hoc";

const IconZoomInMap = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 8.2108 8.2108 V 0.6316 H 5.6844 V 3.9033 L 1.7811 0 L 0 1.7811 L 3.9033 5.6844 H 0.6316 V 8.2108 H 8.2108ZM 23.3692 8.2108 V 5.6844 H 20.0975 L 24.0008 1.7811 L 22.2197 0 L 18.3164 3.9033 V 0.6316 H 15.79 V 8.2108 H 23.3692ZM 0.6316 15.79 V 18.3164 H 3.9033 L 0 22.2197 L 1.7811 24.0008 L 5.6844 20.0975 V 23.3692 H 8.2108 V 15.79 H 0.6316ZM 15.79 15.79 V 23.3692 H 18.3164 V 20.0975 L 22.2197 24.0008 L 24.0008 22.2197 L 20.0975 18.3164 H 23.3692 V 15.79 H 15.79Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconZoomInMap;
