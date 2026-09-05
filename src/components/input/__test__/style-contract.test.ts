import { isUndefined } from "@aiszlab/relax";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import * as ts from "typescript";

const sourceText = readFileSync(join(__dirname, "..", "styles.stylex.ts"), "utf8");
const sourceFile = ts.createSourceFile(
  "styles.stylex.ts",
  sourceText,
  ts.ScriptTarget.Latest,
  true,
  ts.ScriptKind.TS,
);

const getPropertyInitializer = (
  objectLiteral: ts.ObjectLiteralExpression,
  propertyName: string,
): ts.Expression => {
  const property = objectLiteral.properties.find(
    (candidate): candidate is ts.PropertyAssignment =>
      ts.isPropertyAssignment(candidate) && candidate.name.getText(sourceFile) === propertyName,
  );

  if (isUndefined(property)) {
    throw new Error(`Missing property: ${propertyName}`);
  }

  return property.initializer;
};

const asObjectLiteral = (expression: ts.Expression, label: string): ts.ObjectLiteralExpression => {
  if (!ts.isObjectLiteralExpression(expression)) {
    throw new Error(`${label} is not an object literal`);
  }

  return expression;
};

const getRootStyles = () => {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;

    const declaration = statement.declarationList.declarations.find(
      (candidate) => candidate.name.getText(sourceFile) === "root",
    );
    if (isUndefined(declaration?.initializer) || !ts.isCallExpression(declaration.initializer)) {
      continue;
    }

    const argument = declaration.initializer.arguments[0];
    if (
      declaration.initializer.expression.getText(sourceFile) !== "$create" ||
      isUndefined(argument)
    ) {
      continue;
    }

    return asObjectLiteral(argument, "root");
  }

  throw new Error("Missing root $create styles");
};

test("filled Input uses extractable opacity tokens and excludes active state from hover", () => {
  const root = getRootStyles();
  const filled = asObjectLiteral(getPropertyInitializer(root, "filled"), "root.filled");
  const hover = asObjectLiteral(
    getPropertyInitializer(filled, '":hover:not(:active)"'),
    "root.filled hover",
  );
  const hoverMedia = asObjectLiteral(
    getPropertyInitializer(hover, '"@media (hover: hover)"'),
    "root.filled hover media",
  );
  const active = asObjectLiteral(getPropertyInitializer(filled, '":active"'), "root.filled active");

  expect(getPropertyInitializer(hoverMedia, "backgroundColor").getText(sourceFile)).toBe(
    "`color-mix(in srgb, var(--color-on-surface) calc(${opacity.thin} * 100%), var(--color-surface-container-high))`",
  );
  expect(getPropertyInitializer(active, "backgroundColor").getText(sourceFile)).toBe(
    "`color-mix(in srgb, var(--color-on-surface) calc(${opacity.medium} * 100%), var(--color-surface-container-high))`",
  );
});
