import React from "react";
import { withIcon } from "../../hoc";

const IconHotelClass = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.66 8.89L11.6 12H14.42L12.15 13.62L13.08 16.63L10.66 14.79L8.23997 16.63L9.16997 13.62L6.89997 12H9.71997L10.66 8.89ZM8.23997 10H0.659973L6.82997 14.41L4.48997 22L10.66 17.31L16.84 22L14.49 14.41L20.66 10H13.08L10.66 2L8.23997 10ZM21.02 22L19.16 15.99L23.34 13H19.9L16.82 15.2L18.28 19.92L21.02 22ZM16.66 8L14.84 2L13.8 5.45L14.57 8H16.66Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHotelClass;
