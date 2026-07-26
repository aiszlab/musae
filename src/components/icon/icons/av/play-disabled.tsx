import React from "react";
import { withIcon } from "../../hoc";

const IconPlayDisabled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.165 12.9155L19.715 11.2955L8.715 4.29547V4.46547L17.165 12.9155Z"
        fill="currentColor"
      />
      <path
        d="M3.525 2.10547L2.105 3.51547L8.715 10.1255V18.2955L13.705 15.1155L20.485 21.8955L21.895 20.4855L3.525 2.10547ZM10.715 14.6555V12.1255L12.265 13.6755L10.715 14.6555Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPlayDisabled;
