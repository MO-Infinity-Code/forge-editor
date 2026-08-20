export function handleContentClick(contentElement) {
    contentElement.addEventListener("click", (e) => {
        if (e.target === contentElement) {
            const selection = window.getSelection()
            if (!selection) return

            const lastChild = contentElement.lastElementChild

            if (
                !lastChild ||
                lastChild.tagName === "PRE" ||
                lastChild.tagName === "BLOCKQUOTE" ||
                /^H[1-6]$/.test(lastChild.tagName)
            ) {
                const p = document.createElement("p")
                p.innerHTML = "<br>"
                contentElement.appendChild(p)

                const range = document.createRange()
                range.setStart(p, 0)
                range.collapse(true)
                selection.removeAllRanges()
                selection.addRange(range)
            }
        }
    })
}
