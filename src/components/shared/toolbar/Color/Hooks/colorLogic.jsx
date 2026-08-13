import { useForeColor } from "./useForeColor"
import { useBackColor } from "./useBackColor"

export function useColorToolbar() {
    const fore = useForeColor()
    const back = useBackColor()

    const applyColor = (type, value) => {
        if (type === "foreColor") fore.applyForeColor(value)
        else if (type === "backColor") back.applyBackColor(value)
    }

    const applyRecentColor = (type) => {
        if (type === "foreColor") fore.applyRecentForeColor()
        else if (type === "backColor") back.applyRecentBackColor()
    }

    const resetColor = (type) => {
        if (type === "foreColor") fore.resetForeColor()
        else if (type === "backColor") back.resetBackColor()
    }

    return {
        applyColor,
        applyRecentColor,
        resetColor,
        recentForeColor: fore.recentForeColor,
        recentBackColor: back.recentBackColor
    }
}
