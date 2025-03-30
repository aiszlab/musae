import dayjs from "dayjs";
import React, { useMemo } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { Tooltip } from "../tooltip";
import { clamp, min, toFunction } from "@aiszlab/relax";
import { firstSundayInMonth } from "../../utils/date";
import { ContributionCalendarProps } from "../../types/calendar";
import { hexToHsla } from "@aiszlab/fuzzy/color";
import { useLocale } from "../../locale";

const FORMAT = "YYYY-MM-DD";

const styles = {
  calendar: $create({
    default: {
      borderCollapse: "separate",
      borderSpacing: spacing.xxxxxsmall,
    },

    scrollable: {
      maxWidth: "max-content",
      overflow: "auto",
    },
  }),

  cell: $create({
    default: {
      minWidth: sizes.xxxxxsmall,
      minHeight: sizes.xxxxxsmall,
      padding: spacing.none,
      borderRadius: sizes.xxxxxxxxsmall,
      cursor: "pointer",
      backgroundColor: "var(--color-primary)",
    },
  }),

  weekday: $create({
    cell: {
      padding: 0,
    },

    default: {
      height: sizes.xxxxxsmall,
      overflow: "visible",
      display: "flex",
      alignItems: "center",
    },
  }),

  month: $create({
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

  legend: $create({
    default: {
      paddingBlock: spacing.xxxxxsmall,
      paddingInline: spacing.xxxxlarge,
      display: "flex",
      justifyContent: "flex-end",
    },
  }),

  levels: $create({
    default: {
      display: "flex",
      gap: spacing.xxxxxsmall,
      alignItems: "center",
    },

    level: {
      width: sizes.xxxxxsmall,
      height: sizes.xxxxxsmall,
      borderRadius: sizes.xxxxxxxxsmall,
    },
  }),
};

/**
 * @description
 * contribution calendar
 * inspired by github
 */
const ContributionCalendar = ({
  year,
  contributions = [],
  levels = 5,
  gap = 5,
}: ContributionCalendarProps) => {
  const theme = useTheme();
  const [locale] = useLocale("contribution-calendar");

  const [from, to] = useMemo(() => {
    const _to = min(
      [dayjs().subtract(1, "days").startOf("days"), dayjs(`${year}-12-31`)],
      (_value) => _value.valueOf(),
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

  const _contributions = useMemo(() => {
    return contributions.reduce<Map<string, number>>((prev, { contributedAt, count }) => {
      return prev.set(contributedAt.format(FORMAT), count);
    }, new Map());
  }, [contributions]);

  const styled = {
    scrollable: $props(styles.calendar.scrollable),
    calendar: $props(styles.calendar.default),
    cell: $props(styles.cell.default),
    weekday: {
      cell: $props(styles.weekday.cell, typography.body.small),
      default: $props(styles.weekday.default),
    },
    month: {
      cell: $props(styles.month.cell, typography.body.small),
      default: $props(styles.month.default),
      leading: $props(styles.month.cell, typography.body.small, styles.month.leading),
    },
    legend: $props(styles.legend.default, typography.label.medium),
    levels: $props(styles.levels.default),
    level: $props(styles.levels.level),
  };

  // how to get different levels
  // convert primary color into hsla color
  // use `s` change to get different levels
  const heats = useMemo(() => {
    const { 0: h } = hexToHsla(theme.colors.primary);
    const _levels = Array.from({ length: levels - 1 }).map((_, index) => gap * index);

    const heatStep = Math.min(Math.floor(100 / Math.max(_levels.length, 1)), 10);

    return Array.from({ length: levels }).map((_, index) => {
      if (index === 0) {
        return `hsl(${h}, 0%, 80%)`;
      }
      return `hsl(${[h, 100 - (levels - 1 - index) * heatStep + "%", `80%`].join(",")})`;
    });
  }, [theme.colors.primary, levels, gap]);

  return (
    <div
      className={styled.scrollable.className}
      style={{
        ...styled.scrollable.style,
        // @ts-expect-error style vars
        "--color-primary": theme.colors.primary,
      }}
    >
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
                  // get cell date: `start` plus `x * 7 + y`
                  const _at = start.add(column * 7 + weekday, "day");

                  if (column === 0 && _at.isBefore(from)) {
                    return <td key={column} />;
                  }

                  if (column === columns - 1 && _at.isAfter(to)) {
                    return <td key={column} />;
                  }

                  const date = _at.format(FORMAT);
                  const count = _contributions.get(date) ?? 0;
                  const levelAt = clamp(Math.ceil(count / gap), 0, levels - 1);

                  return (
                    <Tooltip key={column} title={toFunction(locale.contribution)(count, date)}>
                      <td
                        className={styled.cell.className}
                        style={{
                          ...styled.cell.style,
                          backgroundColor: heats[levelAt],
                        }}
                      />
                    </Tooltip>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* graph legend */}
      <div className={styled.legend.className} style={styled.legend.style}>
        <div className={styled.levels.className} style={styled.levels.style}>
          <span>{locale.less}</span>
          {heats.map((color) => {
            return (
              <div
                className={styled.level.className}
                key={color}
                style={{
                  ...styled.level.style,
                  backgroundColor: color,
                }}
              />
            );
          })}
          <span>{locale.more}</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionCalendar;
