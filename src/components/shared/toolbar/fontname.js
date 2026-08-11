// shared/toolbar/fontname.js
export function createFontNameToolbar() {
    const fonts = [
        "Arial",
        "Arial Black",
        "Comic Sans MS",
        "Courier New",
        "Helvetica",
        "Impact",
        "Tahoma",
        "Times New Roman",
        "Verdana",
        "Nunito Sans",
        "Segoe UI"
    ]

    const container = document.createElement("div")
    container.className = "forge-toolbar-group forge-toolbar-fontname"

    const button = document.createElement("button")
    button.type = "button"
    button.className = "forge-toolbar-button forge-fontname-button"
    button.dataset.command = "fontName"
    button.setAttribute("aria-label", "Font Family")
    button.innerHTML = '<span class="forge-current-fontname">Nunito Sans</span>'

    const dropdown = document.createElement("div")
    dropdown.className = "forge-toolbar-dropdown forge-dropdown-fontname"
    dropdown.setAttribute("role", "list")
    dropdown.setAttribute("aria-label", "Font Family")

    fonts.forEach((font) => {
        const a = document.createElement("a")
        a.className = "forge-dropdown-item"
        a.href = "#"
        a.dataset.value = font
        a.setAttribute("role", "listitem")
        a.style.fontFamily = font
        a.textContent = font
        dropdown.appendChild(a)
    })

    container.appendChild(button)
    container.appendChild(dropdown)

    return container
}
