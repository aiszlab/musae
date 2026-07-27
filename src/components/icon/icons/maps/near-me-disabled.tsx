import React from "react";
import { withIcon } from "../../hoc";

const IconNearMeDisabled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 11.1447 5.9907 L 22.059 1.9403 L 18.0086 12.8546 L 16.1168 10.9628 L 17.9358 6.0514 L 13.0244 7.8704 L 11.1447 5.9907ZM 22.2894 23.9993 L 16.141 17.8509 L 13.946 23.7689 H 12.2361 L 8.8042 15.1951 L 0.2304 11.7632 V 10.0533 L 6.1484 7.8583 L 0 1.7099 L 1.7099 0 L 23.9993 22.2894 L 22.2894 23.9993ZM 14.2614 15.9713 L 8.0281 9.738 L 4.7417 10.9628 L 10.6718 13.3276 L 13.0365 19.2577 L 14.2614 15.9713Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNearMeDisabled;
