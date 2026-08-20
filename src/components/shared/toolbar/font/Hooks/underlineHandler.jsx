export const handleUnderline = (range, selection, isActive) => {
    if (!range.collapsed) {
        if (isActive) {
            let node = range.commonAncestorContainer
            if (node.nodeType === 3) node = node.parentNode
            while (node && node.getAttribute && node.getAttribute("contenteditable") !== "true") {
                if (node.style && node.style.textDecoration) {
                    node.style.textDecoration = ""
                    if (!node.getAttribute("style")) {
                        const parent = node.parentNode
                        while (node.firstChild) parent.insertBefore(node.firstChild, node)
                        parent.removeChild(node)
                    }
                    break
                }
                node = node.parentNode
            }
        } else {
            const selectedText = range.extractContents()
            const span = document.createElement("span")
            span.style.textDecoration = "underline"
            span.appendChild(selectedText)
            range.insertNode(span)
        }
        return
    }

    if (isActive) {
        let currentNode = range.startContainer
        let styledElement = currentNode.nodeType === 1 ? currentNode : currentNode.parentNode

        while (
            styledElement &&
            styledElement.getAttribute &&
            styledElement.getAttribute("contenteditable") !== "true"
        ) {
            if (styledElement.style && styledElement.style.textDecoration) {
                break
            }
            styledElement = styledElement.parentNode
        }

        const normalSpan = document.createElement("span")
        normalSpan.innerHTML = "\u200B"

        if (styledElement && styledElement.parentNode) {
            if (styledElement.nextSibling) {
                styledElement.parentNode.insertBefore(normalSpan, styledElement.nextSibling)
            } else {
                styledElement.parentNode.appendChild(normalSpan)
            }
        } else {
            range.insertNode(normalSpan)
        }

        const newRange = document.createRange()
        newRange.setStart(normalSpan, 1)
        newRange.collapse(true)
        selection.removeAllRanges()
        selection.addRange(newRange)
    } else {
        const span = document.createElement("span")
        span.style.textDecoration = "underline"
        span.innerHTML = "\u200B"
        range.insertNode(span)

        const newRange = document.createRange()
        newRange.setStart(span, 1)
        newRange.collapse(true)
        selection.removeAllRanges()
        selection.addRange(newRange)
    }
}
