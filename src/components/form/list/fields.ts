import { at, isUndefined } from "@aiszlab/relax";
import type { FieldsValue } from "../../../utils/form";
import type { Partialable } from "@aiszlab/relax/types";

/**
 * @description fields
 *
 * 为了整体性能优化，单独设计数据结构适配`List`组织渲染使用
 */
class Fields {
  private _values: FieldsValue[] = [];
  private getId: () => string;

  private _fields: Map<string, number> = new Map();
  private indexedFields: Map<number, string[]> = new Map();

  constructor(getId: () => string) {
    this.getId = getId;
  }

  set values(values: FieldsValue[]) {
    this._values = values;

    if (this._fields.size !== this._values.length) {
      this.reset();
    }
  }

  reset() {
    this._fields.clear();
    this.indexedFields.clear();
  }

  indexOf(field: string) {
    return this._fields.get(field) ?? -1;
  }

  at(field: string): Partialable<FieldsValue> {
    return at(this._values, this.indexOf(field));
  }

  /**
   * 指定`field`位置添加新条目
   */
  add(field?: string) {
    const _index = isUndefined(field) ? this._fields.size - 1 : this.indexOf(field);
    const _fieldsAtIndex = this.indexedFields.get(_index) ?? [];
    const _offset = _fieldsAtIndex.length;

    const _field = this.getId();
    _fieldsAtIndex.push(_field);

    this._fields.set(_field, _index);
    this.indexedFields.set(_index, _fieldsAtIndex);

    return _index + _offset;
  }

  remove(field: string) {
    const _index = this.indexOf(field);

    this._fields.delete(field);
    this.indexedFields.delete(_index);

    return _index;
  }

  get fields() {
    const _groupedFields =
      this.indexedFields.size === 0
        ? Array.from<undefined>({ length: this._values.length })
        : Array.from(this.indexedFields.values());
    this.reset();

    return _groupedFields.reduce<string[]>((prev, _fields = [this.getId()]) => {
      _fields.forEach((_field) => {
        const _index = prev.length;

        prev.push(_field);
        this._fields.set(_field, _index);
        this.indexedFields.set(_index, [_field]);
      });

      return prev;
    }, []);
  }
}

export { Fields };
