// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "hello-world" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand(
    "hello-world.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from hello-world!");
    }
  );

  context.subscriptions.push(disposable);

  // Create a new command that shows a message in the status bar
  let statusCommand = vscode.commands.registerCommand(
    "hello-world.showStatusMessage",
    () => {
      vscode.window.showInformationMessage("Status Bar Command Clicked!");
    }
  );

  // Add to context subscriptions so it's cleaned up automatically
  context.subscriptions.push(statusCommand);

  // Create a status bar item
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBarItem.text = "$(rocket) Hello"; // "$(rocket)" is a codicon (VS Code's icon set)
  statusBarItem.command = "hello-world.showStatusMessage";
  statusBarItem.show();

  // Clean up when extension deactivates
  context.subscriptions.push(statusBarItem);
}

// This method is called when your extension is deactivated
export function deactivate() {}
