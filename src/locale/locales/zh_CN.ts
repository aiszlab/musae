import { ComponentToken } from "../../utils/component-token";
import type { Locale } from "musae/types/locale";

const zh_CN: Locale = {
  locale: "zh_CN",

  [ComponentToken.Dialog]: {
    confirm: "确认",
    cancel: "取消",
  },

  [ComponentToken.Empty]: {
    placeholder: "暂无数据",
  },

  [ComponentToken.Pagination]: {
    size: (size) => `${size} 条/页`,
  },

  [ComponentToken.Popconfirm]: {
    confirm: "确认",
    cancel: "取消",
  },

  [ComponentToken.TimePicker]: {
    confirm: "确认",
    now: "此刻",
  },

  [ComponentToken.Tour]: {
    finish: "结束",
    prev: "上一步",
    next: "下一步",
  },

  [ComponentToken.Transfer]: {
    unit: "项",
  },

  [ComponentToken.I18nButton]: {
    zh_CN: "中文",
    en_US: "英文",
  },
};

export default zh_CN;
