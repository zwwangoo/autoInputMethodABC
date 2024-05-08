# Auto Input Method ABC

这是一个 VS Code 扩展，用于自动切换输入法到 ABC。不过目前只适配了macos下的im-select。

## 功能

当你切换到一个新的编辑器时，这个扩展会自动切换你的输入法到 ABC。

你也可以通过按下 `ctrl+,` 来手动切换输入法到 ABC，并将焦点切换到活动的编辑器组。

## 安装

你可以从 VS Code 的扩展视图中搜索 "Auto Input Method ABC"，然后找到并安装它。

## 使用

1. 安装并启用这个扩展。
2. 打开一个新的编辑器，你的输入法会自动切换到 ABC。
3. 或者，你可以按下 `ctrl+,` 来手动切换输入法到 ABC，并将焦点切换到活动的编辑器组。
4. 你也可以在你的 `keybindings.json` 文件中添加以下键绑定，以便在按下 `ctrl+,` 时执行 `autoinputmethodabc.changeKeyboardLayout` 命令：

```json
{
    "key": "ctrl+,",
    "command": "autoinputmethodabc.changeKeyboardLayout"
}
```
