// shared/toolbar/view.js
export function createViewToolbar() {
    const container = document.createElement("div")
    container.className = "forge-toolbar-group forge-toolbar-view"

    const fullscreenBtn = document.createElement("button")
    fullscreenBtn.type = "button"
    fullscreenBtn.className = "forge-toolbar-button"
    fullscreenBtn.dataset.command = "fullscreen"
    fullscreenBtn.setAttribute("aria-label", "Full Screen")
    fullscreenBtn.textContent = "⛶"

    const codeviewBtn = document.createElement("button")
    codeviewBtn.type = "button"
    codeviewBtn.className = "forge-toolbar-button"
    codeviewBtn.dataset.command = "codeview"
    codeviewBtn.setAttribute("aria-label", "Code View")
    codeviewBtn.innerHTML = "&lt;/&gt;"

    const helpBtn = document.createElement("button")
    helpBtn.type = "button"
    helpBtn.className = "forge-toolbar-button"
    helpBtn.dataset.command = "help"
    helpBtn.setAttribute("aria-label", "Help")
    helpBtn.textContent = "?"

    container.appendChild(fullscreenBtn)
    container.appendChild(codeviewBtn)
    container.appendChild(helpBtn)

    return container
}
