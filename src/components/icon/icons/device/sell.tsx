import React from "react";
import { withIcon } from "../../hoc";

const IconSell = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.408 11.413L12.578 2.583C12.208 2.213 11.698 2.003 11.168 2.003H3.998C2.898 2.003 1.998 2.903 1.998 4.003V11.173C1.998 11.703 2.208 12.213 2.588 12.583L11.418 21.413C12.198 22.193 13.468 22.193 14.248 21.413L21.418 14.243C22.198 13.463 22.198 12.203 21.408 11.413ZM12.828 20.003L3.998 11.173V4.003H11.168L19.998 12.833L12.828 20.003Z"
        fill="currentColor"
      />
      <path
        d="M6.498 8.003C7.327 8.003 7.998 7.331 7.998 6.503C7.998 5.675 7.327 5.003 6.498 5.003C5.67 5.003 4.998 5.675 4.998 6.503C4.998 7.331 5.67 8.003 6.498 8.003Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSell;
