import React from "react";
import { withIcon } from "../../hoc";

const IconSettingsEthernet = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7.77001 6.76047L6.23001 5.48047L0.820007 12.0005L6.23001 18.5205L7.77001 17.2405L3.42001 12.0005L7.77001 6.76047ZM7.00001 13.0005H9.00001V11.0005H7.00001V13.0005ZM17 11.0005H15V13.0005H17V11.0005ZM11 13.0005H13V11.0005H11V13.0005ZM17.77 5.48047L16.23 6.76047L20.58 12.0005L16.23 17.2405L17.77 18.5205L23.18 12.0005L17.77 5.48047Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconSettingsEthernet;
