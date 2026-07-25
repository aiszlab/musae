import React from "react";
import { withIcon } from "../../hoc";

const CodeOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.475 11.2896L14.895 6.69961L16.305 5.28961L22.305 11.2896L18.715 14.8796L17.305 13.4596L19.475 11.2896ZM1.69501 3.50961L5.88501 7.69961L2.30501 11.2896L8.30501 17.2896L9.71501 15.8796L5.13501 11.2896L7.30501 9.11961L20.085 21.8996L21.495 20.4896L3.11501 2.09961L1.69501 3.50961Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default CodeOff;
