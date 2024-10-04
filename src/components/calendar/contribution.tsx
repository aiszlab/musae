import dayjs from "dayjs";
import React, { type CSSProperties, useMemo } from "react";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { Tooltip } from "../tooltip";
import { min } from "@aiszlab/relax";
import { firstSundayInMonth } from "../../utils/date";

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

    scrollable: {
      maxWidth: "100%",
      overflow: "auto",
    },
  }),

  cell: stylex.create({
    default: {
      minWidth: "var(--cell-size)",
      minHeight: "var(--cell-size)",
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

  month: stylex.create({
    cell: {
      padding: 0,
      position: "relative",
    },

    leading: {
      visibility: "hidden",
    },

    default: {
      position: "absolute",
      insetBlockStart: 0,
      insetInlineStart: 0,
    },
  }),
};

interface Props {
  year: number;
  gaps?: number[];
  dataSource?: [string, number][];
}

/**
 * @description
 * contribution calendar
 * inspired by github
 */
const ContributionCalendar = ({ year, gaps = [5, 10, 15], dataSource = [] }: Props) => {
  const theme = useTheme();

  const [from, to] = useMemo(() => {
    const _to = min([dayjs().subtract(1, "day"), dayjs(`${year}-12-31`)], (_value) =>
      _value.valueOf(),
    );
    const _from = _to.subtract(1, "year").add(1, "day");
    return [_from, _to];
  }, [year]);

  const [start, end] = useMemo(() => {
    return [from.startOf("week"), to.endOf("week")];
  }, [from, to]);

  const columns = useMemo(() => {
    return end.diff(start, "week") + 1;
  }, [start, end]);

  const months = useMemo(() => {
    return Array.from({ length: 13 }).reduce<{ start: number; end: number; month: string }[]>(
      (prev, _, monthAt: number) => {
        const _month = from.clone().add(monthAt, "month");
        const _from = monthAt > 0 ? firstSundayInMonth(_month) : _month.startOf("month");
        const _to = _from.clone().endOf("month");

        prev.push({
          start: Math.max(_from.diff(start, "week"), 0),
          end: Math.min(_to.diff(start, "week") + 1, columns),
          month: _from.format("MMM"),
        });

        return prev;
      },
      [],
    );
  }, [from, start, columns]);

  const heats = useMemo(() => {
    return dataSource.reduce<Map<string, number>>((prev, [date, count]) => {
      return prev.set(date, count);
    }, new Map());
  }, [dataSource]);

  const styled = {
    scrollable: stylex.props(styles.calendar.scrollable),
    calendar: stylex.props(
      styles.calendar.variables({ color: theme.colors.primary }),
      styles.calendar.default,
    ),
    cell: stylex.props(styles.cell.default),
    weekday: {
      cell: stylex.props(styles.weekday.cell, typography.body.small),
      default: stylex.props(styles.weekday.default),
    },
    month: {
      cell: stylex.props(styles.month.cell, typography.body.small),
      default: stylex.props(styles.month.default),
      leading: stylex.props(styles.month.cell, typography.body.small, styles.month.leading),
    },
  };

  return (
    <div className={styled.scrollable.className} style={styled.scrollable.style}>
      <table className={styled.calendar.className} style={styled.calendar.style}>
        <thead>
          <tr>
            <th className={styled.month.leading.className} style={styled.month.leading.style}>
              W/M
            </th>
            {months.map(({ start, end, month }, _key, _months) => {
              const colSpan = end - start;

              if (colSpan === 0) return null;

              // render headers
              // if col span is less than 2, skip render label
              // ISSUE: if leading month has rendered, the trailing month will be rendered twice
              const skip =
                colSpan < 2 ||
                (_months.length - 1 === _key && _months[0].end - _months[0].start >= 2);

              return (
                <th
                  key={_key}
                  colSpan={colSpan}
                  className={styled.month.cell.className}
                  style={styled.month.cell.style}
                >
                  {!skip && (
                    <div
                      className={styled.month.default.className}
                      style={styled.month.default.style}
                    >
                      {month}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 7 }).map((_, weekday) => {
            return (
              <tr key={weekday}>
                <td className={styled.weekday.cell.className} style={styled.weekday.cell.style}>
                  <div
                    className={styled.weekday.default.className}
                    style={styled.weekday.default.style}
                  >
                    {[1, 3, 5].includes(weekday) && (
                      <span>{dayjs().day(weekday).format("ddd")}</span>
                    )}
                  </div>
                </td>
                {Array.from({ length: columns }).map((_, column) => {
                  const gap = column * 7 + weekday;
                  const _at = start.add(gap, "day");

                  if (column === 0 && !_at.isAfter(from)) {
                    return <td key={column} />;
                  }

                  if (column === columns - 1 && _at.isAfter(to)) {
                    return <td key={column} />;
                  }

                  const date = _at.format("YYYY-MM-DD");
                  const count = heats.get(date);

                  return (
                    <Tooltip
                      key={column}
                      title={`${count} contributions at ${_at.format("YYYY-MM-DD")}`}
                    >
                      <td className={styled.cell.className} style={styled.cell.style} />
                    </Tooltip>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContributionCalendar;
