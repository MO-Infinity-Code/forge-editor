import { t } from "./index.js"

export function applyToolbarTooltips(toolbar, lang) {
    const tooltips = toolbar.querySelectorAll("[data-i18n]")

    tooltips.forEach((el) => {
        const key = el.getAttribute("data-i18n")
        el.textContent = t(lang, key)
    })
}
