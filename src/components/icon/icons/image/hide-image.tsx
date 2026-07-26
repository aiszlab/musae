import React from "react";
import { withIcon } from "../../hoc";

const IconHideImage = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.7098 4.2898V15.4598L21.7098 17.4598V4.2898C21.7098 3.1898 20.8098 2.2898 19.7098 2.2898H6.5398L8.5398 4.2898H19.7098Z"
        fill="currentColor"
      />
      <path
        d="M3.5198 2.0998L2.0998 3.5098L3.7098 5.1198V18.2898C3.7098 19.3898 4.6098 20.2898 5.7098 20.2898H18.8798L20.4898 21.8998L21.8998 20.4898L3.5198 2.0998ZM5.7098 18.2898V7.1198L12.7798 14.1898L11.9598 15.2898L9.7098 12.2898L6.7098 16.2898H14.8798L16.8798 18.2898H5.7098Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconHideImage;
