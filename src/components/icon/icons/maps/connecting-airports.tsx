import React from "react";
import { withIcon } from "../../hoc";

const IconConnectingAirports = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15.4 16.9996L16.7 21.3996H15.6L13 16.9996H10C9.45 16.9996 9 16.5496 9 15.9996C9 15.4496 9.45 14.9996 10 14.9996H13L15.6 10.5996H16.7L15.4 14.9996H18.25L19 13.9996H20L19.4 15.9996L20 17.9996H19L18.25 16.9996H15.4ZM5.75 6.99961L5 5.99961H4L4.6 7.99961L4 9.99961H5L5.75 8.99961H8.6L7.3 13.3996H8.4L11 8.99961H14C14.55 8.99961 15 8.54961 15 7.99961C15 7.44961 14.55 6.99961 14 6.99961H11L8.4 2.59961H7.3L8.6 6.99961H5.75Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconConnectingAirports;
