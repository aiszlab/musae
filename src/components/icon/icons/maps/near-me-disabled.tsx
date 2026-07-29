import React from "react";
import { withIcon } from "../../hoc";

const IconNearMeDisabled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M11.295 7.04547L20.295 3.70547L16.955 12.7055L15.395 11.1455L16.895 7.09547L12.845 8.59547L11.295 7.04547ZM20.485 21.8955L15.415 16.8255L13.605 21.7055H12.195L9.36498 14.6355L2.29498 11.8055V10.3955L7.17498 8.58547L2.10498 3.51547L3.51498 2.10547L21.895 20.4855L20.485 21.8955ZM13.865 15.2755L8.72498 10.1355L6.01498 11.1455L10.905 13.0955L12.855 17.9855L13.865 15.2755Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconNearMeDisabled;
