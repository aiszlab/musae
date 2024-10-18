import React, { useMemo } from "react";
import { useTransfer } from "./hooks";
import type { ContextValue, TransferProps } from "musae/types/transfer";
import List from "./list";
import stylex from "@stylexjs/stylex";
import { KeyboardArrowLeft, KeyboardArrowRight } from "musae/icons";
import { Button } from "../button";
import { spacing } from "../theme/tokens.stylex";
import { Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { TransferClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";

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

const Transfer = ({
  options,
  value,
  titles = [null, null],
  disabled = false,
  className,
  style,
}: TransferProps) => {
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

  const classNames = useClassNames("transfer");

  const styled = {
    transfer: stylex.props(styles.transfer),
    operation: stylex.props(styles.operation),
  };

  const contextValue = useMemo<ContextValue>(() => {
    return {
      disabled,
    };
  }, [disabled]);

  return (
    <Context.Provider value={contextValue}>
      <div
        className={clsx(
          classNames[TransferClassToken.Transfer],
          className,
          styled.transfer.className,
        )}
        style={{
          ...styled.transfer.style,
          ...style,
        }}
      >
        <List
          options={Array.from(untransferred.values())}
          title={titles[0]}
          value={transferKeys}
          onChange={setTransferKeys}
        />

        <div
          className={clsx(classNames[TransferClassToken.Operation], styled.operation.className)}
          style={styled.operation.style}
        >
          <Button
            shape="circular"
            size="small"
            onClick={transfer}
            disabled={disabled || transferKeys.length === 0}
          >
            <KeyboardArrowRight />
          </Button>

          <Button
            shape="circular"
            size="small"
            onClick={untransfer}
            disabled={disabled || untransferKeys.length === 0}
          >
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
    </Context.Provider>
  );
};

export default Transfer;
