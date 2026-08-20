import { useState, useEffect, useRef } from "preact/hooks"
import { handleFontName, getActiveFontName } from "./fontNameHandler"

export function useFontNameToolbar(editorRef) {
    const [currentFont, setCurrentFont] = useState("Arial")
    const selectedFontRef = useRef("Arial")
    const savedRangeRef = useRef(null)

    const saveSelection = () => {
        const selection = window.getSelection()
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0)
            const editor = editorRef?.current
            if (editor && editor.contains(range.commonAncestorContainer)) {
                savedRangeRef.current = range.cloneRange()
            }
        }
    }

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
        const handleSelectionChange = () => {
            saveSelection()
            checkState()
        }

        document.addEventListener("selectionchange", handleSelectionChange)

        const editor = editorRef?.current
        if (!editor) {
            return () => {
                document.removeEventListener("selectionchange", handleSelectionChange)
            }
        }

        const handleBeforeInput = (e) => {
            if (e.inputType !== "insertText" || !e.data) return

            const selection = window.getSelection()
            if (!selection || selection.rangeCount === 0) return

            const range = selection.getRangeAt(0)
            let currentNode = range.startContainer

            if (currentNode.nodeType === 3) currentNode = currentNode.parentNode

            if (
                currentNode &&
                currentNode.tagName === "SPAN" &&
                currentNode.style.fontFamily &&
                currentNode.style.fontFamily.replace(/['"]/g, "").toLowerCase() ===
                    selectedFontRef.current.toLowerCase()
            ) {
                return
            }

            e.preventDefault()

            const span = document.createElement("span")
            span.style.fontFamily = selectedFontRef.current
            span.textContent = e.data

            range.deleteContents()
            range.insertNode(span)

            const newRange = document.createRange()
            newRange.setStart(span.firstChild, span.textContent.length)
            newRange.collapse(true)

            selection.removeAllRanges()
            selection.addRange(newRange)
        }

        editor.addEventListener("beforeinput", handleBeforeInput)

        return () => {
            document.removeEventListener("selectionchange", handleSelectionChange)
            editor.removeEventListener("beforeinput", handleBeforeInput)
        }
    }, [editorRef, editorRef?.current])

    const applyFont = (fontName) => {
        const fontToApply = fontName || "Arial"
        selectedFontRef.current = fontToApply
        setCurrentFont(fontToApply)

        const editor = editorRef?.current
        if (!editor) return

        editor.focus()

        const selection = window.getSelection()
        let range = null

        if (savedRangeRef.current) {
            selection.removeAllRanges()
            selection.addRange(savedRangeRef.current)
            range = savedRangeRef.current
        } else if (selection.rangeCount > 0) {
            range = selection.getRangeAt(0)
        }

        if (!range) {
            const newRange = document.createRange()
            newRange.selectNodeContents(editor)
            newRange.collapse(false)
            selection.removeAllRanges()
            selection.addRange(newRange)
            range = newRange
        }

        handleFontName(range, selection, fontToApply)
        saveSelection()
    }

    return { currentFont, applyFont }
}
