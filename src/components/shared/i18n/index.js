import en from "./locales/en.json"
import ar from "./locales/ar.json"

const locales = { en, ar }

const DEFAULT_LANG = "en"

export function t(lang, key) {
    const dict = locales[lang] || locales[DEFAULT_LANG]
    return dict[key] || locales[DEFAULT_LANG][key] || key
}

export function registerLocale(lang, dict) {
    locales[lang] = { ...(locales[lang] || {}), ...dict }
}

export function getAvailableLocales() {
    return Object.keys(locales)
}
