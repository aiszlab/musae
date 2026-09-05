import { isUndefined } from "@aiszlab/relax";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import * as ts from "typescript";

const parseSource = (fileName: string, source: string) =>
  ts.createSourceFile(
    fileName,
    source,
    ts.ScriptTarget.Latest,
    true,
    fileName.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );

const readSearchSource = (fileName: string) =>
  parseSource(fileName, readFileSync(join(__dirname, "..", fileName), "utf8"));

const getPropertyInitializer = (
  objectLiteral: ts.ObjectLiteralExpression,
  propertyName: string,
): ts.Expression => {
  const property = objectLiteral.properties.find(
    (candidate): candidate is ts.PropertyAssignment =>
      ts.isPropertyAssignment(candidate) && candidate.name.getText() === propertyName,
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

const getStyleObject = (sourceFile: ts.SourceFile, variableName: string) => {
  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;

    const declaration = statement.declarationList.declarations.find(
      (candidate) => candidate.name.getText() === variableName,
    );
    if (isUndefined(declaration?.initializer) || !ts.isCallExpression(declaration.initializer)) {
      continue;
    }

    const call = declaration.initializer;
    const argument = call.arguments[0];
    if (call.expression.getText() !== "$create" || isUndefined(argument)) continue;

    return asObjectLiteral(argument, variableName);
  }

  throw new Error(`Missing $create variable: ${variableName}`);
};

const collectExecutableContracts = (sourceFile: ts.SourceFile) => {
  const propsCalls: string[][] = [];
  const logicalAndExpressions: string[][] = [];

  const visit = (node: ts.Node) => {
    if (ts.isCallExpression(node) && node.expression.getText(sourceFile) === "$props") {
      propsCalls.push(node.arguments.map((argument) => argument.getText(sourceFile)));
    }

    if (
      ts.isBinaryExpression(node) &&
      node.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken
    ) {
      logicalAndExpressions.push([node.left.getText(sourceFile), node.right.getText(sourceFile)]);
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return { logicalAndExpressions, propsCalls };
};

test("Search result StyleX source preserves layout, typography, and state contracts", () => {
  const stylesSource = readSearchSource("styles.ts");
  const resultListSource = readSearchSource("result-list.tsx");
  const resultList = getStyleObject(stylesSource, "resultList");
  const root = asObjectLiteral(getPropertyInitializer(resultList, "root"), "resultList.root");
  const item = asObjectLiteral(getPropertyInitializer(resultList, "item"), "resultList.item");
  const supportingText = asObjectLiteral(
    getPropertyInitializer(resultList, "supportingText"),
    "resultList.supportingText",
  );
  const { logicalAndExpressions, propsCalls } = collectExecutableContracts(resultListSource);

  expect(getPropertyInitializer(root, "minHeight").getText(stylesSource)).toBe(
    "searchViewSizes.minHeight",
  );
  expect(getPropertyInitializer(item, "minHeight").getText(stylesSource)).toBe(
    "searchViewSizes.resultItemHeight",
  );
  expect(getPropertyInitializer(supportingText, "overflow").getText(stylesSource)).toBe('"hidden"');
  expect(getPropertyInitializer(supportingText, "textOverflow").getText(stylesSource)).toBe(
    '"ellipsis"',
  );
  expect(getPropertyInitializer(supportingText, "whiteSpace").getText(stylesSource)).toBe(
    '"nowrap"',
  );
  expect(propsCalls).toContainEqual(["$body.large", "styles.resultList.label"]);
  expect(propsCalls).toContainEqual(["$body.medium", "styles.resultList.supportingText"]);
  expect(logicalAndExpressions).toContainEqual(["isActive", "styles.resultList.activeItem"]);
  expect(logicalAndExpressions).toContainEqual(["item.disabled", "styles.resultList.disabledItem"]);
});

test("AST contract inspection ignores adjacent comments and comment-like strings", () => {
  const sourceFile = parseSource(
    "fixture.ts",
    `$props(real);// $props(commentDecoy)
enabled && active;// disabled && commentDecoy
const bait = "a /* $props(blockDecoy) */ https://example.com // disabled && stringDecoy";`,
  );

  expect(collectExecutableContracts(sourceFile)).toEqual({
    logicalAndExpressions: [["enabled", "active"]],
    propsCalls: [["real"]],
  });
});
