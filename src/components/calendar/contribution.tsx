import dayjs from "dayjs";
import React, { type CSSProperties, useMemo } from "react";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { Tooltip } from "../tooltip";

const styles = {
  calendar: stylex.create({
    variables: (props: { color: CSSProperties["color"] }) => ({
      "--cell-size": `calc(${sizes.xxsmall} / 2)`,
      "--cell-color": props.color,
    }),

    default: {
      borderCollapse: "separate",
      borderSpacing: spacing.xxsmall,
    },
  }),

  cell: stylex.create({
    default: {
      width: "var(--cell-size)",
      height: "var(--cell-size)",
      padding: 0,
      borderRadius: sizes.xxxxxxsmall,
      cursor: "pointer",
      backgroundColor: "var(--cell-color)",
    },
  }),

  weekday: stylex.create({
    cell: {
      padding: 0,
    },

    default: {
      height: "var(--cell-size)",
      overflow: "visible",
      display: "flex",
      alignItems: "center",
    },
  }),
};

interface Props {
  year: number;
}

/**
 * @description
 * contribution calendar
 * inspired by github
 */
const ContributionCalendar = ({ year }: Props) => {
  const theme = useTheme();

  const [from, to] = useMemo(() => {
    const yearAt = dayjs().year();
    if (yearAt === year) {
      return [dayjs().subtract(1, "year").subtract(1, "day"), dayjs().startOf("day")];
    }
    return [dayjs(`${year}-01-01`), dayjs(`${year}-12-31`)];
  }, [year]);

  const columns = useMemo(() => {
    return to.diff(from, "week") + 1;
  }, [from, to]);

  const styled = {
    calendar: stylex.props(
      styles.calendar.variables({ color: theme.colors.primary }),
      styles.calendar.default,
    ),
    cell: stylex.props(styles.cell.default),
    weekday: {
      cell: stylex.props(styles.weekday.cell, typography.body.small),
      default: stylex.props(styles.weekday.default),
    },
  };

  return (
    <table className={styled.calendar.className} style={styled.calendar.style}>
      <thead>{/* <td className={styled.label.className} style={styled.label.style}></td> */}</thead>
      <tbody>
        {Array.from({ length: 7 }).map((_, weekday) => {
          return (
            <tr key={weekday}>
              <td className={styled.weekday.cell.className} style={styled.weekday.cell.style}>
                <div
                  className={styled.weekday.default.className}
                  style={styled.weekday.default.style}
                >
                  <span>
                    {weekday === 1 && "Mon"}
                    {weekday === 3 && "Wed"}
                    {weekday === 5 && "Fri"}
                  </span>
                </div>
              </td>
              {Array.from({ length: columns }).map((_, column) => {
                return (
                  <Tooltip key={column} title={`14 contributions in ${column}`}>
                    <td className={styled.cell.className} style={styled.cell.style} />
                  </Tooltip>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContributionCalendar;
