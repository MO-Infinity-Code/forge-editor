import { useEffect } from "preact/hooks"

export function usePenModeBack(activeBackColorRef, targetClassName) {
    useEffect(() => {
        const handleBeforeInput = (e) => {
            if (!activeBackColorRef.current) return
            if (e.inputType !== "insertText" || !e.data) return

            const sel = window.getSelection()
            if (!sel || !sel.rangeCount) return

            const range = sel.getRangeAt(0)
            const editor =
                range.startContainer.nodeType === 1 ?
                    range.startContainer.closest(`.${targetClassName}`)
                :   range.startContainer.parentElement?.closest(`.${targetClassName}`)

            if (!editor) return

            e.preventDefault()

            const span = document.createElement("span")
            span.style.backgroundColor = activeBackColorRef.current
            span.textContent = e.data

            range.deleteContents()
            range.insertNode(span)

            const newRange = document.createRange()
            newRange.setStartAfter(span)
            newRange.collapse(true)

            sel.removeAllRanges()
            sel.addRange(newRange)
        }

        document.addEventListener("beforeinput", handleBeforeInput, true)
        return () => {
            document.removeEventListener("beforeinput", handleBeforeInput, true)
        }
    }, [targetClassName, activeBackColorRef])
}
