import React from "react";
import { withIcon } from "../../hoc";

const IconNightShelter = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 4.778 L 18.667 9.778 L 18.667 19.778 L 5.333 19.778 L 5.333 9.778 L 12 4.778 Z M 12 2 L 3.111 8.667 L 3.111 22 L 20.889 22 L 20.889 8.667 L 12 2 Z M 15.333 12 L 11.444 12 L 11.444 15.889 L 7.556 15.889 L 7.556 10.889 L 6.444 10.889 L 6.444 18.667 L 7.556 18.667 L 7.556 17 L 16.444 17 L 16.444 18.667 L 17.556 18.667 L 17.556 14.222 C 17.556 13 16.556 12 15.333 12 Z M 9.5 12.556 C 8.733 12.556 8.111 13.178 8.111 13.944 C 8.111 14.711 8.733 15.333 9.5 15.333 C 10.267 15.333 10.889 14.711 10.889 13.944 C 10.889 13.178 10.267 12.556 9.5 12.556 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNightShelter;
