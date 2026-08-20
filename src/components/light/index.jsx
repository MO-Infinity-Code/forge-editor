import { render } from "preact"
import { Toolbar } from "../shared/toolbar/Index/index.jsx"
import { Statusbar } from "../shared/statusbar/Components/index.jsx"
import { makeResizable } from "../shared/statusbar/Hooks/resize.js"
import { applyStyleToolbarLogic } from "../shared/toolbar/Style/Hooks/styleLogic.jsx"
import { applyToolbarTooltips } from "../shared/i18n/apply.js"
import { ensureParagraph } from "../shared/toolbar/Style/Utils/ensureParagraph.jsx"
import { handleContentClick } from "../shared/toolbar/Hooks/contentClick.js"
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
            className="forge-editor forge-editor--light flex flex-col w-full rounded-[3px] border border-[#ddd] bg-white box-border align-top min-h-[120px]"
            lang={lang}
            dir={dir}>
            <Toolbar />
            <div
                className="forge-editor__content flex-1 min-h-[60px] overflow-auto p-[10px] pb-12 outline-none box-border [&_blockquote]:my-2 [&_blockquote]:border-l-4 [&_blockquote]:border-[#ccc] [&_blockquote]:pl-4 [&_blockquote]:italic [&_pre]:bg-[#f4f4f4] [&_pre]:p-2 [&_pre]:rounded [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-bold [&_h3]:text-lg [&_h3]:font-bold"
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
    handleContentClick(contentElement)

    const styleToolbarGroup = element.querySelector(".forge-toolbar-style")
    if (styleToolbarGroup) {
        applyStyleToolbarLogic(styleToolbarGroup)
    }

    const toolbarElement = element.querySelector(".forge-editor__toolbar")
    if (toolbarElement) {
        applyToolbarTooltips(toolbarElement, lang)
    }

    const statusbarElement = element.querySelector(".forge-statusbar")
    if (statusbarElement) {
        makeResizable(statusbarElement, element, { minHeight: 120 })
    }

    const api = createEditorAPI(contentElement)

    return { element, ...api }
}
