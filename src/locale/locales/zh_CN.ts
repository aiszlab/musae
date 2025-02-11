import type { Locale } from "../../types/locale";

const zh_CN: Locale = {
  locale: "zh_CN",

  dialog: {
    confirm: "确认",
    cancel: "取消",
  },

  empty: {
    placeholder: "暂无数据",
  },

  pagination: {
    size: (size) => `${size} 条/页`,
  },

  popconfirm: {
    confirm: "确认",
    cancel: "取消",
  },

  "time-picker": {
    confirm: "确认",
    now: "此刻",
  },

  tour: {
    finish: "结束",
    prev: "上一步",
    next: "下一步",
  },

  transfer: {
    unit: "项",
  },

  "i18n-button": {
    zh_CN: "中文",
    en_US: "英文",
  },

  drawer: {
    confirm: "确认",
  },

  upload: {
    upload: "上传",
  },

  form: {
    required: (name) => `${name} 是必填项`,
  },

  guideline: {
    recommend: "建议",
    oppose: "禁止",
  },

  "contribution-calendar": {
    less: "更少",
    more: "更多",
    contribution: (count, at) => `${count} 次贡献于 ${at}`,
  },

  "rich-text-editor": {
    checkList: "任务列表",
    codeBlock: "代码块",
  },
};

export default zh_CN;
