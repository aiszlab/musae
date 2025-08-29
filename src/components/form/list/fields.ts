import { at } from "@aiszlab/relax";
import type { FieldsValue } from "../../../utils/form";
import type { Partialable } from "@aiszlab/relax/types";

/**
 * @description fields
 *
 * 为了整体性能优化，单独设计数据结构适配`List`组织渲染使用
 */
class Fields {
  private readonly values: FieldsValue[];
  private getId: () => string;

  private fields: Map<string, number> = new Map();

  private offset: number = 0;
  private offsetFrom: number = 0;

  constructor(values: FieldsValue[], getId: () => string) {
    this.values = values;
    this.getId = getId;
  }

  at(field: string): Partialable<FieldsValue> {
    const _index = this.fields.get(field) ?? -1;
    return at(this.values, _index);
  }

  map<T>(callback: (value: FieldsValue, field: string) => T) {
    const _fields = Array.from(this.fields);
    this.fields = new Map();

    for (const [field, index] of _fields) {
      callback(at(this.values, index) ?? {}, field);
    }
  }

  add(index: number) {
    this.offsetFrom = index;
    this.offset = 1;

    this.fields.set(this.getId(), index);
    this.values.toSpliced(index, 0, {});
  }

  remove(index: number) {
    this.offsetFrom = index;
    this.offset = -1;

    this.fields.delete(this.getId());
    this.values.toSpliced(index, 1);
  }
}
