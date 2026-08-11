// shared/toolbar/table.js
export function createTableToolbar() {
    const container = document.createElement("div")
    container.className = "forge-toolbar-group forge-toolbar-table"

    const button = document.createElement("button")
    button.type = "button"
    button.className = "forge-toolbar-button"
    button.dataset.command = "table"
    button.setAttribute("aria-label", "Table")
    button.textContent = "▦"

    const dropdown = document.createElement("div")
    dropdown.className = "forge-toolbar-dropdown forge-dropdown-table"
    dropdown.setAttribute("role", "list")

    const picker = document.createElement("div")
    picker.className = "forge-table-picker"
    const mousecatcher = document.createElement("div")
    mousecatcher.className = "forge-table-picker-mousecatcher"
    mousecatcher.dataset.event = "insertTable"
    mousecatcher.dataset.value = "1x1"
    const highlight = document.createElement("div")
    highlight.className = "forge-table-picker-highlight"
    const unhighlight = document.createElement("div")
    unhighlight.className = "forge-table-picker-unhighlight"
    picker.appendChild(mousecatcher)
    picker.appendChild(highlight)
    picker.appendChild(unhighlight)

    const dimension = document.createElement("div")
    dimension.className = "forge-table-dimension"
    dimension.textContent = "1 x 1"

    dropdown.appendChild(picker)
    dropdown.appendChild(dimension)

    container.appendChild(button)
    container.appendChild(dropdown)

    return container
}
