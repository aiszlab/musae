import React from "react";
import { withIcon } from "../../hoc";

const IconNoDrinks = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.9 20.4796L3.51998 2.09961L2.09998 3.50961L10.33 11.7396L11.71 13.2896V18.2896H6.70998V20.2896H18.71V20.1196L20.49 21.8996L21.9 20.4796ZM13.71 18.2896V15.1196L16.88 18.2896H13.71ZM8.53998 4.28961L6.53998 2.28961H21.71V4.28961L15.51 11.2596L14.09 9.83961L15.48 8.28961H12.54L10.54 6.28961H17.28L19.06 4.28961H8.53998Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNoDrinks;
