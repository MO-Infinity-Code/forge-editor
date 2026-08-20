const cleanNbsps = (element) => {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false)
    let node
    while ((node = walker.nextNode())) {
        node.nodeValue = node.nodeValue.replace(/\u00A0/g, " ")
    }
}

const unwrapAndClean = (element) => {
    const styledNodes = element.querySelectorAll("span, b, u, strong")

    styledNodes.forEach((node) => {
        const hasStyleAttributes = node.getAttribute("style") || node.getAttribute("class")
        const isFormattingTag = ["B", "U", "STRONG"].includes(node.tagName)

        if (!hasStyleAttributes && !isFormattingTag) {
            const parent = node.parentNode
            while (node.firstChild) {
                parent.insertBefore(node.firstChild, node)
            }
            parent.removeChild(node)
        } else if (!node.textContent || node.textContent.replace(/\u200B/g, "").length === 0) {
            node.remove()
        }
    })
}

export const handleRemoveFormat = (range, selection) => {
    if (range.collapsed) return

    let parentContainer = range.commonAncestorContainer
    if (parentContainer.nodeType === 3) parentContainer = parentContainer.parentNode

    // البحث عن أقرب عنصر حاوي سطر (سواء كان PRE أو P أو DIV أو غيره)
    while (
        parentContainer &&
        parentContainer.getAttribute &&
        parentContainer.getAttribute("contenteditable") !== "true"
    ) {
        const display = window.getComputedStyle(parentContainer).display
        if (display === "block" || display === "flex" || parentContainer.tagName === "PRE") {
            break
        }
        parentContainer = parentContainer.parentNode
    }

    const extractedFragment = range.extractContents()
    const plainText = extractedFragment.textContent.replace(/\u00A0/g, " ")

    const textNode = document.createTextNode(plainText)
    range.insertNode(textNode)

    if (parentContainer && parentContainer.getAttribute("contenteditable") !== "true") {
        unwrapAndClean(parentContainer)
        cleanNbsps(parentContainer)
        parentContainer.normalize()
    }

    const newRange = document.createRange()
    newRange.selectNodeContents(textNode)
    selection.removeAllRanges()
    selection.addRange(newRange)
}
