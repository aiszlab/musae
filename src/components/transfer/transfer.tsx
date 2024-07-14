import React from "react";
import { useTransfer } from "./hooks";
import type { TransferProps } from "./types";
import List from "./list";
import stylex from "@stylexjs/stylex";
import { KeyboardArrowLeft, KeyboardArrowRight } from "../icon/icons";
import { Button } from "../button";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  transfer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.small,
  },

  operation: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.small,
  },
});

const Transfer = ({ options, value, titles = [null, null] }: TransferProps) => {
  const {
    transferred,
    untransferred,
    transfer,
    untransfer,
    transferKeys,
    untransferKeys,
    setTransferKeys,
    setUntransferKeys,
  } = useTransfer({
    options,
    value,
  });

  const styled = {
    transfer: stylex.props(styles.transfer),
    operation: stylex.props(styles.operation),
  };

  return (
    <div className={styled.transfer.className} style={styled.transfer.style}>
      <List
        options={Array.from(untransferred.values())}
        title={titles[0]}
        value={transferKeys}
        onChange={setTransferKeys}
      />
      <div className={styled.operation.className} style={styled.operation.style}>
        <Button shape="circular" size="small" onClick={transfer} disabled={transferKeys.length === 0}>
          <KeyboardArrowRight />
        </Button>

        <Button shape="circular" size="small" onClick={untransfer} disabled={untransferKeys.length === 0}>
          <KeyboardArrowLeft />
        </Button>
      </div>
      <List
        options={Array.from(transferred.values())}
        title={titles[1]}
        value={untransferKeys}
        onChange={setUntransferKeys}
      />
    </div>
  );
};

export default Transfer;
