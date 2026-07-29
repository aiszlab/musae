import React from "react";
import { withIcon } from "../../hoc";

const IconOpenInNewOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.505 5.08961L14.715 2.28961H21.715V9.28961L18.925 6.48961L14.835 10.5796L13.425 9.16961L17.505 5.08961ZM19.715 11.2896V15.4596L21.715 17.4596V11.2896H19.715ZM20.495 21.8996L18.885 20.2896H5.71498C4.60498 20.2896 3.71498 19.3896 3.71498 18.2896V5.11961L2.10498 3.50961L3.51498 2.09961L21.895 20.4796L20.495 21.8996ZM16.885 18.2896L12.005 13.4096L10.415 14.9996L9.00498 13.5896L10.595 11.9996L5.71498 7.11961V18.2896H16.885ZM8.54498 4.28961H12.715V2.28961H6.54498L8.54498 4.28961Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconOpenInNewOff;
