// shared/toolbar/style.js
export function createStyleToolbar() {
    const container = document.createElement("div")
    container.className = "forge-toolbar-group forge-toolbar-style"

    const group = document.createElement("div")
    group.className = "forge-toolbar-group"

    const button = document.createElement("button")
    button.type = "button"
    button.className = "forge-toolbar-button"
    button.dataset.command = "style"
    button.setAttribute("aria-label", "Style")
    button.innerHTML = `<span class="forge-icon">✦</span>`

    const dropdown = document.createElement("div")
    dropdown.className = "forge-toolbar-dropdown forge-dropdown-style"
    dropdown.setAttribute("role", "list")
    dropdown.setAttribute("aria-label", "Style")

    const items = [
        { tag: "p", label: "Normal", value: "p" },
        { tag: "blockquote", label: "Blockquote", value: "blockquote" },
        { tag: "pre", label: "Code", value: "pre" },
        { tag: "h1", label: "Header 1", value: "h1" },
        { tag: "h2", label: "Header 2", value: "h2" },
        { tag: "h3", label: "Header 3", value: "h3" },
        { tag: "h4", label: "Header 4", value: "h4" },
        { tag: "h5", label: "Header 5", value: "h5" },
        { tag: "h6", label: "Header 6", value: "h6" }
    ]

    items.forEach(({ tag, label, value }) => {
        const a = document.createElement("a")
        a.className = "forge-dropdown-item"
        a.href = "#"
        a.dataset.value = value
        a.setAttribute("role", "listitem")
        a.innerHTML = `<${tag}>${label}</${tag}>`
        dropdown.appendChild(a)
    })

    group.appendChild(button)
    group.appendChild(dropdown)
    container.appendChild(group)

    return container
}
