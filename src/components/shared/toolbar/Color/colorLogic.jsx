import { useState } from "preact/hooks"

export function useColorToolbar() {
    const [openDropdown, setOpenDropdown] = useState(null)
    const [recentForeColor, setRecentForeColor] = useState("#000000")
    const [recentBackColor, setRecentBackColor] = useState("#FFFF00")

    const toggleDropdown = (type) => {
        setOpenDropdown(openDropdown === type ? null : type)
    }

    const applyColor = (type, value) => {
        if (type === "foreColor") {
            document.execCommand("foreColor", false, value)
            setRecentForeColor(value)
        } else if (type === "backColor") {
            document.execCommand("backColor", false, value)
            setRecentBackColor(value)
        }
        setOpenDropdown(null)
    }

    const applyRecentColor = (type) => {
        if (type === "foreColor") {
            document.execCommand("foreColor", false, recentForeColor)
        } else if (type === "backColor") {
            document.execCommand("backColor", false, recentBackColor)
        }
    }

    const resetColor = (type) => {
        if (type === "foreColor") {
            document.execCommand("removeFormat", false, null)
            setRecentForeColor("#000000")
        } else if (type === "backColor") {
            document.execCommand("backColor", false, "transparent")
            setRecentBackColor("transparent")
        }
        setOpenDropdown(null)
    }

    return {
        openDropdown,
        toggleDropdown,
        applyColor,
        applyRecentColor,
        resetColor,
        recentForeColor,
        recentBackColor
    }
}
