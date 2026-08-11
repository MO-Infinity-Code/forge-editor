import "./Style.css"
import { styleTemplate } from "./Style.template.js"
import { bindDropdownToggle } from "../Hooks/dropdown.js"

export function createStyleToolbar() {
    const wrapper = document.createElement("div")
    wrapper.innerHTML = styleTemplate.trim()
    const container = wrapper.firstElementChild

    const button = container.querySelector("[data-command='style']")
    const dropdown = container.querySelector(".forge-dropdown-style")

    bindDropdownToggle(button, dropdown)

    return container
}
