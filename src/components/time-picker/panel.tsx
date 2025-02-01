import React, {
  type CSSProperties,
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useState,
} from "react";
import { Clock } from "../clock";
import { Button } from "../button";
import type { PanelProps, PanelRef } from "musae/types/time-picker";
import type { ClockProps } from "musae/types/clock";
import dayjs from "dayjs";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { stringify } from "@aiszlab/relax/class-name";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useLocale } from "../../locale";
import { Context } from "./context";

const styles = stylex.create({
  panel: {
    marginInline: spacing.xxxxxsmall,
  },

  footer: (props: { borderTopColor: CSSProperties["borderTopColor"] }) => ({
    borderTopWidth: sizes.smallest,
    borderTopStyle: "solid",
    borderTopColor: props.borderTopColor,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBlock: spacing.xxxxxsmall,
    paddingInline: spacing.medium,
    minHeight: sizes.xlarge,
  }),
});

const Panel = forwardRef<PanelRef, PanelProps>((props, ref) => {
  const { classNames } = useContext(Context);
  const [value, setValue] = useState<ClockProps["value"]>();
  const theme = useTheme();
  const [locale] = useLocale("time-picker");

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
    panel: stylex.props(styles.panel),
    footer: stylex.props(
      styles.footer({
        borderTopColor: theme.colors["outline-variant"],
      }),
    ),
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
