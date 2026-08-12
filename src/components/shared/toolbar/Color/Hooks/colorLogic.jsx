import { useState, useEffect, useRef } from "preact/hooks"

function getColorInCSS(value) {
    const temp = document.createElement("span")
    temp.style.color = value
    document.body.appendChild(temp)
    const color = window.getComputedStyle(temp).color
    document.body.removeChild(temp)
    return color
}

function findColoredAncestor(node, targetColor) {
    let current = node
    while (current && current !== document.body) {
        if (
            current.nodeType === Node.ELEMENT_NODE &&
            current.tagName === "SPAN" &&
            current.style.color
        ) {
            if (getColorInCSS(current.style.color) === targetColor) {
                return current
            }
        }
        current = current.parentElement
    }
    return null
}

export function useColorToolbar() {
    const [recentForeColor, setRecentForeColor] = useState("#000000")
    const [recentBackColor, setRecentBackColor] = useState("#FFFF00")
    const activeForeColorRef = useRef(null)

    useEffect(() => {
        function handleBeforeInput(e) {
            if (e.inputType !== "insertText" || !e.data) return
            if (!activeForeColorRef.current) return

            const target = e.target
            if (!target || !target.classList || !target.classList.contains("forge-editor__content"))
                return

            const sel = window.getSelection()
            if (!sel || !sel.rangeCount) return
            const range = sel.getRangeAt(0)
            if (!range.collapsed) return

            const targetColor = getColorInCSS(activeForeColorRef.current)

            let node = range.startContainer
            if (node.nodeType === Node.TEXT_NODE) node = node.parentElement

            const existingSpan = findColoredAncestor(node, targetColor)

            e.preventDefault()

            if (existingSpan) {
                const textNode = document.createTextNode(e.data)
                range.insertNode(textNode)
                range.setStartAfter(textNode)
                range.collapse(true)
                sel.removeAllRanges()
                sel.addRange(range)
                return
            }

            const span = document.createElement("span")
            span.style.color = activeForeColorRef.current
            span.textContent = e.data

            range.deleteContents()
            range.insertNode(span)

            const newRange = document.createRange()
            newRange.selectNodeContents(span)
            newRange.collapse(false)
            sel.removeAllRanges()
            sel.addRange(newRange)
        }

        document.addEventListener("beforeinput", handleBeforeInput, true)
        return () => document.removeEventListener("beforeinput", handleBeforeInput, true)
    }, [])

    const applyColor = (type, value) => {
        if (type === "foreColor") {
            const sel = window.getSelection()
            const hasSelection = sel && sel.rangeCount && !sel.getRangeAt(0).collapsed

            if (hasSelection) {
                document.execCommand("styleWithCSS", false, true)
                document.execCommand("foreColor", false, value)
            }

            activeForeColorRef.current = value
            setRecentForeColor(value)
        } else if (type === "backColor") {
            document.execCommand("styleWithCSS", false, true)
            document.execCommand("backColor", false, value)
            setRecentBackColor(value)
        }
    }

    const applyRecentColor = (type) => {
        if (type === "foreColor") {
            applyColor("foreColor", recentForeColor)
        } else if (type === "backColor") {
            document.execCommand("styleWithCSS", false, true)
            document.execCommand("backColor", false, recentBackColor)
        }
    }

    const resetColor = (type) => {
        document.execCommand("styleWithCSS", false, true)
        if (type === "foreColor") {
            document.execCommand("removeFormat", false, null)
            activeForeColorRef.current = null
            setRecentForeColor("#000000")
        } else if (type === "backColor") {
            document.execCommand("backColor", false, "transparent")
            setRecentBackColor("transparent")
        }
    }

    return {
        applyColor,
        applyRecentColor,
        resetColor,
        recentForeColor,
        recentBackColor
    }
}
