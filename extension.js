const vscode = require('vscode');
const { exec } = require('child_process');

// ABC 输入法标识
const ABC_INPUT_METHOD = 'com.apple.keylayout.ABC';

/**
 * 切换到 ABC 输入法
 */
function switchToABC() {
    exec(`im-select ${ABC_INPUT_METHOD}`, (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(`切换输入法失败: ${error.message}`);
            return;
        }
    });
}

function activate(context) {
    // 1. 编辑器激活时自动切换到 ABC
    const editorChangeDisposable = vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            switchToABC();
        }
    });

    // 2. 可见编辑器变化时切换到 ABC（覆盖更多场景）
    const visibleEditorsDisposable = vscode.window.onDidChangeVisibleTextEditors(editors => {
        if (editors && editors.length > 0 && vscode.window.activeTextEditor) {
            switchToABC();
        }
    });

    // 3. 终端切换时自动切换到 ABC
    const terminalChangeDisposable = vscode.window.onDidChangeActiveTerminal(terminal => {
        if (terminal) {
            switchToABC();
        }
    });

    // 5. 手动切换到 ABC 命令（聚焦编辑器）
    const changeKeyboardDisposable = vscode.commands.registerCommand('autoinputmethodabc.changeKeyboardLayout', () => {
        vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup').then(() => {
            switchToABC();
        });
    });

    // 6. 切换面板命令 - 确保面板显示并聚焦终端，然后切换到 ABC
    const togglePanelDisposable = vscode.commands.registerCommand('autoinputmethodabc.togglePanel', () => {
        vscode.commands.executeCommand('workbench.action.focusPanel').then(() => {
            vscode.commands.executeCommand('workbench.action.terminal.focus').then(() => {
                switchToABC();
            });
        });
    });

    // 7. 聚焦终端命令（切换到 ABC）
    const focusTerminalDisposable = vscode.commands.registerCommand('autoinputmethodabc.focusTerminal', () => {
        vscode.commands.executeCommand('workbench.action.terminal.focus').then(() => {
            switchToABC();
        });
    });

    context.subscriptions.push(
        editorChangeDisposable,
        visibleEditorsDisposable,
        terminalChangeDisposable,
        changeKeyboardDisposable,
        togglePanelDisposable,
        focusTerminalDisposable
    );
}

function deactivate() { }

exports.activate = activate;
exports.deactivate = deactivate;
