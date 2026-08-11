import "../shared/toolbar/Index/index.css"
import "../shared/toolbar/Style/style.css"

import "../shared/statusbar/Components/index.css"

import { createToolbar } from "../shared/toolbar/Index/index.js"
import { createStatusbar } from "../shared/statusbar/Components/index.js"
import { makeResizable } from "../shared/statusbar/Hooks/resize.js"
import { applyToolbarTooltips } from "../shared/i18n/apply.js"

export function createLightEditor(options) {
    const lang = options.lang || "en"
    const dir = options.dir || "ltr"

    const editor = document.createElement("div")
    editor.className = "forge-editor forge-editor--light"
    editor.setAttribute("lang", lang)
    editor.setAttribute("dir", dir)

    const toolbar = createToolbar()
    applyToolbarTooltips(toolbar, lang)
    editor.appendChild(toolbar)

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
