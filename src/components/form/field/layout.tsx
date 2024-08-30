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
import clsx from "clsx";

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
type Props = {
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
const Layout = ({ required, space, ...props }: Props) => {
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

  return (
    <Row gutter={[0, 8]} className={styled.item.className} style={styled.item.style}>
      {/* label */}
      {!!labelCol && props.label && (
        <Col span={labelCol}>
          <span className={clsx(styled.label.className)} style={styled.label.style}>
            {props.label}
          </span>
        </Col>
      )}

      {/* input */}
      <Col span={wrapperCol}>{props.children}</Col>
    </Row>
  );
};

export default Layout;
