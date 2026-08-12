import { bindDropdownToggle } from "../../Hooks/dropdown.js"

export function applyStyleToolbarLogic(toolbarElement) {
    const button = toolbarElement.querySelector("[data-command='style']")
    const dropdown = toolbarElement.querySelector(".forge-dropdown-style")
    if (!button || !dropdown) {
        console.warn("Style toolbar elements not found", toolbarElement)
        return
    }
    bindDropdownToggle(button, dropdown)
    const items = dropdown.querySelectorAll(".forge-dropdown-item")
    items.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault()
            const value = item.dataset.value
            if (value) {
                document.execCommand("formatBlock", false, value)
            }
            dropdown.classList.remove("open")
        })
    })
}
