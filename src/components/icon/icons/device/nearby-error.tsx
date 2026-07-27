import React from "react";
import { withIcon } from "../../hoc";

const IconNearbyError = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.0025 7.572L16.4225 11.992L12.0025 16.412L7.5825 11.992L12.0025 7.572ZM12.0025 19.192L4.8025 11.992L12.0025 4.792L18.0025 10.792V7.162L13.4225 2.582C12.6425 1.802 11.3725 1.802 10.5925 2.582L2.5825 10.582C1.8025 11.362 1.8025 12.632 2.5825 13.412L10.5925 21.412C11.3725 22.192 12.6425 22.192 13.4225 21.412L18.0025 16.822V13.192L12.0025 19.192ZM20.0025 20.002H22.0025V22.002H20.0025V20.002ZM22.0025 10.002H20.0025V18.002H22.0025V10.002Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNearbyError;
