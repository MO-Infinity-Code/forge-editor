import { useState, useRef } from "preact/hooks"
import { usePenMode } from "./usePenMode"

export function useForeColor(targetClassName = "forge-editor__content") {
    const [recentForeColor, setRecentForeColor] = useState("#000000")
    const activeForeColorRef = useRef(null)

    usePenMode(activeForeColorRef, targetClassName)

    const applyForeColor = (value) => {
        const sel = window.getSelection()
        const hasSelection = sel && sel.rangeCount && !sel.getRangeAt(0).collapsed

        if (hasSelection) {
            document.execCommand("styleWithCSS", false, true)
            document.execCommand("foreColor", false, value)
        }

        activeForeColorRef.current = value
        setRecentForeColor(value)
    }

    const applyRecentForeColor = () => {
        applyForeColor(recentForeColor)
    }

    const resetForeColor = () => {
        document.execCommand("styleWithCSS", false, true)
        document.execCommand("removeFormat", false, null)
        activeForeColorRef.current = null
        setRecentForeColor("#000000")
    }

    return {
        recentForeColor,
        applyForeColor,
        applyRecentForeColor,
        resetForeColor
    }
}
