// shared/toolbar/insert.js
export function createInsertToolbar() {
    const container = document.createElement("div")
    container.className = "forge-toolbar-group forge-toolbar-insert"

    const linkBtn = document.createElement("button")
    linkBtn.type = "button"
    linkBtn.className = "forge-toolbar-button"
    linkBtn.dataset.command = "link"
    linkBtn.setAttribute("aria-label", "Link")
    linkBtn.textContent = "🔗"

    const pictureBtn = document.createElement("button")
    pictureBtn.type = "button"
    pictureBtn.className = "forge-toolbar-button"
    pictureBtn.dataset.command = "picture"
    pictureBtn.setAttribute("aria-label", "Picture")
    pictureBtn.textContent = "🖼"

    const videoBtn = document.createElement("button")
    videoBtn.type = "button"
    videoBtn.className = "forge-toolbar-button"
    videoBtn.dataset.command = "video"
    videoBtn.setAttribute("aria-label", "Video")
    videoBtn.textContent = "▶"

    container.appendChild(linkBtn)
    container.appendChild(pictureBtn)
    container.appendChild(videoBtn)

    return container
}
