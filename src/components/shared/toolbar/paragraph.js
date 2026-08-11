// shared/toolbar/paragraph.js
export function createParagraphToolbar() {
    const container = document.createElement("div")
    container.className = "forge-toolbar-group forge-toolbar-paragraph"

    const ulBtn = document.createElement("button")
    ulBtn.type = "button"
    ulBtn.className = "forge-toolbar-button"
    ulBtn.dataset.command = "insertUnorderedList"
    ulBtn.setAttribute("aria-label", "Unordered list")
    ulBtn.textContent = "••"

    const olBtn = document.createElement("button")
    olBtn.type = "button"
    olBtn.className = "forge-toolbar-button"
    olBtn.dataset.command = "insertOrderedList"
    olBtn.setAttribute("aria-label", "Ordered list")
    olBtn.textContent = "1."

    const paraBtn = document.createElement("button")
    paraBtn.type = "button"
    paraBtn.className = "forge-toolbar-button"
    paraBtn.dataset.command = "paragraph"
    paraBtn.setAttribute("aria-label", "Paragraph")
    paraBtn.textContent = "≡"

    const dropdown = document.createElement("div")
    dropdown.className = "forge-toolbar-dropdown forge-dropdown-paragraph"
    dropdown.setAttribute("role", "list")

    const alignGroup = document.createElement("div")
    alignGroup.className = "forge-toolbar-group forge-toolbar-align"
    const alignCommands = [
        { cmd: "justifyLeft", label: "Align left", icon: "←" },
        { cmd: "justifyCenter", label: "Align center", icon: "↔" },
        { cmd: "justifyRight", label: "Align right", icon: "→" },
        { cmd: "justifyFull", label: "Justify", icon: "☰" }
    ]
    alignCommands.forEach(({ cmd, label, icon }) => {
        const btn = document.createElement("button")
        btn.type = "button"
        btn.className = "forge-toolbar-button"
        btn.dataset.command = cmd
        btn.setAttribute("aria-label", label)
        btn.textContent = icon
        alignGroup.appendChild(btn)
    })

    const listGroup = document.createElement("div")
    listGroup.className = "forge-toolbar-group forge-toolbar-list"
    const outdentBtn = document.createElement("button")
    outdentBtn.type = "button"
    outdentBtn.className = "forge-toolbar-button"
    outdentBtn.dataset.command = "outdent"
    outdentBtn.setAttribute("aria-label", "Outdent")
    outdentBtn.textContent = "←"
    const indentBtn = document.createElement("button")
    indentBtn.type = "button"
    indentBtn.className = "forge-toolbar-button"
    indentBtn.dataset.command = "indent"
    indentBtn.setAttribute("aria-label", "Indent")
    indentBtn.textContent = "→"
    listGroup.appendChild(outdentBtn)
    listGroup.appendChild(indentBtn)

    dropdown.appendChild(alignGroup)
    dropdown.appendChild(listGroup)

    container.appendChild(ulBtn)
    container.appendChild(olBtn)
    container.appendChild(paraBtn)
    container.appendChild(dropdown)

    return container
}
