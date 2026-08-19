import { useRef } from "preact/hooks"

function saveSelection() {
    const sel = window.getSelection()
    if (sel && sel.rangeCount > 0) {
        return sel.getRangeAt(0).cloneRange()
    }
    return null
}

function restoreSelection(range) {
    if (!range) return
    const sel = window.getSelection()
    if (sel) {
        sel.removeAllRanges()
        sel.addRange(range)
    }
}

export function useParagraphToolbar() {
    const savedRangeRef = useRef(null)

    const saveSelectionRange = () => {
        savedRangeRef.current = saveSelection()
    }

    const execCommand = (command) => {
        restoreSelection(savedRangeRef.current)
        document.execCommand(command, false, null)
    }

    return {
        execCommand,
        saveSelectionRange
    }
}
