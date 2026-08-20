import { useState, useEffect, useRef } from "preact/hooks"
import { handleFontName, getActiveFontName } from "./fontNameHandler.jsx"

export function useFontNameToolbar(editorRef) {
    const [currentFont, setCurrentFont] = useState("Arial")
    const selectedFontRef = useRef("Arial")

    const checkState = () => {
        const editor = editorRef?.current
        if (!editor) return

        const activeFont = getActiveFontName(editor)
        if (activeFont) {
            setCurrentFont(activeFont)
            selectedFontRef.current = activeFont
        }
    }

    useEffect(() => {
        document.addEventListener("selectionchange", checkState)

        const editor = editorRef?.current
        if (!editor) return

        const handleKeyDown = (e) => {
            if (e.key === "Enter") {
                setTimeout(() => {
                    const selection = window.getSelection()
                    if (selection && selection.rangeCount > 0) {
                        const range = selection.getRangeAt(0)
                        handleFontName(range, selection, selectedFontRef.current)
                    }
                }, 0)
            }
        }

        editor.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("selectionchange", checkState)
            editor.removeEventListener("keydown", handleKeyDown)
        }
    }, [editorRef])

    const applyFont = (fontName) => {
        const fontToApply = fontName || "Arial"
        selectedFontRef.current = fontToApply
        setCurrentFont(fontToApply)

        const editor = editorRef?.current
        if (editor) editor.focus()

        const selection = window.getSelection()
        if (!selection || selection.rangeCount === 0) return

        const range = selection.getRangeAt(0)
        handleFontName(range, selection, fontToApply)
    }

    return { currentFont, applyFont }
}
