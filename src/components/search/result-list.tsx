import React from "react";
import type { Key, ReactNode } from "react";
import { props as $props } from "@stylexjs/stylex";
import { isBoolean, isFunction, isUndefined } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";
import type { SearchItem, SearchProps } from "../../types/search";
import { $body } from "../theme/theme";
import { OPACITY } from "../theme/tokens.stylex";
import { CLASS_NAMES } from "./context";
import styles from "./styles";

/**
 * @zh Search 结果列表属性
 * @en Search result list props
 */
export type SearchResultListProps = Pick<SearchProps, "items" | "renderItem"> & {
  id: string;
  activeKey?: Key;
  getOptionId: (key: Key) => string;
  onActiveKeyChange: (key: Key) => void;
  onSelect: (item: SearchItem) => void;
};

const hasRenderableContent = (content: ReactNode): boolean => {
  if (content === null || isUndefined(content) || isBoolean(content) || content === "") {
    return false;
  }

  return React.Children.toArray(content).some((child) => child !== "");
};

const SearchResultList = ({
  activeKey,
  getOptionId,
  id,
  items = [],
  onActiveKeyChange,
  onSelect,
  renderItem,
}: SearchResultListProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const themeColorVars = useThemeColorVars([
    "on-surface-variant",
    ["on-surface", OPACITY.thin],
    ["on-surface", OPACITY.medium],
    ["on-surface", OPACITY.thickest],
  ]);
  const styled = {
    root: $props(styles.resultList.root),
    item: $props(styles.resultList.item),
    activeItem: $props(styles.resultList.activeItem),
    disabledItem: $props(styles.resultList.disabledItem),
    leading: $props(styles.resultList.leading),
    content: $props(styles.resultList.content),
    label: $props($body.large, styles.resultList.label),
    supportingText: $props($body.medium, styles.resultList.supportingText),
    trailing: $props(styles.resultList.trailing),
  };

  return (
    <div
      id={id}
      role="listbox"
      className={stringify(classNames.searchResultList, styled.root.className)}
      style={{ ...styled.root.style, ...themeColorVars }}
    >
      {items.map((item) => {
        const isActive = !isUndefined(activeKey) && item.key === activeKey;
        const itemContent = isFunction(renderItem) ? renderItem(item) : undefined;
        const hasLeading = hasRenderableContent(item.leading);
        const hasSupportingText = hasRenderableContent(item.supportingText);
        const hasTrailing = hasRenderableContent(item.trailing);
        const itemStyles = $props(
          styles.resultList.item,
          isActive && styles.resultList.activeItem,
          item.disabled && styles.resultList.disabledItem,
        );

        return (
          <div
            key={item.key}
            id={getOptionId(item.key)}
            role="option"
            aria-selected={isActive}
            aria-disabled={item.disabled || undefined}
            className={stringify(
              classNames.searchResultItem,
              {
                [classNames.searchResultItemActive]: isActive,
                [classNames.searchResultItemDisabled]: !!item.disabled,
              },
              itemStyles.className,
            )}
            style={itemStyles.style}
            {...(!item.disabled && {
              onPointerMove: () => onActiveKeyChange(item.key),
              onClick: () => onSelect(item),
            })}
          >
            {isFunction(renderItem) ? (
              itemContent
            ) : (
              <>
                {hasLeading && (
                  <span
                    className={stringify(
                      classNames.searchResultItemLeading,
                      styled.leading.className,
                    )}
                    style={styled.leading.style}
                  >
                    {item.leading}
                  </span>
                )}
                <span
                  className={stringify(
                    classNames.searchResultItemContent,
                    styled.content.className,
                  )}
                  style={styled.content.style}
                >
                  <span
                    className={stringify(classNames.searchResultItemLabel, styled.label.className)}
                    style={styled.label.style}
                  >
                    {item.label}
                  </span>
                  {hasSupportingText && (
                    <span
                      className={stringify(
                        classNames.searchResultItemSupportingText,
                        styled.supportingText.className,
                      )}
                      style={styled.supportingText.style}
                    >
                      {item.supportingText}
                    </span>
                  )}
                </span>
                {hasTrailing && (
                  <span
                    className={stringify(
                      classNames.searchResultItemTrailing,
                      styled.trailing.className,
                    )}
                    style={styled.trailing.style}
                  >
                    {item.trailing}
                  </span>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultList;
