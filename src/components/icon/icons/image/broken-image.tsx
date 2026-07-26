import React from "react";
import { withIcon } from "../../hoc";

const IconBrokenImage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.9998 2.9998H4.9998C3.8998 2.9998 2.9998 3.8998 2.9998 4.9998V18.9998C2.9998 20.0998 3.8998 20.9998 4.9998 20.9998H18.9998C20.0998 20.9998 20.9998 20.0998 20.9998 18.9998V4.9998C20.9998 3.8998 20.0998 2.9998 18.9998 2.9998ZM18.9998 18.9998H4.9998V14.4198L5.9898 15.4098L9.9898 11.4098L13.9898 15.4098L17.9898 11.4198L18.9998 12.4298V18.9998ZM18.9998 9.5898L17.9898 8.5798L13.9898 12.5898L9.9898 8.5898L5.9898 12.5898L4.9998 11.5898V4.9998H18.9998V9.5898Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconBrokenImage;
