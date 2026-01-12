# Auto Input Method ABC

这是一个 VS Code 扩展，用于自动切换输入法到 ABC。目前只适配了 macOS 下的 im-select。

## 功能

- **编辑器切换**：切换到新的编辑器时自动切换到 ABC 输入法
- **终端切换**：切换终端实例时自动切换到 ABC 输入法
- **快捷键支持**：提供多个命令用于手动切换输入法

## 前置依赖

需要安装 [im-select](https://github.com/daipeihust/im-select)：

```bash
brew install im-select
```

## 命令

| 命令 | 说明 |
|-----|------|
| `autoinputmethodabc.changeKeyboardLayout` | 聚焦编辑器并切换到 ABC |
| `autoinputmethodabc.togglePanel` | 显示面板并聚焦终端，切换到 ABC |
| `autoinputmethodabc.focusTerminal` | 聚焦终端并切换到 ABC |

## 推荐快捷键配置

在 `keybindings.json` 中添加：

```json
{
    "key": "ctrl+,",
    "command": "autoinputmethodabc.changeKeyboardLayout"
},
{
    "key": "ctrl+t",
    "command": "autoinputmethodabc.togglePanel",
    "when": "!terminalFocus"
},
{
    "key": "ctrl+t",
    "command": "workbench.action.togglePanel",
    "when": "terminalFocus"
}
```

## 配合 Vim 插件使用

如果你使用 VSCode Vim 插件，推荐在 `settings.json` 中添加以下配置，实现进入/退出 Insert 模式时自动切换输入法：

```json
{
    "vim.autoSwitchInputMethod.enable": true,
    "vim.autoSwitchInputMethod.defaultIM": "com.apple.keylayout.ABC",
    "vim.autoSwitchInputMethod.obtainIMCmd": "/opt/homebrew/bin/im-select",
    "vim.autoSwitchInputMethod.switchIMCmd": "/opt/homebrew/bin/im-select {im}"
}
```

## 已知限制

由于 VSCode API 限制：
- 鼠标点击编辑器/终端时无法可靠触发输入法切换
- 建议使用快捷键切换区域

## 更新日志

### v0.0.4
- 新增 `togglePanel` 和 `focusTerminal` 命令
- 优化编辑器和终端焦点切换时的输入法处理
- 修复中文输入时被打断的问题

### v0.0.3
- 初始版本