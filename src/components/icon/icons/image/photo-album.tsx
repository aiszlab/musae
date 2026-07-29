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
        d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V4H11V11L13.5 9.5L16 11V4H18V20ZM13.62 13.5L17 18H7L9.38 14.83L11 17L13.62 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPhotoAlbum;
