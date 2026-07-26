import React from "react";
import { withIcon } from "../../hoc";

const IconRemoveRoad = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M 20.7568 0.3243 H 18.1622 V 12 H 20.7568 V 0.3243Z" fill="currentColor" />
      <path d="M 2.5946 0.3243 H 0 V 21.0811 H 2.5946 V 0.3243Z" fill="currentColor" />
      <path d="M 11.6757 0.3243 H 9.0811 V 5.5135 H 11.6757 V 0.3243Z" fill="currentColor" />
      <path d="M 11.6757 8.1081 H 9.0811 V 13.2973 H 11.6757 V 8.1081Z" fill="currentColor" />
      <path d="M 11.6757 15.8919 H 9.0811 V 21.0811 H 11.6757 V 15.8919Z" fill="currentColor" />
      <path
        d="M 24 16.4238 L 22.1709 14.5946 L 19.4595 17.306 L 16.7481 14.5946 L 14.9189 16.4238 L 17.6303 19.1351 L 14.9189 21.8465 L 16.7481 23.6757 L 19.4595 20.9643 L 22.1709 23.6757 L 24 21.8465 L 21.2887 19.1351 L 24 16.4238Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRemoveRoad;
