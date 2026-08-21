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

function placeCaretAtEnd(el) {
    if (!el) return

    if (el.lastChild && el.lastChild.nodeName === "BR" && el.childNodes.length > 1) {
        el.removeChild(el.lastChild)
    }

    let deepest = el
    while (deepest.lastChild && deepest.lastChild.nodeName !== "BR") {
        deepest = deepest.lastChild
    }

    const range = document.createRange()

    if (deepest.nodeType === 3) {
        range.setStart(deepest, deepest.textContent.length)
        range.collapse(true)
    } else if (deepest.lastChild && deepest.lastChild.nodeName === "BR") {
        range.setStart(deepest, deepest.childNodes.length - 1)
        range.collapse(true)
    } else {
        range.selectNodeContents(deepest)
        range.collapse(false)
    }

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

    const toggleList = (tagType) => {
        restoreSelection(savedRangeRef.current)
        const sel = window.getSelection()
        if (!sel || !sel.rangeCount) return

        let node = sel.anchorNode
        if (!node) return
        if (node.nodeType === 3) node = node.parentNode

        const currentList = node.closest("ul, ol")

        if (currentList) {
            if (currentList.tagName.toLowerCase() === tagType) {
                const parent = currentList.parentNode
                let lastDiv = null
                while (currentList.firstChild) {
                    const li = currentList.firstChild
                    const div = document.createElement("div")
                    div.innerHTML = li.innerHTML
                    parent.insertBefore(div, currentList)
                    currentList.removeChild(li)
                    lastDiv = div
                }
                currentList.remove()
                placeCaretAtEnd(lastDiv)
            } else {
                const newList = document.createElement(tagType)
                newList.className =
                    tagType === "ul" ? "list-disc pl-5 my-2" : "list-decimal pl-5 my-2"
                newList.innerHTML = currentList.innerHTML
                currentList.parentNode.replaceChild(newList, currentList)
                const lastLi = newList.lastElementChild
                placeCaretAtEnd(lastLi || newList)
            }
            savedRangeRef.current = saveSelection()
            return
        }

        let block = node.closest("p, div, h1, h2, h3, h4, h5, h6") || node
        if (block.getAttribute && block.getAttribute("contenteditable") === "true") {
            const tempDiv = document.createElement("div")
            tempDiv.innerHTML = block.innerHTML
            block.innerHTML = ""
            block.appendChild(tempDiv)
            block = tempDiv
        }

        const list = document.createElement(tagType)
        list.className = tagType === "ul" ? "list-disc pl-5 my-2" : "list-decimal pl-5 my-2"

        const li = document.createElement("li")
        li.innerHTML = block.innerHTML || "<br>"
        list.appendChild(li)

        block.parentNode.replaceChild(list, block)

        placeCaretAtEnd(li)
        savedRangeRef.current = saveSelection()
    }

    const setAlignment = (alignment) => {
        restoreSelection(savedRangeRef.current)
        const sel = window.getSelection()
        if (!sel || !sel.rangeCount) return

        let node = sel.anchorNode
        if (!node) return
        if (node.nodeType === 3) node = node.parentNode

        const block = node.closest("p, div, h1, h2, h3, li") || node
        if (block) {
            block.style.textAlign = alignment
        }
    }

    return {
        saveSelectionRange,
        toggleUnorderedList: () => toggleList("ul"),
        toggleOrderedList: () => toggleList("ol"),
        setAlignment
    }
}
