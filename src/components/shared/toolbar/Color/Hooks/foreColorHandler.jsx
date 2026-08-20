export const handleForeColor = (range, selection, color) => {
    const targetColor = color || "#000000"
    if (!range) return

    if (!range.collapsed) {
        const selectedText = range.extractContents()
        const span = document.createElement("span")
        span.style.color = targetColor
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
    span.style.color = targetColor
    span.appendChild(document.createTextNode(zeroWidthSpace))
    range.insertNode(span)

    const newRange = document.createRange()
    newRange.setStart(span.firstChild, 1)
    newRange.collapse(true)
    selection.removeAllRanges()
    selection.addRange(newRange)
}
