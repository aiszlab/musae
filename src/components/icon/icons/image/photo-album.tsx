import React from "react";
import { withIcon } from "../../hoc";

const IconPhotoAlbum = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2ZM16 20H4V4H9V11L11.5 9.5L14 11V4H16V20ZM11.62 13.5L15 18H5L7.38 14.83L9 17L11.62 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPhotoAlbum;
