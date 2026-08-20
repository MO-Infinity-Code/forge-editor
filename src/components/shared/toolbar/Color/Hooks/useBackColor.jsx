import { useState, useRef } from "preact/hooks"
import { usePenModeBack } from "./usePenModeBack"
import { handleBackColor } from "./backColorHandler"

export function useBackColor(targetClassName = "forge-editor__content") {
    const [recentBackColor, setRecentBackColor] = useState("#FFFFFF")
    const activeBackColorRef = useRef(null)
    usePenModeBack(activeBackColorRef, targetClassName)
    const applyBackColor = (value) => {
        const targetColor = value || "#FFFFFF"
        const selection = window.getSelection()

        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0)
            handleBackColor(range, selection, targetColor)
        }

        activeBackColorRef.current = targetColor
        setRecentBackColor(targetColor)
    }

    const applyRecentBackColor = () => {
        applyBackColor(recentBackColor)
    }

    const resetBackColor = () => {
        applyBackColor("#FFFFFF")
        activeBackColorRef.current = null
    }

    return {
        recentBackColor,
        applyBackColor,
        applyRecentBackColor,
        resetBackColor
    }
}
