import React, { type CSSProperties } from "react";
import { useContext, type ReactNode } from "react";
import type { ContextValue } from "./types";
import Context from "./context";
import { Grid } from "../grid";
import * as stylex from "@stylexjs/stylex";
import { LABEL } from "../theme/theme";
import { spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";

const styles = stylex.create({
  item: {
    marginBottom: spacing.xlarge,
  },

  required: (props: { color: CSSProperties["color"] }) => ({
    "::before": {
      content: '"*"',
      color: props.color,
      marginRight: spacing.xxsmall,
    },
  }),
});

const { Row, Col } = Grid;

/**
 * @description
 * item grid
 */
const Gridded = ({
  required,
  ...props
}: {
  children: ReactNode;
  label?: string;
  labelCol?: ContextValue["labelCol"];
  wrapperCol?: ContextValue["wrapperCol"];
  required: boolean;
}) => {
  const contextValue = useContext(Context);
  const labelCol = props.labelCol ?? contextValue.labelCol;
  const wrapperCol = props.wrapperCol ?? contextValue.wrapperCol;
  const theme = useTheme();

  const styled = {
    item: stylex.props(styles.item),
    label: stylex.props(
      required &&
        styles.required({
          color: theme.colors[ColorToken.Error],
        }),
      LABEL.small
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

export default Gridded;