import { useEffect } from "preact/hooks"
import { getColorInCSS, findColoredAncestor } from "./colorUtils"

export function usePenMode(activeColorRef, targetClassName) {
    useEffect(() => {
        function handleBeforeInput(e) {
            if (e.inputType !== "insertText" || !e.data) return
            if (!activeColorRef.current) return

            const target = e.target
            if (!target || !target.classList || !target.classList.contains(targetClassName)) return

            const sel = window.getSelection()
            if (!sel || !sel.rangeCount) return
            const range = sel.getRangeAt(0)
            if (!range.collapsed) return

            const targetColor = getColorInCSS(activeColorRef.current)

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
            span.style.color = activeColorRef.current
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
}
