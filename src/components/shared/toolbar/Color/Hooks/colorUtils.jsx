export function getColorInCSS(value) {
    const temp = document.createElement("span")
    temp.style.color = value
    document.body.appendChild(temp)
    const color = window.getComputedStyle(temp).color
    document.body.removeChild(temp)
    return color
}

export function findColoredAncestor(node, targetColor) {
    let current = node
    while (current && current !== document.body) {
        if (
            current.nodeType === Node.ELEMENT_NODE &&
            current.tagName === "SPAN" &&
            current.style.color
        ) {
            if (getColorInCSS(current.style.color) === targetColor) {
                return current
            }
        }
        current = current.parentElement
    }
    return null
}
