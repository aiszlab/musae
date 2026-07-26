import React from "react";
import { withIcon } from "../../hoc";

const IconEdit = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.0584 9.0184L14.9784 9.9384L5.9184 18.9984H4.9984V18.0784L14.0584 9.0184ZM17.6584 2.9984C17.4084 2.9984 17.1484 3.0984 16.9584 3.2884L15.1284 5.1184L18.8784 8.8684L20.7084 7.0384C21.0984 6.6484 21.0984 6.0184 20.7084 5.6284L18.3684 3.2884C18.1684 3.0884 17.9184 2.9984 17.6584 2.9984ZM14.0584 6.1884L2.9984 17.2484V20.9984H6.7484L17.8084 9.9384L14.0584 6.1884Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEdit;
