import React from "react";
import { withIcon } from "../../hoc";

const IconLight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 13.111 5.4 L 13.111 2 L 10.889 2 L 10.889 5.4 C 5.889 5.956 2 10.189 2 15.322 C 2 16.556 3 17.556 4.233 17.556 L 7.556 17.556 C 7.556 20.011 9.544 22 12 22 C 14.456 22 16.444 20.011 16.444 17.556 L 19.767 17.556 C 21 17.556 22 16.556 22 15.322 C 22 10.189 18.111 5.956 13.111 5.4 Z M 12 19.778 C 10.778 19.778 9.778 18.778 9.778 17.556 L 14.222 17.556 C 14.222 18.778 13.222 19.778 12 19.778 Z M 4.222 15.333 C 4.222 11.044 7.711 7.556 12 7.556 C 16.289 7.556 19.778 11.044 19.778 15.333 L 4.222 15.333 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconLight;
