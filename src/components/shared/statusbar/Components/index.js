export function createStatusbar() {
    const statusbar = document.createElement("div")
    statusbar.className = "forge-statusbar"
    statusbar.setAttribute("role", "status")

    const resizebar = document.createElement("div")
    resizebar.className = "forge-resizebar"
    resizebar.setAttribute("aria-label", "resize")

    for (let i = 0; i < 3; i++) {
        const iconBar = document.createElement("div")
        iconBar.className = "forge-icon-bar"
        resizebar.appendChild(iconBar)
    }

    statusbar.appendChild(resizebar)
    return statusbar
}
