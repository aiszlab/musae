import React from "react";
import { withIcon } from "../../hoc";

const IconBluetoothAudio = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14.235 12.01 L 16.555 14.33 C 16.835 13.61 16.995 12.82 16.995 12 C 16.995 11.18 16.835 10.41 16.565 9.69 L 14.235 12.01 Z M 19.525 6.71 L 18.265 7.97 C 18.895 9.18 19.245 10.54 19.245 11.99 C 19.245 13.44 18.885 14.81 18.265 16.01 L 19.465 17.21 C 20.435 15.67 21.005 13.85 21.005 11.9 C 20.995 10.01 20.455 8.23 19.525 6.71 Z M 15.705 7.71 L 9.995 2 L 8.995 2 L 8.995 9.59 L 4.405 5 L 2.995 6.41 L 8.585 12 L 2.995 17.59 L 4.405 19 L 8.995 14.41 L 8.995 22 L 9.995 22 L 15.705 16.29 L 11.405 12 L 15.705 7.71 Z M 10.995 5.83 L 12.875 7.71 L 10.995 9.59 L 10.995 5.83 Z M 12.875 16.29 L 10.995 18.17 L 10.995 14.41 L 12.875 16.29 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBluetoothAudio;
