// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const format = require("sql-formatter");
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

const getSetting = (group, key, def) => {
  const settings = vscode.workspace.getConfiguration(group, null);
  const editor = vscode.window.activeTextEditor;
  const language = editor && editor.document && editor.document.languageId;
  const languageSettings =
    language &&
    vscode.workspace.getConfiguration(null, null).get(`[${language}]`);

  let value = languageSettings && languageSettings[`${group}.${key}`];
  if (value == null) value = settings.get(key, def);
  return value == null ? def : value;
};

const getConfig = ({ insertSpaces, tabSize }) => ({
  useTabs: !insertSpaces,
  keywordCase: getSetting("sql-formatter", "uppercase", false)
    ? "upper"
    : "lower",
  tabWidth: tabSize,
  language: getSetting("sql-formatter", "dialect", "sql"),
  indentStyle: getSetting("sql-formatter", "indentStyle", "standard"),
  commaPosition: getSetting("sql-formatter", "commaPosition", "before"),
  logicalOperatorNewline: getSetting(
    "sql-formatter",
    "logicalOperatorNewline",
    "before"
  ),
  tabulateAlias: getSetting("sql-formatter", "tabulateAlias", false),
  linesBetweenQueries: getSetting("sql-formatter", "linesBetweenQueries", 2),
  newlineBeforeSemicolon: getSetting(
    "sql-formatter",
    "newlineBeforeSemicolon",
    true
  ),
  paramTypes: getSetting("sql-formatter", "paramTypes", null),
});

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  //   // Use the console to output diagnostic information (console.log) and errors (console.error)
  //   // This line of code will only be executed once when your extension is activated
  //   console.log(
  //     'Congratulations, your extension "hyshin-sqlformatter" is now active!'
  //   );

  //   // The command has been defined in the package.json file
  //   // Now provide the implementation of the command with  registerCommand
  //   // The commandId parameter must match the command field in package.json
  //   let disposable = vscode.commands.registerCommand(
  //     "hyshin-sqlformatter.helloWorld",
  //     function () {
  //       // The code you place here will be executed every time your command is executed

  //       // Display a message box to the user
  //       vscode.window.showInformationMessage("Hello World from SQL Formatter!");
  //     }
  //   );

  //   context.subscriptions.push(disposable);

  //   disposable = vscode.commands.registerCommand(
  //     "hyshin-sqlformatter.FormatSQL",
  //     function () {
  //       // The code you place here will be executed every time your command is executed

  //       // Display a message box to the user
  //       vscode.window.showInformationMessage("SQL Format!! from SQL Formatter!");
  //     }
  //   );

  //   context.subscriptions.push(disposable);

  vscode.languages.registerDocumentRangeFormattingEditProvider("sql", {
    provideDocumentRangeFormattingEdits: (document, range, options) => [
      vscode.TextEdit.replace(
        range,
        format.format(document.getText(range), getConfig(options))
      ),
    ],
  });
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
