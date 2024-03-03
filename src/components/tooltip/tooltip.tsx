import { TooltipProps } from "./types";
import React, { CSSProperties, MouseEventHandler, cloneElement, useRef } from "react";
import { Popper } from "../popper";
import { chain, useBoolean, useRefs } from "@aiszlab/relax";
import * as stylex from "@stylexjs/stylex";
import { elevations, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { typography } from "../theme/theme";

const styles = stylex.create({
  tooltip: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    boxShadow: elevations.xsmall,
    backgroundColor: props.backgroundColor,
    borderRadius: sizes.xxsmall,
    padding: spacing.xxsmall,
    marginTop: spacing.xxsmall,
  }),
});

const Tooltip = (props: TooltipProps) => {
  const _ref = useRef<Element>(null);
  const childRef = useRefs(_ref, props.children.props.ref);
  const [isVisible, { turnOn: open, turnOff: close }] = useBoolean(false);
  const theme = useTheme();

  const hover: MouseEventHandler = (e) => {
    open();
  };
  const leave: MouseEventHandler = () => {
    close();
  };

  const children = cloneElement(props.children, {
    ref: childRef,
    onMouseOver: chain(hover, props.children.props.onMouseOver),
    onMouseLeave: chain(leave, props.children.props.onMouseLeave),
  });

  const styled = {
    tooltip: stylex.props(
      typography.body.medium,
      styles.tooltip({ backgroundColor: theme.colors[ColorToken.SurfaceContainer] })
    ),
  };

  return (
    <>
      {children}
      <Popper trigger={_ref.current} open={isVisible}>
        <div className={styled.tooltip.className} style={styled.tooltip.style}>
          {props.title}
        </div>
      </Popper>
    </>
  );
};

export default Tooltip;
