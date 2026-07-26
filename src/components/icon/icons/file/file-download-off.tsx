import React from "react";
import { withIcon } from "../../hoc";

const IconFileDownloadOff = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.71 14.4596V14.2896H20.71V16.4596L18.71 14.4596ZM16.12 11.8796L17.71 10.2896L16.3 8.87961L14.71 10.4596L16.12 11.8796ZM13.71 9.45961V3.28961H11.71V7.45961L13.71 9.45961ZM21.9 20.4796L3.52001 2.09961L2.10001 3.50961L8.29001 9.69961L7.71001 10.2896L12.71 15.2896L13.3 14.6996L15.88 17.2896H6.71001V14.2896H4.71001V17.2896C4.71001 18.3896 5.61001 19.2896 6.71001 19.2896H17.88L20.49 21.8996L21.9 20.4796Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFileDownloadOff;
