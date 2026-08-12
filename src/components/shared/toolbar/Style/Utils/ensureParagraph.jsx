export function ensureParagraph(contentElement) {
    if (!contentElement) return
    const hasContent =
        contentElement.children.length > 0 || contentElement.textContent.trim().length > 0
    if (!hasContent) {
        const p = document.createElement("p")
        p.innerHTML = "<br>"
        contentElement.appendChild(p)
    }
}
