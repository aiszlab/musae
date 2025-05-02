import type { FormProps } from "../../utils/form";

/**
 * form hook return
 */
interface UsedForm {
  setFieldValue(name: PropertyKey, value: unknown): void;
  reset(): void;
  clear(): void;
}

export { FormProps, UsedForm };
