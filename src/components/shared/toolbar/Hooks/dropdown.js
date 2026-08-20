export function bindDropdownToggle(button, dropdown) {
    function closeDropdown() {
        dropdown.classList.remove("is-open")
        button.classList.remove("is-active")
        document.removeEventListener("click", onDocumentClick)
    }

    function onDocumentClick(e) {
        if (!dropdown.contains(e.target) && !button.contains(e.target)) {
            closeDropdown()
        }
    }

    function onButtonClick(e) {
        e.stopPropagation()
        const isOpen = dropdown.classList.contains("is-open")

        document.querySelectorAll(".forge-toolbar-dropdown.is-open").forEach((el) => {
            el.classList.remove("is-open")
        })
        document.querySelectorAll(".forge-toolbar-button.is-active").forEach((el) => {
            el.classList.remove("is-active")
        })

        if (!isOpen) {
            dropdown.classList.add("is-open")
            button.classList.add("is-active")
            document.addEventListener("click", onDocumentClick)
        }
    }

    button.addEventListener("click", onButtonClick)

    return function destroy() {
        button.removeEventListener("click", onButtonClick)
        document.removeEventListener("click", onDocumentClick)
    }
}
