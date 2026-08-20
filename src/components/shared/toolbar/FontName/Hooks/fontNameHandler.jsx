export const handleFontName = (range, selection, fontName) => {
    const targetFont = fontName || "Arial"

    if (!range || !selection) return

    if (!range.collapsed) {
        const span = document.createElement("span")
        span.style.fontFamily = targetFont

        try {
            span.appendChild(range.extractContents())
            range.insertNode(span)
        } catch (e) {
            document.execCommand("fontName", false, targetFont)
            return
        }

        const newRange = document.createRange()
        newRange.selectNodeContents(span)
        selection.removeAllRanges()
        selection.addRange(newRange)
        return
    }

    const span = document.createElement("span")
    span.style.fontFamily = targetFont
    const zeroWidthSpace = document.createTextNode("\u200B")
    span.appendChild(zeroWidthSpace)

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

    while (node && node !== editorElement) {
        if (node.style && node.style.fontFamily) {
            const cleanFont = node.style.fontFamily.split(",")[0].replace(/['"]/g, "").trim()
            if (cleanFont) return cleanFont
        }
        node = node.parentNode
    }

    const computedFont = window.getComputedStyle(editorElement).fontFamily
    if (computedFont) {
        return computedFont.split(",")[0].replace(/['"]/g, "").trim()
    }

    return null
}
