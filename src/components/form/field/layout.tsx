import React, { type CSSProperties } from "react";
import { useContext, type ReactNode } from "react";
import type { ContextValue } from "../types";
import Context from "../context";
import { Grid } from "../../grid";
import * as stylex from "@stylexjs/stylex";
import { typography } from "../../theme/theme";
import { spacing } from "../../theme/tokens.stylex";
import { useTheme } from "../../theme";
import { ColorToken } from "../../../utils/colors";
import { clsx } from "@aiszlab/relax";
import { ComponentProps } from "../../../types/element";

const { Row, Col } = Grid;

const styles = stylex.create({
  space: {
    marginBlockEnd: spacing.xlarge,
  },

  required: (props: { color: CSSProperties["color"] }) => ({
    "::before": {
      content: '"*"',
      color: props.color,
      marginRight: spacing.xxsmall,
    },
  }),
});

/**
 * @description
 * layout props
 */
type Props = ComponentProps & {
  /**
   * @description
   * children
   */
  children: ReactNode;

  /**
   * @description
   * label for current input
   */
  label?: string;

  /**
   * @description
   * how many columns should the label take
   */
  labelCol?: ContextValue["labelCol"];

  /**
   * @description
   * how many columns should the input take
   */
  wrapperCol?: ContextValue["wrapperCol"];

  /**
   * @description
   * display required
   */
  required: boolean;

  /**
   * @description
   * if this item has margin space
   */
  space?: boolean;
};

/**
 * @description
 * item layout
 */
const Layout = ({ required, space, className, style, ...props }: Props) => {
  const contextValue = useContext(Context);
  const labelCol = props.labelCol ?? contextValue.labelCol;
  const wrapperCol = props.wrapperCol ?? contextValue.wrapperCol;
  const theme = useTheme();

  const styled = {
    item: stylex.props(!!space && styles.space),
    label: stylex.props(
      required &&
        styles.required({
          color: theme.colors[ColorToken.Error],
        }),
      typography.label.small,
    ),
  };

  const isLabeled = !!labelCol && !!props.label;
  const _className = clsx(className, styled.item.className);
  const _style = {
    ...styled.item.style,
    ...style,
  };

  if (!isLabeled) {
    return (
      <div className={_className} style={_style}>
        {props.children}
      </div>
    );
  }

  return (
    <Row gutter={[0, 8]} className={_className} style={_style}>
      {/* label */}
      <Col span={labelCol}>
        <span className={clsx(styled.label.className)} style={styled.label.style}>
          {props.label}
        </span>
      </Col>

      {/* input */}
      <Col span={wrapperCol}>{props.children}</Col>
    </Row>
  );
};

export default Layout;
