import { render } from "preact"
import "../shared/toolbar/Index/index.css"
import "../shared/toolbar/Style/Components/style.css"
import "../shared/toolbar/Color/Components/color.css"
import "../shared/toolbar/FontName/Components/fontname.css"
import "../shared/statusbar/Components/index.css"
import { Toolbar } from "../shared/toolbar/Index/index.jsx"
import { Statusbar } from "../shared/statusbar/Components/index.jsx"
import { makeResizable } from "../shared/statusbar/Hooks/resize.js"
import { applyStyleToolbarLogic } from "../shared/toolbar/Style/Hooks/styleLogic.jsx"
import { applyToolbarTooltips } from "../shared/i18n/apply.js"
import { ensureParagraph } from "../shared/toolbar/Style/Utils/ensureParagraph.jsx"

function logEvent(label, data = {}) {
    console.group(`[Event] ${label}`)
    console.log("Timestamp:", new Date().toISOString())
    Object.keys(data).forEach((key) => {
        console.log(`${key}:`, data[key])
    })
    // Log selection state
    const sel = window.getSelection()
    if (sel && sel.rangeCount > 0) {
        const range = sel.getRangeAt(0)
        const collapsed = range.collapsed
        console.log("Selection collapsed:", collapsed)
        let node = range.startContainer
        if (node.nodeType === Node.TEXT_NODE) {
            console.log(
                "Cursor in TEXT_NODE, text:",
                node.textContent,
                "offset:",
                range.startOffset
            )
            const parent = node.parentElement
            if (parent) {
                const color = window.getComputedStyle(parent).color
                console.log("Parent element:", parent.tagName, parent.className, "color:", color)
            }
        } else {
            console.log("Cursor in element:", node.tagName, node.className)
        }
        if (!collapsed) {
            const text = range.toString()
            console.log("Selected text:", text)
        }
    } else {
        console.log("No selection")
    }
    console.groupEnd()
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
        </div>
    )
    const container = document.createElement("div")
    render(vnode, container)
    const element = container.firstElementChild
    const contentElement = element.querySelector(".forge-editor__content")
    ensureParagraph(contentElement)

    // --- إضافة مستمعات الأحداث للتتبع ---
    if (contentElement) {
        // تتبع النقر بالماوس
        contentElement.addEventListener("mouseup", (e) => {
            logEvent("mouseup", {
                target: e.target.tagName,
                targetClasses: e.target.className,
                clientX: e.clientX,
                clientY: e.clientY
            })
        })

        // تتبع الكتابة (input)
        contentElement.addEventListener("input", (e) => {
            // الحصول على النص المُدخل (غير متاح مباشرة في input event، لكن يمكننا تخزين previous value)
            // نستخدم getSelection لمعرفة ما تم إدخاله
            const sel = window.getSelection()
            let insertedText = ""
            if (sel && sel.rangeCount > 0) {
                const range = sel.getRangeAt(0)
                // ليس هناك طريقة مباشرة لمعرفة النص المُدخل، لكن يمكننا تسجيل النص الجديد
                const text = contentElement.textContent
                insertedText = text // أو يمكننا مقارنة القيم السابقة
            }
            logEvent("input", {
                target: e.target.tagName,
                contentLength: contentElement.textContent.length,
                // نأخذ النص من العنصر
                fullText:
                    contentElement.textContent.substring(0, 50) +
                    (contentElement.textContent.length > 50 ? "..." : "")
            })
        })

        // تتبع الضغط على لوحة المفاتيح (keydown) لمعرفة الحرف المكتوب
        contentElement.addEventListener("keydown", (e) => {
            const key = e.key
            if (key.length === 1 && !e.ctrlKey && !e.metaKey) {
                // حرف قابل للطباعة
                logEvent("keydown", {
                    key: key,
                    code: e.code,
                    shift: e.shiftKey,
                    ctrl: e.ctrlKey,
                    alt: e.altKey
                })
            }
        })

        // تتبع تغيير اللون عبر التولبار (سنضيف مستمع في ColorToolbar لاحقاً)
        // لكن يمكننا أيضاً مراقبة تغييرات DOM في حالة execCommand
        // سنضيف MutationObserver لمراقبة إضافة spans
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "childList") {
                    mutation.addedNodes.forEach((node) => {
                        if (
                            node.nodeType === Node.ELEMENT_NODE &&
                            node.tagName === "SPAN" &&
                            node.style.color
                        ) {
                            logEvent("span_added", {
                                color: node.style.color,
                                parent: node.parentElement ? node.parentElement.tagName : null,
                                text: node.textContent
                            })
                        }
                    })
                }
            })
        })
        observer.observe(contentElement, { childList: true, subtree: true })
    }

    const styleToolbarGroup = element.querySelector(".forge-toolbar-style")
    applyStyleToolbarLogic(styleToolbarGroup)
    const toolbarElement = element.querySelector(".forge-editor__toolbar")
    applyToolbarTooltips(toolbarElement, lang)
    const statusbarElement = element.querySelector(".forge-statusbar")
    makeResizable(statusbarElement, element, { minHeight: 100 })
    return element
}
