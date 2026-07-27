import React from "react";
import { withIcon } from "../../hoc";

const IconFolderOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.655 5.29453H12.655L10.655 3.29453H7.825L11.825 7.29453H20.655V16.4645L22.415 18.2245C22.565 17.9445 22.655 17.6345 22.655 17.2945V7.29453C22.655 6.19453 21.755 5.29453 20.655 5.29453Z"
        fill="currentColor"
      />
      <path
        d="M2.755 1.39453L1.345 2.80453L2.905 4.36453C2.755 4.64453 2.665 4.95453 2.665 5.29453L2.655 17.2945C2.655 18.3945 3.555 19.2945 4.655 19.2945H17.825L21.135 22.6045L22.545 21.1945L2.755 1.39453ZM4.655 17.2945V6.12453L15.825 17.2945H4.655Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFolderOff;
