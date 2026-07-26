import React from "react";
import { withIcon } from "../../hoc";

const IconPanoramaHorizontalSelect = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 3.5032C8.11 3.5032 5.05 2.6632 3.31 2.0732C2.67 1.8532 2 2.3332 2 3.0232V17.0032C2 17.6832 2.66 18.1732 3.31 17.9532C5.36 17.2632 8.1 16.5032 12 16.5032C15.87 16.5032 18.66 17.2632 20.69 17.9532C21.34 18.1632 22 17.6832 22 17.0032V3.0032C22 2.3232 21.34 1.8332 20.69 2.0532C18.66 2.7332 15.86 3.5032 12 3.5032Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconPanoramaHorizontalSelect;
