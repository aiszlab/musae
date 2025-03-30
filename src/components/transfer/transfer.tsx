import React, { useMemo } from "react";
import { useTransfer } from "./hooks";
import type { TransferProps } from "../../types/transfer";
import List from "./list";
import { $create, $props } from "../../utils/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "musae/icons";
import { spacing } from "../theme/tokens.stylex";
import { CLASS_NAMES, Context } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { IconButton } from "../icon-button";
import { at } from "@aiszlab/relax";

const styles = $create({
  transfer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    gap: spacing.xxsmall,
  },

  operation: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxsmall,
    alignSelf: "center",
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

  const classNames = useClassNames(CLASS_NAMES);

  const styled = {
    transfer: $props(styles.transfer),
    operation: $props(styles.operation),
  };

  const contextValue = useMemo(() => {
    return {
      disabled,
      classNames,
    };
  }, [disabled, classNames]);

  return (
    <Context.Provider value={contextValue}>
      <div
        className={stringify(classNames.transfer, className, styled.transfer.className)}
        style={{
          ...styled.transfer.style,
          ...style,
        }}
      >
        <List
          options={Array.from(untransferred.values())}
          title={at(titles, 0)}
          value={transferKeys}
          onChange={setTransferKeys}
        />

        <div
          className={stringify(classNames.operation, styled.operation.className)}
          style={styled.operation.style}
        >
          <IconButton
            size="small"
            onClick={transfer}
            disabled={disabled || transferKeys.length === 0}
          >
            <KeyboardArrowRight />
          </IconButton>

          <IconButton
            size="small"
            onClick={untransfer}
            disabled={disabled || untransferKeys.length === 0}
          >
            <KeyboardArrowLeft />
          </IconButton>
        </div>

        <List
          options={Array.from(transferred.values())}
          title={at(titles, 1)}
          value={untransferKeys}
          onChange={setUntransferKeys}
        />
      </div>
    </Context.Provider>
  );
};

export default Transfer;
