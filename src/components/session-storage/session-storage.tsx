import React from "react";

interface SessionStorageProps {
  key: string;
  value: string;
}

const SessionStorage = ({ key, value }: SessionStorageProps) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `sessionStorage.setItem('${key}', '${value}')`,
      }}
    />
  );
};

export default SessionStorage;
