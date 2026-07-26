import React from "react";
import { withIcon } from "../../hoc";

const IconVolumeUp = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 9.00047V15.0005H7L12 20.0005V4.00047L7 9.00047H3ZM10 8.83047V15.1705L7.83 13.0005H5V11.0005H7.83L10 8.83047ZM16.5 12.0005C16.5 10.2305 15.48 8.71047 14 7.97047V16.0205C15.48 15.2905 16.5 13.7705 16.5 12.0005ZM14 3.23047V5.29047C16.89 6.15047 19 8.83047 19 12.0005C19 15.1705 16.89 17.8505 14 18.7105V20.7705C18.01 19.8605 21 16.2805 21 12.0005C21 7.72047 18.01 4.14047 14 3.23047Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVolumeUp;
