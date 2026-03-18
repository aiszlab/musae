import React from "react";
import { Tag } from "../tag";

type Props = {
  categories?: {
    label: string;
    children: {
      value: string;
      label: string;
    }[];
  }[];
};

const CategoryPicker = ({ categories = [] }: Props) => {
  if (categories.length === 0) {
    return null;
  }

  return (
    <div>
      {categories.map((categoty, index) => {
        return (
          <div key={index}>
            <span>{categoty.label}</span>

            {categoty.children.map((tag) => {
              return <Tag key={tag.value}>{tag.label}</Tag>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPicker;
