export const handleFontName = (range, selection, fontName) => {
    const targetFont = fontName || "Arial"
    if (!range) return

    if (!range.collapsed) {
        const selectedText = range.extractContents()
        const span = document.createElement("span")
        span.style.fontFamily = targetFont
        span.appendChild(selectedText)
        range.insertNode(span)

        const newRange = document.createRange()
        newRange.selectNodeContents(span)
        selection.removeAllRanges()
        selection.addRange(newRange)
        return
    }

    const zeroWidthSpace = "\u200B"
    const span = document.createElement("span")
    span.style.fontFamily = targetFont
    span.appendChild(document.createTextNode(zeroWidthSpace))
    range.insertNode(span)

    const newRange = document.createRange()
    newRange.setStart(span.firstChild, 1)
    newRange.collapse(true)
    selection.removeAllRanges()
    selection.addRange(newRange)
}

export const getActiveFontName = (editorElement) => {
    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return null

    let node = selection.anchorNode
    if (!node) return null

    if (editorElement && !editorElement.contains(node)) {
        return null
    }

    if (node.nodeType === 3) node = node.parentNode

    while (node && node.getAttribute && node.getAttribute("contenteditable") !== "true") {
        const fontFamily = node.style?.fontFamily || window.getComputedStyle(node).fontFamily
        if (fontFamily) {
            const cleanFont = fontFamily.split(",")[0].replace(/['"]/g, "").trim()
            if (cleanFont) return cleanFont
        }
        node = node.parentNode
    }

    return null
}
