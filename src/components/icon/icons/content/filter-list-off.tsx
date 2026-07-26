import React from "react";
import { withIcon } from "../../hoc";

const IconFilterListOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.545 7.29547H21.715V5.29547H9.545L11.545 7.29547ZM16.545 12.2955H18.715V10.2955H14.545L16.545 12.2955ZM14.715 16.1255V17.2955H10.715V15.2955H13.885L10.885 12.2955H6.715V10.2955H8.885L5.885 7.29547H3.715V5.29547H3.885L2.105 3.51547L3.515 2.10547L21.895 20.4855L20.485 21.8955L14.715 16.1255Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFilterListOff;
