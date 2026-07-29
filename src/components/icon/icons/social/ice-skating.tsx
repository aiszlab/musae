import React from "react";
import { withIcon } from "../../hoc";

const IconIceSkating = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20.5 16.5C20.5 18.16 19.16 19.5 17.5 19.5H15.5V17.5H18.5V13.5C18.5 11.71 17.31 10.16 15.59 9.68L12.97 8.94C12.12 8.69 11.5 7.89 11.5 7V2.5H2.5V17.5H5.5V19.5H1.5V21.5H17.5C20.26 21.5 22.5 19.26 22.5 16.5H20.5ZM4.5 15.5V4.5H9.5V5.5H8C7.72 5.5 7.5 5.72 7.5 6C7.5 6.28 7.72 6.5 8 6.5H9.5L9.6 7.5H8C7.72 7.5 7.5 7.72 7.5 8C7.5 8.28 7.72 8.5 8 8.5H9.81C10.26 9.62 11.21 10.51 12.41 10.86L15.03 11.59C15.9 11.83 16.5 12.6 16.5 13.5V15.5H4.5ZM13.5 19.5H7.5V17.5H13.5V19.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconIceSkating;
