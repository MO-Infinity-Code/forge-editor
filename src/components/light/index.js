// light/index.js
import { createToolbar } from "../shared/toolbar/Index/index.js"

export function createLightEditor(options) {
    const editor = document.createElement("div")
    editor.className = "forge-editor forge-editor--light"

    editor.appendChild(createToolbar())

    const content = document.createElement("div")
    content.className = "forge-editor__content"
    content.contentEditable = "true"
    content.setAttribute("data-placeholder", options.placeholder)
    editor.appendChild(content)

    return editor
}
