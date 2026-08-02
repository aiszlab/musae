import { createContext, useContext } from "react";
import type { CardLayout } from "../../types/card";

/**
 * @description
 * class names
 */
const CLASS_NAMES = {
  card: "card",
  header: "card__header",
  media: "card__media",
  content: "card__content",
  headline: "card__headline",
  title: "card__title",
  subhead: "card__subhead",
  body: "card__body",
  actions: "card__actions",
  headerContent: "card__header-content",
  headerText: "card__header-text",
  headerTitle: "card__header-title",
  headerSubhead: "card__header-subhead",
  headerMonogram: "card__header-monogram",
  headerAction: "card__header-action",
};

export { CLASS_NAMES };

/**
 * @zh 卡片内部 context,用于在嵌套子组件中传递 layout 与 disabled 状态
 * @en Card internal context, used to propagate layout and disabled state to nested subcomponents
 */
export interface CardContextValue {
  layout: CardLayout;
  disabled?: boolean;
}

export const CardContext = createContext<CardContextValue>({ layout: "stacked" });

export const useCardContext = () => useContext(CardContext);
