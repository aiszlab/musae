import React from "react";
import { withIcon } from "../../hoc";

const AirlineSeatLegroomReduced = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21.411 20 C 21.611 21.067 20.8 22 19.778 22 L 14.778 22 L 14.778 18.667 L 15.889 14.222 L 9.222 14.222 C 7.389 14.222 5.889 12.722 5.889 10.889 L 5.889 2 L 12.556 2 L 12.556 8.667 L 18.111 8.667 C 19.333 8.667 20.333 9.667 20.333 10.889 L 18.111 18.667 L 19.711 18.667 C 20.522 18.667 21.256 19.211 21.411 20 Z M 4.778 12 L 4.778 2 L 2.556 2 L 2.556 12 C 2.556 15.067 5.044 17.556 8.111 17.556 L 12.556 17.556 L 12.556 15.333 L 8.111 15.333 C 6.267 15.333 4.778 13.844 4.778 12 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default AirlineSeatLegroomReduced;
