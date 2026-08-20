import { render } from "preact"
import "../shared/toolbar/Index/index.css"
import "../shared/toolbar/View/Components/view.css"
import { Toolbar } from "../shared/toolbar/Index/index.jsx"
import { Statusbar } from "../shared/statusbar/Components/index.jsx"
import { makeResizable } from "../shared/statusbar/Hooks/resize.js"
import { applyStyleToolbarLogic } from "../shared/toolbar/Style/Hooks/styleLogic.jsx"
import { applyToolbarTooltips } from "../shared/i18n/apply.js"
import { ensureParagraph } from "../shared/toolbar/Style/Utils/ensureParagraph.jsx"
import { CreateImagePopover } from "../shared/toolbar/ImagePopover/Components"

function createEditorAPI(contentElement) {
    return {
        getHTML() {
            return contentElement.innerHTML
        },
        setHTML(html) {
            contentElement.innerHTML = html
        },
        getText() {
            return contentElement.textContent
        },
        getSelection() {
            const sel = window.getSelection()
            return sel ? sel.toString() : ""
        }
    }
}

export function createLightEditor(options) {
    const lang = options.lang || "en"
    const dir = options.dir || "ltr"
    const vnode = (
        <div
            className="forge-editor forge-editor--light"
            lang={lang}
            dir={dir}>
            <Toolbar />
            <div
                className="forge-editor__content"
                contentEditable="true"
                data-placeholder={options.placeholder || ""}
            />
            <Statusbar />
            <CreateImagePopover />
        </div>
    )
    const container = document.createElement("div")
    render(vnode, container)
    const element = container.firstElementChild
    const contentElement = element.querySelector(".forge-editor__content")
    ensureParagraph(contentElement)
    const styleToolbarGroup = element.querySelector(".forge-toolbar-style")
    applyStyleToolbarLogic(styleToolbarGroup)
    const toolbarElement = element.querySelector(".forge-editor__toolbar")
    applyToolbarTooltips(toolbarElement, lang)
    const statusbarElement = element.querySelector(".forge-statusbar")
    makeResizable(statusbarElement, element, { minHeight: 100 })

    const api = createEditorAPI(contentElement)

    return { element, ...api }
}
