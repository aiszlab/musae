import React from "react";
import { withIcon } from "../../hoc";

const IconFilterAltOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.66 5.28961L14.09 9.83961L15.52 11.2696C16.55 9.95961 20.5 4.89961 20.5 4.89961C21.01 4.23961 20.54 3.28961 19.71 3.28961H7.53998L9.53998 5.28961H17.66Z"
        fill="currentColor"
      />
      <path
        d="M3.51998 2.09961L2.09998 3.50961L10.71 12.2896V18.2896C10.71 18.8396 11.16 19.2896 11.71 19.2896H13.71C14.26 19.2896 14.71 18.8396 14.71 18.2896V16.1196L20.49 21.8996L21.9 20.4896L3.51998 2.09961Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFilterAltOff;
