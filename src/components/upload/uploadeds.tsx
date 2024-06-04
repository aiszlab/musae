import React, { forwardRef, useImperativeHandle, useState } from "react";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { UploadedsRef } from "./types";
import { Loading } from "../icon/icons";

const styles = stylex.create({
  uploadeds: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xsmall,
  },
});

const Uploadeds = forwardRef<UploadedsRef>((props, ref) => {
  const [items, setItems] = useState(new Map<string, File>());

  useImperativeHandle(ref, () => {
    return {
      add: (file: File) => {
        setItems((items) => {
          const id = file.name;
          return new Map(items).set(id, file);
        });
      },
    };
  });

  const styled = {
    uploadeds: stylex.props(styles.uploadeds),
  };

  return (
    <div className={styled.uploadeds.className} style={styled.uploadeds.style}>
      {Array.from(items.entries()).map(([key, item]) => {
        return (
          <div key={key}>
            <span>
              <Loading />
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
});

export default Uploadeds;
