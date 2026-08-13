import { useState } from "preact/hooks"

export function useBackColor() {
    const [recentBackColor, setRecentBackColor] = useState("#FFFF00")

    const applyBackColor = (value) => {
        document.execCommand("styleWithCSS", false, true)
        document.execCommand("backColor", false, value)
        setRecentBackColor(value)
    }

    const applyRecentBackColor = () => {
        document.execCommand("styleWithCSS", false, true)
        document.execCommand("backColor", false, recentBackColor)
    }

    const resetBackColor = () => {
        document.execCommand("styleWithCSS", false, true)
        document.execCommand("backColor", false, "transparent")
        setRecentBackColor("transparent")
    }

    return {
        recentBackColor,
        applyBackColor,
        applyRecentBackColor,
        resetBackColor
    }
}
