import React from "react";
import type { TransferListProps } from "./types";

const List = ({ options }: TransferListProps) => {
  return (
    <div>
      <ul>
        {options.map((option) => {
          return <li key={option.value}>{option.label}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
