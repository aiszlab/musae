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

const getUniqueVariable = (statements: ts.NodeArray<ts.Statement>, variableName: string) => {
  const declarations = statements.flatMap((statement) =>
    ts.isVariableStatement(statement) &&
    (statement.declarationList.flags & ts.NodeFlags.Const) !== 0
      ? Array.from(statement.declarationList.declarations)
      : [],
  );
  const matches = declarations.filter((declaration) => declaration.name.getText() === variableName);

  const declaration = matches[0];
  if (matches.length !== 1 || isUndefined(declaration) || isUndefined(declaration.initializer)) {
    throw new Error(`Expected one initialized variable: ${variableName}`);
  }

  return { declaration, initializer: declaration.initializer };
};

const getArrowFunctionBody = (initializer: ts.Expression, variableName: string): ts.Block => {
  if (!ts.isArrowFunction(initializer) || !ts.isBlock(initializer.body)) {
    throw new Error(`${variableName} is not an arrow function with a block body`);
  }

  return initializer.body;
};

const getPropsArguments = (expression: ts.Expression, sourceFile: ts.SourceFile, label: string) => {
  if (!ts.isCallExpression(expression) || expression.expression.getText(sourceFile) !== "$props") {
    throw new Error(`${label} is not a $props call`);
  }

  return expression.arguments.map((argument) => argument.getText(sourceFile));
};

const getItemsMapBody = (functionBody: ts.Block, sourceFile: ts.SourceFile): ts.Block => {
  const returnStatements = functionBody.statements.filter(ts.isReturnStatement);
  const returnExpression = returnStatements[0]?.expression;
  if (returnStatements.length !== 1 || isUndefined(returnExpression)) {
    throw new Error("SearchResultList requires one direct return expression");
  }

  const mapCalls: ts.CallExpression[] = [];
  const visit = (node: ts.Node) => {
    if (
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      node.expression.expression.getText(sourceFile) === "items" &&
      node.expression.name.text === "map"
    ) {
      mapCalls.push(node);
    }

    ts.forEachChild(node, visit);
  };
  visit(returnExpression);

  const callback = mapCalls[0]?.arguments[0];
  if (
    mapCalls.length !== 1 ||
    isUndefined(callback) ||
    !ts.isArrowFunction(callback) ||
    !ts.isBlock(callback.body)
  ) {
    throw new Error("SearchResultList requires one items.map block callback");
  }

  return callback.body;
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
  const searchResultList = getUniqueVariable(resultListSource.statements, "SearchResultList");
  const searchResultListBody = getArrowFunctionBody(
    searchResultList.initializer,
    "SearchResultList",
  );
  const styled = asObjectLiteral(
    getUniqueVariable(searchResultListBody.statements, "styled").initializer,
    "SearchResultList styled",
  );
  const itemStyles = getUniqueVariable(
    getItemsMapBody(searchResultListBody, resultListSource).statements,
    "itemStyles",
  );

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
  expect(
    getPropsArguments(getPropertyInitializer(styled, "label"), resultListSource, "styled.label"),
  ).toEqual(["$body.large", "styles.resultList.label"]);
  expect(
    getPropsArguments(
      getPropertyInitializer(styled, "supportingText"),
      resultListSource,
      "styled.supportingText",
    ),
  ).toEqual(["$body.medium", "styles.resultList.supportingText"]);
  expect(getPropsArguments(itemStyles.initializer, resultListSource, "itemStyles")).toEqual([
    "styles.resultList.item",
    "isActive && styles.resultList.activeItem",
    "item.disabled && styles.resultList.disabledItem",
  ]);
});

test("AST contract inspection ignores adjacent comments and comment-like strings", () => {
  const sourceFile = parseSource(
    "fixture.ts",
    `$props(real);// $props(commentDecoy)
enabled && active;// disabled && commentDecoy
const bait = "a /* $props(blockDecoy) */ https://example.com // disabled && stringDecoy";`,
  );

  const [callStatement, binaryStatement] = sourceFile.statements;
  const bait = getUniqueVariable(sourceFile.statements, "bait").initializer;

  expect(callStatement && ts.isExpressionStatement(callStatement)).toBe(true);
  expect(
    callStatement && ts.isExpressionStatement(callStatement) && callStatement.expression.getText(),
  ).toBe("$props(real)");
  expect(binaryStatement && ts.isExpressionStatement(binaryStatement)).toBe(true);
  expect(
    binaryStatement &&
      ts.isExpressionStatement(binaryStatement) &&
      binaryStatement.expression.getText(),
  ).toBe("enabled && active");
  expect(bait && ts.isStringLiteral(bait) && bait.text).toBe(
    "a /* $props(blockDecoy) */ https://example.com // disabled && stringDecoy",
  );
});
