import React from "react";
import { withIcon } from "../../hoc";

const IconWidgets = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 5.175L18.83 8.005L16 10.835L13.17 8.005L16 5.175ZM8.34 5.655V9.655H4.34V5.655H8.34ZM18.34 15.655V19.655H14.34V15.655H18.34ZM8.34 15.655V19.655H4.34V15.655H8.34ZM16 2.345L10.34 7.995L16 13.655L21.66 7.995L16 2.345ZM10.34 3.655H2.34V11.655H10.34V3.655ZM20.34 13.655H12.34V21.655H20.34V13.655ZM10.34 13.655H2.34V21.655H10.34V13.655Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWidgets;
