const vscode = require('vscode');
const { exec } = require('child_process');

function changeKeyboardLayout() {
    exec('/usr/local/bin/im-select com.apple.keylayout.ABC', (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(`执行错误: ${error.message}`);
            return;
        }
    });
}

function activate(context) {
    const disposable = vscode.window.onDidChangeVisibleTextEditors(editor => {
        if (editor) {
            changeKeyboardLayout();
        }
    });

    const commandDisposable = vscode.commands.registerCommand('autoinputmethodabc.changeKeyboardLayout', () => {
        vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup').then(() => {
            changeKeyboardLayout();
        });
    });

    context.subscriptions.push(disposable, commandDisposable);
}
exports.activate = activate;