import { bindDropdownToggle } from "../../Hooks/dropdown.js"

function formatBlockNode(tagName) {
    const selection = window.getSelection()
    if (!selection || !selection.rangeCount) return

    const range = selection.getRangeAt(0)
    let container = range.commonAncestorContainer

    if (container.nodeType === 3) {
        container = container.parentElement
    }

    const targetBlock = container.closest("p, h1, h2, h3, h4, h5, h6, blockquote, pre")

    if (targetBlock) {
        const newElement = document.createElement(tagName)
        while (targetBlock.firstChild) {
            newElement.appendChild(targetBlock.firstChild)
        }
        targetBlock.replaceWith(newElement)

        const newRange = document.createRange()
        newRange.selectNodeContents(newElement)
        newRange.collapse(false)
        selection.removeAllRanges()
        selection.addRange(newRange)
    }
}

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
                formatBlockNode(value)
            }

            dropdown.classList.remove("is-open")
            button.classList.remove("is-active")
        })
    })
}
