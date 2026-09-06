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

const getUniqueVariable = (variableName: string) => {
  const declarations = sourceFile.statements.flatMap((statement) =>
    ts.isVariableStatement(statement) &&
    (statement.declarationList.flags & ts.NodeFlags.Const) !== 0
      ? Array.from(statement.declarationList.declarations)
      : [],
  );
  const matches = declarations.filter(
    (declaration) => declaration.name.getText(sourceFile) === variableName,
  );
  const declaration = matches[0];

  if (matches.length !== 1 || isUndefined(declaration?.initializer)) {
    throw new Error(`Expected one initialized const: ${variableName}`);
  }

  return declaration.initializer;
};

const getReferencedProperty = (
  objectLiteral: ts.ObjectLiteralExpression,
  propertyName: string,
): ts.Expression => {
  const matches = objectLiteral.properties.filter(
    (candidate) =>
      (ts.isPropertyAssignment(candidate) || ts.isShorthandPropertyAssignment(candidate)) &&
      candidate.name.getText(sourceFile) === propertyName,
  );
  const property = matches[0];

  if (matches.length !== 1 || isUndefined(property)) {
    throw new Error(`Expected one referenced property: ${propertyName}`);
  }

  return ts.isPropertyAssignment(property) ? property.initializer : property.name;
};

const assertOpacityTokenImport = () => {
  const imports = sourceFile.statements.filter(
    (statement): statement is ts.ImportDeclaration =>
      ts.isImportDeclaration(statement) &&
      ts.isStringLiteral(statement.moduleSpecifier) &&
      statement.moduleSpecifier.text === "../theme/tokens.stylex",
  );
  const namedBindings = imports[0]?.importClause?.namedBindings;

  if (imports.length !== 1 || isUndefined(namedBindings) || !ts.isNamedImports(namedBindings)) {
    throw new Error("Expected one named import from theme tokens");
  }

  const opacityImports = namedBindings.elements.filter(
    (element) =>
      element.name.text === "opacity" &&
      (isUndefined(element.propertyName) || element.propertyName.text === "opacity"),
  );
  if (opacityImports.length !== 1) {
    throw new Error("Expected opacity to be imported from theme tokens");
  }
};

const getRootStyles = () => {
  const defaultExports = sourceFile.statements.filter(ts.isExportAssignment);
  const defaultExport = defaultExports[0];
  if (
    defaultExports.length !== 1 ||
    isUndefined(defaultExport) ||
    defaultExport.isExportEquals ||
    !ts.isIdentifier(defaultExport.expression)
  ) {
    throw new Error("Expected one identifier default export");
  }

  const styles = asObjectLiteral(
    getUniqueVariable(defaultExport.expression.text),
    "default styles",
  );
  const rootReference = getReferencedProperty(styles, "root");
  if (!ts.isIdentifier(rootReference)) {
    throw new Error("Expected styles.root to reference a top-level const");
  }

  const rootInitializer = getUniqueVariable(rootReference.text);
  if (
    !ts.isCallExpression(rootInitializer) ||
    rootInitializer.expression.getText(sourceFile) !== "$create"
  ) {
    throw new Error("Expected exported styles.root to be created with $create");
  }

  const argument = rootInitializer.arguments[0];
  if (isUndefined(argument)) {
    throw new Error("Expected exported root $create argument");
  }

  return asObjectLiteral(argument, "exported styles.root");
};

test("filled Input uses extractable opacity tokens and excludes active state from hover", () => {
  assertOpacityTokenImport();
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
