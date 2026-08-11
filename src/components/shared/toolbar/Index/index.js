import { createStyleToolbar } from "../style.js"
import { createFontToolbar } from "../font.js"
import { createFontNameToolbar } from "../fontname.js"
import { createColorToolbar } from "../color.js"
import { createParagraphToolbar } from "../paragraph.js"
import { createTableToolbar } from "../table.js"
import { createInsertToolbar } from "../insert.js"
import { createViewToolbar } from "../view.js"

export function createToolbar() {
    const toolbar = document.createElement("div")
    toolbar.className = "forge-editor__toolbar"
    toolbar.setAttribute("role", "toolbar")

    toolbar.appendChild(createStyleToolbar())
    toolbar.appendChild(createFontToolbar())
    toolbar.appendChild(createFontNameToolbar())
    toolbar.appendChild(createColorToolbar())
    toolbar.appendChild(createParagraphToolbar())
    toolbar.appendChild(createTableToolbar())
    toolbar.appendChild(createInsertToolbar())
    toolbar.appendChild(createViewToolbar())

    return toolbar
}
