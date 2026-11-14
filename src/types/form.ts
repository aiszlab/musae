import type { CSSProperties, ReactNode } from "react";
import type { FieldsValue, Form, Rule, FORM_TOKEN, ChangeHandler } from "../utils/form";
import type { Nullable, Partialable } from "@aiszlab/relax/types";
import type { ComponentProps } from "./element";

/**
 * @zh 表单实例 hook 的返回值。
 * @en Return value of the form instance hook.
 */
interface UsedForm<T extends FieldsValue> {
  /**
   * @zh 设置指定字段的值，并清除该字段的校验错误。
   * @en Set a field value and clear that field's validation error.
   */
  setFieldValue(name: keyof T, value: T[keyof T]): void;

  /**
   * @zh 批量设置字段值，并清除这些字段的校验错误。
   * @en Set multiple field values and clear their validation errors.
   */
  setFieldsValue(value: Partial<T>): void;

  /**
   * @zh 将字段值重置为 `defaultValue`，并清除所有校验错误。
   * @en Reset field values to `defaultValue` and clear all validation errors.
   */
  reset(): void;

  /**
   * @zh 清空字段值并清除所有校验错误。
   * @en Clear field values and all validation errors.
   */
  clear(): void;

  /**
   * @zh 校验所有已注册字段；全部通过时返回 `true`。
   * @en Validate all registered fields; resolve to `true` when all pass.
   */
  validate: () => Promise<boolean>;

  /**
   * @zh 获取指定字段当前值。
   * @en Get the current value of a field.
   */
  getFieldValue: <FieldValue = T[keyof T]>(name: keyof T) => Partialable<FieldValue>;

  /**
   * @zh 获取已注册字段的当前值。
   * @en Get the current values of registered fields.
   */
  getFieldsValue: () => Partial<T>;

  /**
   * @zh 底层表单实例，供组件内部共享使用。
   * @en Underlying form instance shared by the form components.
   */
  [FORM_TOKEN]: Form<T>;
}

/**
 * @zh 表单实例 hook 的配置参数。
 * @en Configuration options for the form instance hook.
 */
interface UsingForm<T extends FieldsValue> {
  /**
   * @zh 非受控表单的初始值，也作为调用 `reset()` 时恢复的值。
   * @en Initial value for an uncontrolled form and the value restored by `reset()`.
   */
  defaultValue?: Partial<T>;

  /**
   * @zh 复用已有的表单实例；不传时会创建新实例。
   * @en Reuse an existing form instance; a new instance is created when omitted.
   */
  form?: UsedForm<T>;

  /**
   * @zh 字段通过表单交互发生变化时调用，参数依次为已登记字段值和本次变更的字段名。
   * @en Called when a field changes through form interaction, with registered field values and the names changed.
   */
  onChange?: ChangeHandler<T>;

  /**
   * @zh 受控表单的当前值；传入后由调用方负责更新该值。
   * @en Current value of a controlled form; the caller is responsible for updating it.
   */
  value?: Partial<T>;
}

/**
 * @zh Form 组件的参数。
 * @en Props for the Form component.
 */
interface FormProps<T extends FieldsValue> extends ComponentProps {
  /**
   * @zh 表单布局形式
   * @en Form layout mode
   * @default "default"
   */
  layout?: FormLayout;

  /**
   * @zh 传入 `Form.useForm()` 创建的实例以复用或外部操作表单。
   * @en Pass an instance from `Form.useForm()` to reuse or control the form externally.
   */
  form?: UsedForm<T>;

  /**
   * @zh 表单内容，通常包含 `Form.Item` 等表单项。
   * @en Form contents, usually including fields such as `Form.Item`.
   */
  children: ReactNode;

  /**
   * @zh 字段通过表单交互发生变化时调用，参数依次为已登记字段值和本次变更的字段名。
   * @en Called when a field changes through form interaction, with registered field values and the names changed.
   */
  onChange?: ChangeHandler<T>;

  /**
   * @zh 非受控表单的初始值，也作为调用 `form.reset()` 时恢复的值。
   * @en Initial value for an uncontrolled form and the value restored by `form.reset()`.
   */
  defaultValue?: Partial<T>;

  /**
   * @zh 受控表单的当前值；传入后由调用方负责更新该值。
   * @en Current value of a controlled form; the caller is responsible for updating it.
   */
  value?: Partial<T>;
}

/**
 * @zh 表单布局形式
 * @en Form layout mode
 */
type FormLayout = "default" | "inline";

/**
 * typed form list
 */
interface TypedFormList {
  <T extends FieldsValue, FieldKey extends keyof T = keyof T>(
    props: FormListProps<T, FieldKey>,
  ): ReactNode;

  Item: <T extends FieldsValue>(props: FormListItemProps<T>) => ReactNode;
}

/**
 * Use Form Context
 */
type UseFormContext = <T extends FieldsValue = {}>() => FormContextValue<T>;

/**
 * typed form
 */
interface TypedForm {
  /**
   * `Form` Component
   */
  <T extends FieldsValue>(props: FormProps<T>): ReactNode;

  /**
   * `Item` Component
   */
  Item: <T extends FieldsValue, FieldKey extends keyof T = keyof T>(
    props: FormItemProps<T, FieldKey>,
  ) => ReactNode;

  /**
   * `List` Component
   */
  List: TypedFormList;

  /**
   * `Form` hook
   */
  useForm<T extends FieldsValue>(props?: UsingForm<T>): UsedForm<T>;

  /**
   * `Watch` hook
   */
  useWatch<T extends FieldsValue, FieldKey extends keyof T = keyof T>(
    name: FieldKey,
    usedForm?: UsedForm<T>,
  ): Partialable<T[FieldKey]>;

  /**
   * 读取上下文中正在使用的表单实例
   */
  useFormContext: UseFormContext;
}

/**
 * @zh Form.Item 组件的参数。
 * @en Props for the Form.Item component.
 */
interface FormItemProps<T extends FieldsValue, FieldKey extends keyof T> {
  /**
   * @zh 对应表单数据中的字段名；省略时该项不与表单值绑定。
   * @en Field name in the form data; when omitted, this item is not bound to a form value.
   */
  name?: FieldKey;

  /**
   * @zh 标记该字段为必填，并用于显示必填状态。
   * @en Mark the field as required and display its required state.
   */
  required?: boolean;

  /**
   * @zh 应用于表单项根元素的额外类名。
   * @en Additional class name applied to the form item root.
   */
  className?: string;

  /**
   * @zh 应用于表单项根元素的内联样式。
   * @en Inline styles applied to the form item root.
   */
  style?: CSSProperties;

  /**
   * @zh 显示在字段下方的补充说明。
   * @en Supporting text displayed below the field.
   */
  supporting?: ReactNode;

  /**
   * @zh 字段标签内容。
   * @en Field label content.
   */
  label?: ReactNode;

  /**
   * @zh 标签区域占用的栅格列数。
   * @en Number of grid columns occupied by the label.
   */
  labelCol?: number;

  /**
   * @zh 字段控件区域占用的栅格列数。
   * @en Number of grid columns occupied by the field control.
   */
  wrapperCol?: number;

  /**
   * @zh 字段控件或其他表单项内容。
   * @en Field control or other form item content.
   */
  children?: ReactNode;

  /**
   * @zh 按顺序执行的字段校验规则。
   * @en Validation rules run for this field.
   */
  rules?: Rule<T, FieldKey>[];
}

/**
 * Context value type
 */
interface ContextValue {
  /**
   * labelCol
   */
  labelCol: number;

  /**
   * wrapperCol
   */
  wrapperCol: number;
}

/**
 * form context value
 */
interface FormContextValue<T extends FieldsValue = {}> {
  /**
   * form instance
   */
  form: Nullable<Form<T>>;
}

/**
 * form list field
 */
interface FormListField {
  /**
   * field name
   */
  name: number;
}

/**
 * form list props
 */
interface FormListProps<T extends FieldsValue, FieldKey extends keyof T> extends Omit<
  FormItemProps<T, FieldKey>,
  "children"
> {
  /**
   * children render
   */
  children?: (props: {
    fields: string[];
    add: (field?: string) => string;
    remove: (field: string) => void;
  }) => ReactNode;
}

/**
 * form list item props
 */
interface FormListItemProps<T extends FieldsValue = {}> {
  /**
   * @description current item field
   */
  field: string;

  /**
   * @description children
   */
  children: ReactNode;

  /**
   * registered form
   */
  form?: UsedForm<T>;
}

export {
  FormProps,
  FormItemProps,
  TypedForm,
  FieldsValue,
  ContextValue,
  UsedForm,
  UsingForm,
  FormListField,
  FormListProps,
  FormContextValue,
  TypedFormList,
  FormListItemProps,
  UseFormContext,
  FormLayout,
};
