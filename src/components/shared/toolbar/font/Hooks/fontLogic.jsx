import { useState, useEffect } from "preact/hooks"
import { handleBold } from "./boldHandler.jsx"
import { handleUnderline } from "./underlineHandler.jsx"
import { handleRemoveFormat } from "./removeFormatHandler.jsx"

export function useFontToolbar() {
    const [isBold, setIsBold] = useState(false)
    const [isUnderline, setIsUnderline] = useState(false)

    const checkState = () => {
        const selection = window.getSelection()
        if (!selection || selection.rangeCount === 0) return

        let node = selection.anchorNode
        if (!node) return
        if (node.nodeType === 3) node = node.parentNode

        let activeBold = false
        let activeUnderline = false

        while (node && node.getAttribute && node.getAttribute("contenteditable") !== "true") {
            const fontWeight = window.getComputedStyle(node).fontWeight
            const textDecoration = window.getComputedStyle(node).textDecoration

            if (
                fontWeight === "bold" ||
                parseInt(fontWeight) >= 700 ||
                node.tagName === "B" ||
                node.tagName === "STRONG"
            ) {
                activeBold = true
            }
            if (textDecoration.includes("underline") || node.tagName === "U") {
                activeUnderline = true
            }
            node = node.parentNode
        }

        setIsBold(activeBold)
        setIsUnderline(activeUnderline)
    }

    useEffect(() => {
        document.addEventListener("selectionchange", checkState)
        return () => document.removeEventListener("selectionchange", checkState)
    }, [])

    const executeCommand = (command) => {
        const selection = window.getSelection()
        if (!selection || selection.rangeCount === 0) return

        const range = selection.getRangeAt(0)

        if (command === "bold") {
            handleBold(range, selection, isBold)
        } else if (command === "underline") {
            handleUnderline(range, selection, isUnderline)
        } else if (command === "removeFormat") {
            handleRemoveFormat(range, selection)
        }

        checkState()
    }

    return { executeCommand, isBold, isUnderline }
}
