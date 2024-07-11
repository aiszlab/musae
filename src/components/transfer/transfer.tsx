import React from "react";
import { useTransfer } from "./hooks";
import type { TransferProps } from "./types";
import List from "./list";
import stylex from "@stylexjs/stylex";
import { KeyboardArrowLeft, KeyboardArrowRight } from "../icon/icons";

const styles = stylex.create({
  transfer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  operation: {},
});

const Transfer = (props: TransferProps) => {
  const { transfered, untransfered } = useTransfer({ options: props.options, value: props.value });

  const styled = {
    transfer: stylex.props(styles.transfer),
    operation: stylex.props(styles.operation),
  };

  return (
    <div className={styled.transfer.className} style={styled.transfer.style}>
      <List options={Array.from(untransfered.values())} />
      <div className={styled.operation.className} style={styled.operation.style}>
        <KeyboardArrowLeft />
        <KeyboardArrowRight />
      </div>
      <List options={Array.from(transfered.values())} />
    </div>
  );
};

export default Transfer;
