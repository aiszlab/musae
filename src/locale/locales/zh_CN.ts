import { ComponentToken } from "../../utils/component-token";
import type { Locale } from "../types";

const zh_CN: Locale = {
  [ComponentToken.Dialog]: {
    confirm: "确认",
    cancel: "取消",
  },

  [ComponentToken.Empty]: {
    placeholder: "暂无数据",
  },
};

export default zh_CN;
