// shared/toolbar/color.js
const colors = [
    ["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
    ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"],
    ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"],
    ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"],
    ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"],
    ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"],
    ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"],
    ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]
]

function createColorPalette(event) {
    const palette = document.createElement("div")
    palette.className = "forge-color-palette"
    colors.forEach((rowColors) => {
        const row = document.createElement("div")
        row.className = "forge-color-row"
        rowColors.forEach((color) => {
            const btn = document.createElement("button")
            btn.type = "button"
            btn.className = "forge-color-button"
            btn.style.backgroundColor = color
            btn.dataset.event = event
            btn.dataset.value = color
            btn.setAttribute("aria-label", color)
            row.appendChild(btn)
        })
        palette.appendChild(row)
    })
    return palette
}

export function createColorToolbar() {
    const container = document.createElement("div")
    container.className = "forge-toolbar-group forge-toolbar-color"

    const recentBtn = document.createElement("button")
    recentBtn.type = "button"
    recentBtn.className = "forge-toolbar-button forge-current-color"
    recentBtn.dataset.command = "recentColor"
    recentBtn.setAttribute("aria-label", "Recent Color")
    recentBtn.innerHTML = `<span class="forge-recent-color" style="background-color: #FFFF00; color: #000000">A</span>`

    const moreBtn = document.createElement("button")
    moreBtn.type = "button"
    moreBtn.className = "forge-toolbar-button forge-color-dropdown-button"
    moreBtn.setAttribute("aria-label", "More Color")
    moreBtn.textContent = "▼"

    const dropdown = document.createElement("div")
    dropdown.className = "forge-toolbar-dropdown forge-dropdown-color"
    dropdown.setAttribute("role", "list")

    const backSection = document.createElement("div")
    backSection.className = "forge-color-section"
    backSection.innerHTML = `<div class="forge-color-title">Background Color</div>`
    const backReset = document.createElement("button")
    backReset.type = "button"
    backReset.className = "forge-color-reset"
    backReset.dataset.event = "backColor"
    backReset.dataset.value = "transparent"
    backReset.textContent = "Transparent"
    backSection.appendChild(backReset)
    backSection.appendChild(createColorPalette("backColor"))

    const textSection = document.createElement("div")
    textSection.className = "forge-color-section"
    textSection.innerHTML = `<div class="forge-color-title">Text Color</div>`
    const textReset = document.createElement("button")
    textReset.type = "button"
    textReset.className = "forge-color-reset"
    textReset.dataset.event = "removeFormat"
    textReset.dataset.value = "foreColor"
    textReset.textContent = "Reset to default"
    textSection.appendChild(textReset)
    textSection.appendChild(createColorPalette("foreColor"))

    dropdown.appendChild(backSection)
    dropdown.appendChild(textSection)

    container.appendChild(recentBtn)
    container.appendChild(moreBtn)
    container.appendChild(dropdown)

    return container
}
