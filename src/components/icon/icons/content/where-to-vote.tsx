import React from "react";
import { withIcon } from "../../hoc";

const IconWhereToVote = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 0.754883C7.59 0.754883 4 4.34488 4 8.75488C4 14.3249 10.96 22.0949 11.26 22.4249L12 23.2449L12.74 22.4249C13.04 22.0949 20 14.3249 20 8.75488C20 4.34488 16.41 0.754883 12 0.754883ZM12 20.2249C9.82 17.6149 6 12.2949 6 8.75488C6 5.44488 8.69 2.75488 12 2.75488C15.31 2.75488 18 5.44488 18 8.75488C18 12.5849 13.75 18.1149 12 20.2249ZM10.47 10.9249L8.71 9.15488L7.29 10.5749L10.47 13.7549L16.48 7.74488L15.07 6.32488L10.47 10.9249Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWhereToVote;
