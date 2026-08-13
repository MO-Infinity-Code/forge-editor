import { useState } from "preact/hooks"

export function useFontNameToolbar() {
    const [currentFont, setCurrentFont] = useState("Nunito Sans")

    const applyFont = (font) => {
        document.execCommand("fontName", false, font)
        setCurrentFont(font)
    }

    return {
        currentFont,
        applyFont
    }
}
