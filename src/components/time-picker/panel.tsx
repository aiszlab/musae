import React, { forwardRef, useCallback, useContext, useImperativeHandle, useState } from "react";
import { Clock } from "../clock";
import { Button } from "../button";
import type { PanelProps, PanelRef } from "../../types/time-picker";
import type { ClockProps } from "../../types/clock";
import dayjs from "dayjs";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useLocale } from "../../locale";
import { Context } from "./context";
import { type ThemeColorVariable, useThemeColorVars } from "../../hooks/use-theme-color-vars";

const styles = $create({
  panel: {
    marginInline: spacing.xxxxxsmall,
  },

  footer: {
    borderTopWidth: sizes.smallest,
    borderTopStyle: "solid",
    borderTopColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBlock: spacing.xxxxxsmall,
    paddingInline: spacing.medium,
    minHeight: sizes.xlarge,
  },
});

const Panel = forwardRef<PanelRef, PanelProps>((props, ref) => {
  const { classNames } = useContext(Context);
  const [value, setValue] = useState<ClockProps["value"]>();
  const [locale] = useLocale("time-picker");
  const _themeColorVars = useThemeColorVars(["outline-variant"]);

  useImperativeHandle(ref, () => {
    return {
      reset: () => {
        if (!props.value) {
          setValue(void 0);
          return;
        }
        setValue([props.value.hour(), props.value.minute(), props.value.second()]);
      },
    };
  });

  const change = useCallback<Required<ClockProps>["onChange"]>((value) => {
    setValue(value);
  }, []);

  const confirm = useCallback(() => {
    if (!value) return;
    props.onChange?.(dayjs().hour(value[0]).minute(value[1]).second(value[2]));
  }, [props, value]);

  const reset = useCallback(() => {
    const currentAt = dayjs();
    setValue([currentAt.hour(), currentAt.minute(), currentAt.second()]);
  }, []);

  const styled = {
    panel: $props(styles.panel),
    footer: $props(styles.footer),
  };

  return (
    <div className={stringify(classNames.panel, styled.panel.className)} style={styled.panel.style}>
      <Clock value={value} onChange={change} />

      <div
        className={stringify(classNames.panelFooter, styled.footer.className)}
        style={styled.footer.style}
      >
        <Button variant="text" size="small" color="secondary" onClick={reset}>
          {locale.now}
        </Button>
        <Button variant="text" size="small" color="primary" onClick={confirm} disabled={!value}>
          {locale.confirm}
        </Button>
      </div>
    </div>
  );
});

export default Panel;
