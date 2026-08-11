import "../shared/toolbar/Index/index.css"
import "../shared/statusbar/Components/index.css"
import { createToolbar } from "../shared/toolbar/Index/index.js"
import { createStatusbar } from "../shared/statusbar/Components/index.js"
import { makeResizable } from "../shared/statusbar/Hooks/resize.js"

export function createLightEditor(options) {
    const editor = document.createElement("div")
    editor.className = "forge-editor forge-editor--light"

    editor.appendChild(createToolbar())

    const content = document.createElement("div")
    content.className = "forge-editor__content"
    content.contentEditable = "true"
    content.setAttribute("data-placeholder", options.placeholder)
    editor.appendChild(content)

    const statusbar = createStatusbar()
    editor.appendChild(statusbar)

    makeResizable(statusbar, editor, { minHeight: 100 })

    return editor
}
