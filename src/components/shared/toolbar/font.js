// shared/toolbar/font.js
export function createFontToolbar() {
    const container = document.createElement("div")
    container.className = "forge-toolbar-group forge-toolbar-font"

    const boldBtn = document.createElement("button")
    boldBtn.type = "button"
    boldBtn.className = "forge-toolbar-button forge-btn-bold"
    boldBtn.dataset.command = "bold"
    boldBtn.setAttribute("aria-label", "Bold")
    boldBtn.innerHTML = "<strong>B</strong>"

    const underlineBtn = document.createElement("button")
    underlineBtn.type = "button"
    underlineBtn.className = "forge-toolbar-button forge-btn-underline"
    underlineBtn.dataset.command = "underline"
    underlineBtn.setAttribute("aria-label", "Underline")
    underlineBtn.innerHTML = "<u>U</u>"

    const removeBtn = document.createElement("button")
    removeBtn.type = "button"
    removeBtn.className = "forge-toolbar-button"
    removeBtn.dataset.command = "removeFormat"
    removeBtn.setAttribute("aria-label", "Remove Font Style")
    removeBtn.innerHTML = "<span>⌫</span>"

    container.appendChild(boldBtn)
    container.appendChild(underlineBtn)
    container.appendChild(removeBtn)

    return container
}
