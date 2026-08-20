import { useState, useRef } from "preact/hooks"
import { usePenMode } from "./usePenMode"
import { handleForeColor } from "./foreColorHandler"

export function useForeColor(targetClassName = "forge-editor__content") {
    const [recentForeColor, setRecentForeColor] = useState("#000000")
    const activeForeColorRef = useRef(null)

    usePenMode(activeForeColorRef, targetClassName)

    const applyForeColor = (value) => {
        const targetColor = value || "#000000"
        const selection = window.getSelection()

        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0)
            handleForeColor(range, selection, targetColor)
        }

        activeForeColorRef.current = targetColor
        setRecentForeColor(targetColor)
    }

    const applyRecentForeColor = () => {
        applyForeColor(recentForeColor)
    }

    const resetForeColor = () => {
        applyForeColor("#000000")
        activeForeColorRef.current = null
    }

    return {
        recentForeColor,
        applyForeColor,
        applyRecentForeColor,
        resetForeColor
    }
}
