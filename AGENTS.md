# Repository development guidelines

## Reuse `@aiszlab/relax`

- Before implementing a generic predicate, type guard, state helper, event wrapper, or other
  framework-agnostic utility, check whether `@aiszlab/relax` already exposes an equivalent API.
- Prefer the shared `@aiszlab/relax` API over handwritten JavaScript checks so behavior and type
  narrowing remain consistent across the repository.
- In particular, use `isFunction(value)` instead of `typeof value === "function"` and
  `isUndefined(value)` instead of `value === undefined` or `typeof value === "undefined"`.
- Import these helpers directly from `@aiszlab/relax`; do not create component-local wrappers for
  equivalent checks.
- When reviewing or modifying nearby code, keep all equivalent checks within the touched scope on
  the shared helper rather than mixing handwritten checks with `@aiszlab/relax` predicates.

Example:

```ts
import { isFunction, isUndefined } from "@aiszlab/relax";

const next = isFunction(updater) ? updater(previous) : updater;

if (isUndefined(value)) {
  // handle the absent value
}
```
