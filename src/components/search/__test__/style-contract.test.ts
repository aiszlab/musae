import { readFileSync } from "node:fs";
import { join } from "node:path";

const readSearchSource = (fileName: string) =>
  readFileSync(join(__dirname, "..", fileName), "utf8");

test("Search result StyleX source preserves layout, typography, and state contracts", () => {
  const stylesSource = readSearchSource("styles.ts");
  const resultListSource = readSearchSource("result-list.tsx");

  expect(stylesSource).toMatch(
    /const resultList = \$create\(\{[\s\S]*?root: \{\s*minHeight: searchViewSizes\.minHeight,/,
  );
  expect(stylesSource).toMatch(/item: \{[\s\S]*?minHeight: searchViewSizes\.resultItemHeight,/);
  expect(stylesSource).toMatch(
    /supportingText: \{\s*overflow: "hidden",\s*textOverflow: "ellipsis",\s*whiteSpace: "nowrap",/,
  );
  expect(resultListSource).toContain("label: $props($body.large, styles.resultList.label)");
  expect(resultListSource).toContain(
    "supportingText: $props($body.medium, styles.resultList.supportingText)",
  );
  expect(resultListSource).toContain("isActive && styles.resultList.activeItem");
  expect(resultListSource).toContain("item.disabled && styles.resultList.disabledItem");
});
