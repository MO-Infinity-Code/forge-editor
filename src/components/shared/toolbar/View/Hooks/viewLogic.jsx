export function useViewToolbar() {
    const toggleFullscreen = () => {
        const editor = document.querySelector(".forge-editor")
        if (!editor) return
        if (!document.fullscreenElement) {
            editor.requestFullscreen().catch(() => {})
        } else {
            document.exitFullscreen().catch(() => {})
        }
    }

    const toggleCodeView = () => {
        const content = document.querySelector(".forge-editor__content")
        if (!content) return
        if (content.contentEditable === "true") {
            content.contentEditable = "false"
            const html = content.innerHTML
            content.textContent = html
        } else {
            content.contentEditable = "true"
            const text = content.textContent
            content.innerHTML = text
        }
        content.focus()
    }

    const showHelp = () => {
        const helpText = [
            "Forge Editor - Keyboard Shortcuts:",
            "",
            "Bold: Ctrl+B",
            "Underline: Ctrl+U",
            "Link: Ctrl+K",
            "Undo: Ctrl+Z",
            "Redo: Ctrl+Y",
            "",
            "Visit: https://github.com/your-repo/forge-edit"
        ].join("\n")
        alert(helpText)
    }

    return {
        toggleFullscreen,
        toggleCodeView,
        showHelp
    }
}
