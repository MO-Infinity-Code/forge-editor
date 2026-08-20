import { bindDropdownToggle } from "../../Hooks/dropdown.js"

export function applyStyleToolbarLogic(toolbarElement) {
    if (!toolbarElement) return

    const button = toolbarElement.querySelector("[data-command='style']")
    const dropdown = toolbarElement.querySelector(".forge-dropdown-style")

    if (!button || !dropdown) return

    bindDropdownToggle(button, dropdown)

    const items = dropdown.querySelectorAll(".forge-dropdown-item")
    items.forEach((item) => {
        item.addEventListener("mousedown", (e) => {
            e.preventDefault()
            e.stopPropagation()

            const value = item.dataset.value || item.getAttribute("data-value")

            if (value) {
                if (value === "p") {
                    document.execCommand("formatBlock", false, "<p>")
                } else {
                    document.execCommand("formatBlock", false, value)
                }
            }

            dropdown.classList.remove("is-open")
            button.classList.remove("is-active")
        })
    })
}
